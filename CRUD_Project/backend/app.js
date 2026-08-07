import express from "express";
import cors from "cors";

import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

import StaticURLRoute from "./routes/static.js";
import UserRoute from "./routes/user.js";

import ConnectDB from "./connection.js";

app.use(cors());
app.use(express.json());

app.use("/", StaticURLRoute);
app.use("/create", UserRoute);

ConnectDB(process.env.MONGO_URL)
  .then(() => {
    console.log("Database Connected Successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failure:", error);
  });
