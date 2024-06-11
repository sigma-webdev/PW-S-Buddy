import { Router } from "express";
import { register, login, logout} from '../controllers/user.controller.js';
import upload from '../middlewares/multer.middleware.js';

const router = Router();



router.post('/register', upload.single("avatar") , register);
router.post('/login', login);
router.get('/logout', logout);


export default router;
