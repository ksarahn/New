import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import projectRoute from "./routes/Project.js";
import cors from "cors";

const app = express();

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

app.use(express.json()); 
app.use(cors());

app.use("/api", projectRoute);

app.listen(8800, () => {
  connect();
  console.log("Connected to backend");
});
