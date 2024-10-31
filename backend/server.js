import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"

// env variable connection
dotenv.config()
//console.log("Database URL", process.env.DB_USERNAME);
// console.log("Database Password", process.env.DB_PASSWORD);


// app configuration
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

// API endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))

app.get("/", (req,res) => {
    res.send("Palcheen and Dhairya are girl and boy!")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})