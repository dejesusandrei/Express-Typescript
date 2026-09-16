import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

import posts from '../routes/posts.js'
import logger from '../middleware/logger.js'
import errorHandler from '../middleware/error.js'
import notFound from '../middleware/notFound.js'

const app = express();
const PORT = process.env.PORT;

// Get  directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// static folder
app.use(express.static(path.join(__dirname, 'public')));

// Logger  middleware
app.use(logger);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route
app.use('/api/posts', posts);

// Error Handler 
app.use(notFound);
app.use(errorHandler);


app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));