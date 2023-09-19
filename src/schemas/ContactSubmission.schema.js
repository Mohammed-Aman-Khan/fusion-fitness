import mongoose from "mongoose";

const ContactSubmissionSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.ContactSubmission ||
  mongoose.model("ContactSubmission", ContactSubmissionSchema);
