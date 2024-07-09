import 'dotenv/config';
import express from 'express';
import personRoutes from './routes/personRoutes';

const app = express();

app.use(express.json());

app.use('/api/people', personRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
