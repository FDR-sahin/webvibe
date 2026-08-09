
import dns from "dns"
dns.setServers(["1.1.1.1", "8.8.8.8"]);

import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import contactRoutes from './routes/contact.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173'

// Middleware
app.use(cors({ origin: CLIENT_URL }))
app.use(express.json())

// Routes
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'WebVibe API is running' })
})
app.use('/api/contact', contactRoutes)

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' })
})

// Start server after DB connects
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`WebVibe API listening on http://localhost:${PORT}`)
  })
})
