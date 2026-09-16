import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
  const { search } = req.query;

  res.status(200).json({ search });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.status(200).json({ userId: id });
});

router.post('/', (req, res) => {
  const { name, email } = req.body;

  res.status(201).json({ name, email });
});

export default router;