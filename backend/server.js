import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
dotenv.config()
import { notFound,errorHandler } from './middleware/errorMiddleware.js'; 

connectDB();

const app = express();

app.get("/",(req,res)=>{
    res.send("Api is running")
})

app.use('/api/products',productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT,()=>{console.log("Server is running")})