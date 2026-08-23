import express from "express"
const app = express()
import 'dotenv/config'
import connectDB from './db/db.js'

const PORT = process.env.PORT || 3000


connectDB()

app.listen('PORT',()=>{
    console.log("server is listening Port:",PORT)
})