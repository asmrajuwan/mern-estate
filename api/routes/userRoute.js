import express from "express";
import {
    getUserController,
    getUserlistingsController,
    userDeleteController,
    userUpdateController,
} from "../controllers/userController.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/update/:id", verifyToken, userUpdateController);
router.delete("/delete/:id", verifyToken, userDeleteController);
router.get("/listings/:id", verifyToken, getUserlistingsController);
router.get("/:id", verifyToken, getUserController);

export default router;
 