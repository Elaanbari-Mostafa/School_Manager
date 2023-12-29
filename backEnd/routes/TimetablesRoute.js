import express from 'express';
import { getAllTimetibles } from '../controllers/TimetablesController.js';

const router = express.Router();
router.route('/')
    .get(getAllTimetibles)

export default router;