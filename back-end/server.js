import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';

// app config 
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// API endpoints
app.use("/api/food",foodRouter);

// test route
app.get("/", (req, res) => {
    res.send("API Working");
});

// start server
app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});
