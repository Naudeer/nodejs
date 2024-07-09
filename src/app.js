import express from 'express';
import personRoutes from './routes/personRoutes';

const app = express();

app.use(express.json());

app.use('/api/people', personRoutes);

export default app;
