import express from 'express';
import { signIn } from '../controllers/AuthController.js';
import { isAuthenticated } from '../middlewares/index.js';

const router = express.Router();
router.route('/signin')
    .post(signIn)

export default router;