import express from 'express';
import { addDiary, removeDiary, getDiary } from '../controller/diaryControl.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/add', authMiddleware, addDiary);
router.post('/remove/:id', authMiddleware, removeDiary);
router.post('/getDiary', authMiddleware, getDiary);

export default router;