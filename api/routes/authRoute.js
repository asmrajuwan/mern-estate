import express from 'express';
import { SignIn, SignOut, SignUp, google } from '../controllers/authController.js';

const router = express.Router();

router.post("/sign-up",SignUp)
router.post("/sign-in",SignIn)
router.get('/signout',SignOut)
router.post("/google", google);

export default router;