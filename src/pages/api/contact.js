import mongoose from "mongoose";
import ContactSubmissionSchema from "@/schemas/ContactSubmission.schema";

const connection = mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const handler = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    await ContactSubmissionSchema.create({
      name,
      email,
      message,
    });

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export default handler;
