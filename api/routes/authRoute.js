import express from 'express';
import { SignIn, SignUp, google } from '../controllers/authController.js';

const router = express.Router();

router.post("/sign-up",SignUp)
router.post("/sign-in",SignIn)
router.post('/google', google);

export default router;