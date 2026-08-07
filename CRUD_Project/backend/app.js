import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import StaticURLRoute from "./routes/static.js";
import ConnectDB from "./connection.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

ConnectDB(process.env.MONGO_URL)
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((error) => {
    console.error("Database connection failure:", error);
  });

app.use("/api", StaticURLRoute);

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });
}

export default app;