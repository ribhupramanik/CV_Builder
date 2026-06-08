import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cvRoutes from "./routes/cv.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/cv", cvRoutes);

app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Backend is running and healthy." });
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, "127.0.0.1", () => {
      console.log(`Server is running on http://127.0.0.1:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });
