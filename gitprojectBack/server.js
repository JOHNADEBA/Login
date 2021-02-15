import express from 'express'
const app = express()
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

import allUrls from './routes/routes.js'

const PORT = process.env.PORT || 9000

dotenv.config()

mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true}, ()=> console.log(`DATABASE connected on http://localhost:${PORT}`))

app.use(express.json())
app.use(cors())
app.use('/', allUrls)
app.listen(PORT, ()=> console.log(`Listening on http://localhost:${PORT}`) )