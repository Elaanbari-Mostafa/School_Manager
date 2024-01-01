import express from 'express';

import { getSubscriptionByStudentId, getAllStudents, getStudentById, createStudent, deleteStudentById, updateStudentById, findStudentsByFields } from '../controllers/StudentController.js';
import { findstudentbyfildsRouteName, subscriptionRouteName } from '../common/Constant.js'

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
router.route(`/${findstudentbyfildsRouteName}`)
    .post(findStudentsByFields)

export default router; 