import mongoose from "mongoose";

const EnrolmentSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  program_code: String,
  duration_in_months: Number,
  starting_date: Date,
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Enrolment ||
  mongoose.model("Enrolment", EnrolmentSchema);
