import express from "express";
import cors from "cors";

import dotenv from "dotenv";

dotenv.config();

import connectDB from "./connection.js";
import UserModel from "./models/user.js";

app.use(async (req, res, next) => {
  try {
    await ConnectDB(process.env.MONGO_URL);
    next();
  } catch (error) {
    console.error("Database connection failure:", error);
    res.status(500).send("Database Connection Failed");
  }
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
