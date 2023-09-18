import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
