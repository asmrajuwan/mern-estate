import express from 'express';
import { userUpdateController } from '../controllers/userController.js';
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router();

router.post('/update/:id',verifyToken, userUpdateController
)

export default router;