import mongoose from "mongoose";
import EnrolmentSchema from "@/schemas/Enrolment.schema";

const connection = mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const handler = async (req, res) => {
  try {
    const { program_code, duration, user_id, starting_date } = req.body;

    if (!program_code || !duration || !user_id || !starting_date) {
      return res.status(400).json({
        message:
          "Program code, duration, starting date and user id are required",
      });
    }

    const enrolments = await EnrolmentSchema.find(
      {
        program_code,
        user_id,
      },
      undefined,
      {
        sort: {
          starting_date: -1,
        },
      }
    ).lean();

    let currently_enrolled_in_the_requested_program = false;

    for (let enrolment of enrolments) {
      const starting_date = new Date(enrolment.starting_date);
      const current_date = new Date();

      const duration_in_months = enrolment.duration_in_months;

      const starting_date_plus_duration = new Date(
        starting_date.setMonth(starting_date.getMonth() + duration_in_months)
      );

      if (current_date < starting_date_plus_duration) {
        currently_enrolled_in_the_requested_program = true;
        break;
      }
    }

    if (currently_enrolled_in_the_requested_program) {
      return res
        .status(401)
        .json({ message: "Already enrolled in this program" });
    }

    const newEnrolment = await EnrolmentSchema.create({
      program_code,
      duration_in_months: duration,
      starting_date,
      user_id,
    });

    return res.status(200).json({ success: true, enrolment: newEnrolment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export default handler;
