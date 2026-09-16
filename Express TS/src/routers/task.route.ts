import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  const { page, limit } = req.query;

  res.status(200).json({
    page,
    limit
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    taskId: id
  });
});

router.post("/", (req, res) => {
  const { title, completed } = req.body;

  res.status(201).json({
    title,
    completed
  });
});

export default router;