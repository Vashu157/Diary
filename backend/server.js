import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { connect } from "http2";
import diaryRouter from "./routes/diaryRouter.js";
import userRouter from "./routes/userRouter.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); ///???

app.get("/",(req,res)=>{
    res.send("hello wrld");
});
app.use("/api/diary",diaryRouter);
app.use("/api/user",userRouter);


mongoose.connect('mongodb://localhost:27017/diary', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('MongoDB connection error:', err));
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}/`);
});
