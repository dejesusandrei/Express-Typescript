import { Router } from "express";
import { createUser, getUsers, getUserById } from '../controllers/user.controller'

// Middleware
import { validate } from "../middleware/validate.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

// Schema
import { CreateUserSchema } from "../schema/user.schema.js";

const router = Router();

// GET
router.get('/', asyncHandler(getUsers));
router.get('/:id', asyncHandler(getUserById));

// POST
router.post('/', validate(CreateUserSchema), asyncHandler(createUser));

export default router;