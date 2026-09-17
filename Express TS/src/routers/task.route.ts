import { Router } from "express";
import { getTask, getTaskById, createTask } from '../controllers/task.controller'

// Middleware
import { validate } from "../middleware/validate.js";

// Schema
import { CreateTaskSchema } from "../schema/task.schema";

const router = Router();

router.get("/", getTask);

router.get("/:id", getTaskById);

router.post("/", validate(CreateTaskSchema), createTask);

export default router;