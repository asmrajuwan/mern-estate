import express from "express";
import {
    SignIn,
    SignOut,
    SignUp,
    forgotPassword,
    google
} from "../controllers/authController.js";

const router = express.Router();

router.get("/signout", SignOut);

router.post("/sign-up", SignUp);
router.post("/sign-in", SignIn);
router.post("/forgot-password", forgotPassword);

router.post("/google", google);

export default router;
