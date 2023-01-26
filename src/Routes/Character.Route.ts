import { create, findAll, findById, update, deleteById  } from "../controllers/naruto.controller.js";
import { Router } from "express";
const router = Router()

router.post("/character", create)
router.get("/character", findAll)
router.get("/character/:id", findById)
router.patch("/character/:id", update)
router.delete("/character/:id", deleteById)

export default router