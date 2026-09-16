import { Router } from "express";
import { getTask, getTaskById, createTask } from '../controllers/task.controller'

const router = Router();

router.get("/", getTask);

router.get("/:id", getTaskById);

router.post("/", createTask);

export default router;