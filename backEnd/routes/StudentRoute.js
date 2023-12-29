import express from 'express';

import { getSubscriptionByStudentId, getAllStudents, getStudentById, createStudent, deleteStudentById, updateStudentById } from '../controllers/StudentController.js';
import { subscriptionRouteName } from '../common/Constant.js'

const router = express.Router();
router.route('/')
    .get(getAllStudents)
    .post(createStudent)
router.route('/:id')
    .get(getStudentById)
    .delete(deleteStudentById)
    .put(updateStudentById)
router.route(`/:id/${subscriptionRouteName}`)
    .get(getSubscriptionByStudentId)
export default router;