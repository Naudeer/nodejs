import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import personRoutes from './routes/personRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', personRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
