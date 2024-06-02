import express, { Application } from 'express';
import indexRouter from './routes/index';

const app: Application = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', indexRouter);

export default app;
