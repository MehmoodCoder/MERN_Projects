import express from "express";
import cors from "cors";

import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

import StaticURLRoute from "./routes/static.js";
import UserRoute from "./routes/user.js";

import ConnectDB from "./connection.js";

app.use(async (req, res, next) => {
  try {
    await ConnectDB(process.env.MONGO_URL);
    next();
  } catch (error) {
    console.error("Database connection failure:", error);
    res.status(500).send("Database Connection Failed");
  }
});

app.use(cors());
app.use(express.json());

app.use("/", StaticURLRoute);
app.use("/create", UserRoute);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
