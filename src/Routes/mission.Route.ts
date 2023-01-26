import { getMission } from "../controllers/mission.controller.js";
import { Router } from "express";
const router = Router()

router.get("/mission", getMission)

export default router