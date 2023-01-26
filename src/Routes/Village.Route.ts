import { getVillage } from "../controllers/village.controller.js";
import { Router } from "express";
const router = Router()

router.get("/village", getVillage)

export default router