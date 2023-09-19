import mongoose from "mongoose";
import NewsletterSubscriberSchema from "@/schemas/NewsletterSubscriber.schema";

const connection = mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const handler = async (req, res) => {
  try {
    const { email } = req.body;

    await NewsletterSubscriberSchema.create({
      email,
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
