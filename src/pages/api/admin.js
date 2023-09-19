import mongoose from "mongoose";
import UserSchema from "@/schemas/User.schema";
import NewsletterSubscriberSchema from "@/schemas/NewsletterSubscriber.schema";
import ContactSubmissionSchema from "@/schemas/ContactSubmission.schema";
import EnrolmentSchema from "@/schemas/Enrolment.schema";

const connection = mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const handler = async (req, res) => {
  try {
    const allUsers = await UserSchema.find({}, { __v: 0, password: 0 }).lean();
    const allSubscribers = await NewsletterSubscriberSchema.find(
      {},
      { __v: 0 }
    ).lean();
    const allContactSubmissions = await ContactSubmissionSchema.find(
      {},
      { __v: 0 }
    ).lean();
    const allEnrolments = await EnrolmentSchema.find({}, { __v: 0 }).lean();

    res.status(200).json({
      success: true,
      users: allUsers,
      subscribers: allSubscribers,
      contactSubmissions: allContactSubmissions,
      enrolments: allEnrolments,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export default handler;
