import express from 'express';
import { userDeleteController, userUpdateController } from '../controllers/userController.js';
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router();

router.post('/update/:id',verifyToken, userUpdateController
)
router.delete('/delete/:id',verifyToken, userDeleteController
)

export default router;