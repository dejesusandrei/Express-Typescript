import { Router } from "express";
import { createUser, getUsers, getUserById } from '../controllers/user.controller'

// Middleware
import { validate } from "../middleware/validate.js";

// Schema
import { CreateUserSchema } from "../schema/user.schema.js";

const router = Router();

// GET
router.get('/', getUsers);
router.get('/:id', getUserById);

// POST
router.post('/', validate(CreateUserSchema), createUser);

export default router;