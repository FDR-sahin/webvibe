import express from 'express'
import { createLead, getLeads } from '../controllers/contactController.js'

const router = express.Router()

// POST /api/contact  -> submit the contact form (used by the frontend)
router.post('/', createLead)

// GET /api/contact    -> list all submitted leads (for your own admin use)
router.get('/', getLeads)

export default router
