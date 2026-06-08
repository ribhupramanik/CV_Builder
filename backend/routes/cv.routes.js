import express from "express";
import { getCV, upsertCV } from "../controllers/cv.controller.js";

const router = express.Router();

router.get("/:userId", getCV);
router.put("/", upsertCV);

export default router;
