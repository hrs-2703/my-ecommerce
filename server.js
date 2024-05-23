import express from "express";
import dotenv from 'dotenv'
import morgan from "morgan";
import Connectdb from "./config/db.js";
import authroutes from "./routes/authroutes.js";
import categoryroutes from "./routes/categoryroutes.js";
import productroutes from "./routes/Productroutes.js";
import cors from "cors";
dotenv.config();

Connectdb();
const app=express()


app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

app.use("/api/v1/auth", authroutes);
app.use("/api/v1/category", categoryroutes);
app.use("/api/v1/product", productroutes);
app.get("/",(req,res)=>{
    res.send("welcome");
})

const PORT = process.env.PORT||8080;
app.listen(PORT,()=>{
    console.log(`server runnimg on ${(PORT)} and mode is ${process.env.DEV_MODE}`);
});