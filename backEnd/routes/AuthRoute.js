import express from 'express';
import { signInRouteName } from '../common/Constant.js';
import { signIn } from '../controllers/AuthController.js';
import { isAuthenticated } from '../middlewares/index.js';

const router = express.Router();
router.route(`/${signInRouteName}`)
    .post(signIn)

export default router;