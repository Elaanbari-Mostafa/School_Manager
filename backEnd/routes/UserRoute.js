import express from 'express';
import { userRouteName } from '../common/Constant.js';
import { createUser, deleteUser, updateUser ,getUserById} from '../controllers/UserController.js';

const router = express.Router();
router.route(`/`)
    .post(createUser);
router.route(`/:id`)
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

export default router;