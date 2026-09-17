import "dotenv/config";
import express from "express";

// Global Middleware
import checkAdmin from './middleware/adminCheck'
import requestLogger from './middleware/requestLogger'


// Routers
import userRouter from "./routers/user.route";
import taskRoute from "./routers/task.route";


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(requestLogger);

// Route
app.use("/api/users", userRouter);
app.use("/api/tasks", taskRoute);

app.get('/', (req, res) => {
  res.status(200).json({ msg: "Hello Express!" });
});

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: "ok" });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});