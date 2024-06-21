import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
dotenv.config()
import { notFound,errorHandler } from './middleware/errorMiddleware.js'; 

connectDB();
const app = express();

// Body Parser
app.use(express.urlencoded({ extended: true }));
// This is required to handle urlencoded data
app.use(express.json()); 
// This to handle json data coming from requests mainly post



app.get("/",(req,res)=>{
    res.send("Api is running")
})

app.use('/api/products',productRoutes);
app.use('/api/users',userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT,()=>{console.log("Server is running")})