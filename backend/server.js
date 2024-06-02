import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import { mongoConnect } from './db/connectToMongoDB.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json()) // to parse the incoming requests with JSON payloads (from req.body)

app.use('/api/auth', authRoutes);


app.listen(PORT, ()=>{
    //connect to MongoDB
    mongoConnect();
    console.log(`Server running on port ${PORT}`);
});
