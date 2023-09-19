import mongoose from "mongoose";

const NewsletterSubscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  subscribed: {
    type: Boolean,
    required: true,
    default: true,
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export default mongoose.models.NewsletterSubscriber ||
  mongoose.model("NewsletterSubscriber", NewsletterSubscriberSchema);
