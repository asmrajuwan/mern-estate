import express from "express";
import { createListingController, deleteListingController } from "../controllers/listingController.js";
import { verifyToken } from "../utils/verifyToken.js";
const router = express.Router();

router.post("/create",verifyToken, createListingController)
router.delete("/delete/:id",verifyToken, deleteListingController)

export default router;
