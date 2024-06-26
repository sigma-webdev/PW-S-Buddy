import {Schema, model} from "mongoose";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import crypto from "crypto";

const userSchema = new Schema({

  fullName: {
    type: 'String',
    required: [true, "Name is required"],
    minLength: [2, 'Name must be at least 5 charchter'],
    maxLength: [50, 'Name should  be less then 50 charchter'],
    lowercase: true,
    trim: true
  },
  email: {
    type: 'String',
    required: [true, 'Email is reuired'],
    lowercase: true,
    trim: true,
    unique: true,
    match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please fill in a valid email']
  },
  password: {
    type: 'String',
    required: [true, 'Password is required'],
    minLength: [8, 'Password must be at least 8 charchter'],
    select: false,
  },
  avatar:{
    public_id: {
      type: 'String'
    }, 
    secure_url: {
      type: 'String'
    }
  },
  role:{
    type: 'String',
    enum: ['STUDENT', 'MENTOR'],
    default: 'STUDENT'
  },
  session: {
    id: 'String',
    status: 'String'
  }, 
  company: 'String',
  position: 'String',
  experience: 'Number',
  domain: {
    type: [String],
  },
  expertise: {
    type: [String],
  },
  forgotPasswordToken: String,
  forgotPasswordExpiry: Date,
},

{
  timestamps: true
}
);

userSchema.pre('save', async function(next) {
  if(!this.isModified('password')) {
    return next();
  }
  this.password =await bcrypt.hash(this.password, 10);
})


userSchema.methods = {
  genreateJWTToken: async function() {
    return await jwt.sign({id: this._id, role: this.role, email: this.email, subscription: this.subscription},
      process.env.JWT_SECRET, 
      {expiresIn: process.env.JWT_EXPIRY })
  },
  comparePassword: async function(plainTextPasswor)  {
    return await bcrypt.compare(plainTextPasswor, this.password)
  },

  generatePasswordResetToken: async function() {
    const resetToken = crypto.randomBytes(20).toString('hex');
    this.forgotPasswordToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');
    this.forgotPasswordExpiry = Date.now() + 15 * 60 * 1000;
    return resetToken;
  }
}


const User = model('User', userSchema);

export default User;