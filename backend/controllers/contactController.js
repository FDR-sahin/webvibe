import Lead from '../models/Lead.js'

export async function createLead(req, res) {
  try {
    const { name, email, projectType, budget, details } = req.body

    if (!name || !email || !details) {
      return res.status(400).json({
        message: 'Name, email, and project details are required.',
      })
    }

    const lead = await Lead.create({ name, email, projectType, budget, details })

    return res.status(201).json({
      message: 'Thanks! We received your project details and will reply within one business day.',
      leadId: lead._id,
    })
  } catch (err) {
    if (err.name === 'ValidationError') {
      const firstError = Object.values(err.errors)[0]?.message || 'Invalid form data.'
      return res.status(400).json({ message: firstError })
    }

    console.error('Error creating lead:', err.message)
    return res.status(500).json({ message: 'Something went wrong on our end. Please try again shortly.' })
  }
}

export async function getLeads(req, res) {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 })
    return res.status(200).json(leads)
  } catch (err) {
    console.error('Error fetching leads:', err.message)
    return res.status(500).json({ message: 'Could not fetch leads.' })
  }
}
