import express from "express";
import { addDiary, removeDiary } from "../controller/diaryControl.js";

const diaryRouter = express.Router();

diaryRouter.post("/add",addDiary);
diaryRouter.post("/remove",removeDiary);

export default diaryRouter;