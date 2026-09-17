import { Router } from "express";
import { getTask, getTaskById, createTask } from '../controllers/task.controller'

// Middleware
import { validate } from "../middleware/validate.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

// Schema
import { CreateTaskSchema } from "../schema/task.schema";

const router = Router();

router.get("/", asyncHandler(getTask));

router.get("/:id", asyncHandler(getTaskById));

router.post("/", validate(CreateTaskSchema), asyncHandler(createTask));

export default router;