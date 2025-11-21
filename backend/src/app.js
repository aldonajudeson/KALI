import express from "express"
import cors from "cors"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/authRoutes.js"

const app=express()

app.use(
    cors({
        origin:process.env.CLIENT_URL,
        credentials:true
    })
)