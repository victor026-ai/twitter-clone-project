import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes.js';
import connectMongoDB from './db/connectMongoDB.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json()); // parse req.body
app.use(express.urlencoded({ extended: true })); // parse form data(urlencoded)

app.use(cookieParser());

// routes
app.use("/api/auth", authRoutes);


app.listen(PORT, () => {
    console.log('Server started on port ' + PORT);
    connectMongoDB();
});