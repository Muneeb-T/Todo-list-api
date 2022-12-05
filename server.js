import express from 'express';
import { config } from 'dotenv';
import todoRoutes from './routes/todo.js';
import { connectDatabase } from './config/database.js';
config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use('/api', todoRoutes);
app.listen(PORT, () => {
    connectDatabase();
    console.log('Server connected successfully');
    console.log('=============================');
    console.log('PORT : ', PORT);
});
