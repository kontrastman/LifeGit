import express, { Application } from 'express';
import indexRouter from './routes/index';
import connectDB from './database';

const app: Application = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', indexRouter);

export default app;
