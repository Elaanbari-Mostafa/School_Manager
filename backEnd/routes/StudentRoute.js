import express from 'express';
import { getAllStudents, getStudentById, createStudent, deleteStudentById, updateStudentById } from '../controllers/StudentController.js';

const router = express.Router();
router.route('/')
    .get(getAllStudents)
    .post(createStudent)
router.route('/:id')
    .get(getStudentById)
    .delete(deleteStudentById)
    .put(updateStudentById)

export default router;