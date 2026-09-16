import express from 'express'
import { getPosts, getPostById, createPost, updatePost, deletePost } from '../controllers/postController.js'

const router = express.Router();

let posts = [
  { id: 1, title: 'Post One' },
  { id: 2, title: 'Post Two' },
  { id: 3, title: 'Post Three' },
];


// http://localhost:8000/api/posts?limit=2
router.get('/', getPosts);

router.get('/:id', getPostById);

// Create new post
router.post('/', createPost);

// Update Post
router.put('/:id', updatePost);

// Delete Post
router.delete('/:id', deletePost);


export default router;