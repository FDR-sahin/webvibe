import mongoose from 'mongoose'

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: 100,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email address'],
    },
    projectType: {
      type: String,
      trim: true,
      default: 'Not specified',
    },
    budget: {
      type: String,
      trim: true,
      default: 'Not specified',
    },
    details: {
      type: String,
      required: [true, 'Project details are required'],
      trim: true,
      maxlength: 3000,
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'closed'],
      default: 'new',
    },
  },
  { timestamps: true }
)

export default mongoose.model('Lead', leadSchema)
