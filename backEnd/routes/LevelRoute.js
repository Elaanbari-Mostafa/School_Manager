import express from 'express';
import { getAllLevels } from '../controllers/LevelController.js';

const router = express.Router();
router.route('/')
    .get(getAllLevels)

export default router;