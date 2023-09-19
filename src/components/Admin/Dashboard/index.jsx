import useClamp from "@/hooks/useClamp";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Image from "@/components/Shared/Image";
import moment from "moment";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useEffect, useState } from "react";
import { toTitleCase } from "@/utils/helpers";

const sampleData = {
  users: [
    {
      _id: "650880af113a0f090339cbe8",
      name: "MAK",
      email: "mak@mak.in",
      created_at: "2023-09-18T16:54:07.154Z",
    },
    {
      _id: "65092a6ed9f1f2ed9735fda1",
      name: "Nida Ahmed",
      email: "1hk20cs177@hkbk.edu.in",
      created_at: "2023-09-19T04:58:22.963Z",
    },
  ],
  subscribers: [
    {
      email: "lol@lol.lol",
      subscribed: true,
      created_at: "2021-10-01T00:00:00.000Z",
    },
  ],
  contactSubmissions: [
    {
      name: "lol",
      email: "lol@lol.lol",
      message: "lol",
    },
  ],
  enrolments: [
    {
      _id: "65088ebd91b006c8f740b9e3",
      user_id: "650880af113a0f090339cbe8",
      program_code: "zumba",
      duration_in_months: 3,
      starting_date: "2023-09-18T17:49:42.423Z",
      created_at: "2023-09-18T17:54:05.091Z",
    },
    {
      _id: "65092a7bd9f1f2ed9735fda4",
      user_id: "65092a6ed9f1f2ed9735fda1",
      program_code: "yoga",
      duration_in_months: 3,
      starting_date: "2023-09-19T04:58:23.000Z",
      created_at: "2023-09-19T04:58:35.386Z",
    },
    {
      _id: "65092a99d9f1f2ed9735fda8",
      user_id: "65092a6ed9f1f2ed9735fda1",
      program_code: "cardio",
      duration_in_months: 3,
      starting_date: "2023-09-22T04:58:37.000Z",
      created_at: "2023-09-19T04:59:05.279Z",
    },
  ],
};

const Dashboard = ({ data }) => {
  const clamp = useClamp();
  const [selectedDate, setSelectedDate] = useState(moment());
  const [filterBy, setFilterBy] = useState("day");
  const [filteredData, setFilteredData] = useState(null);

  function analyzeData(filterBy, date, data) {
    // Initialize variables to store counts and program data.
    let newCount = 0;
    let endCount = 0;
    let ongoingCount = 0; // Count of users currently in a program.
    let newsletterCount = 0;
    let contactCount = 0;
    const programCounts = {};

    // Determine the start and end of the specified filter period.
    const filterStartDate = moment(date).startOf(filterBy);
    const filterEndDate = moment(date).endOf(filterBy);

    // Loop through the data and filter based on the specified criteria.
    data.enrolments.forEach((enrolment) => {
      const enrolmentStartDate = moment(enrolment.starting_date);
      const enrolmentEndDate = enrolmentStartDate
        .clone()
        .add(enrolment.duration_in_months, "months");

      if (
        (filterBy === "day" && enrolmentStartDate.isSame(date, "day")) ||
        (filterBy === "month" && enrolmentStartDate.isSame(date, "month"))
      ) {
        newCount++;
        const program = enrolment.program_code;
        programCounts[program] = (programCounts[program] || 0) + 1;
      }
    });

    data.subscribers.forEach((subscriber) => {
      const subscriberDate = moment(subscriber.created_at);
      if (
        (filterBy === "day" && subscriberDate.isSame(date, "day")) ||
        (filterBy === "month" && subscriberDate.isSame(date, "month"))
      ) {
        newsletterCount++;
      }
    });

    data.contactSubmissions.forEach((submission) => {
      const submissionDate = moment(submission.created_at);
      if (
        (filterBy === "day" && submissionDate.isSame(date, "day")) ||
        (filterBy === "month" && submissionDate.isSame(date, "month"))
      ) {
        contactCount++;
      }
    });

    // Find the program with the most users.
    let trendingProgram = null;
    let maxProgramCount = 0;
    for (const program in programCounts) {
      if (programCounts[program] > maxProgramCount) {
        maxProgramCount = programCounts[program];
        trendingProgram = program;
      }
    }

    // Create an array of program counts.
    const allPrograms = [];
    for (const program in programCounts) {
      allPrograms.push({ name: program, count: programCounts[program] });
    }

    return {
      new: newCount,
      end: endCount,
      trending: trendingProgram,
      newsletter: newsletterCount,
      contact: contactCount,
      all: allPrograms,
    };
  }

  useEffect(() => {
    if (data) {
      setFilteredData(analyzeData(filterBy, selectedDate, data));
    }
  }, [selectedDate, filterBy, data]);

  return (
    <Box sx={{ padding: clamp("25px", "25px 50px", "25px 75px") }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          src="/logo.png"
          alt="Fusion Fitness Logo"
          type="image/png"
          style={{
            height: clamp("25px", "50px", "75px"),
            width: "auto",
            borderRadius: "10px",
          }}
          containerStyle={{
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        />
        <Typography ml={2} variant={clamp("h6", "h5", "h4")}>
          Admin Dashboard
        </Typography>
      </Box>
      <br />
      <br />
      <br />
      <Box
        sx={{
          borderRadius: clamp("10px", "15px", "20px"),
          boxShadow: "0px 18px 40px -12px rgba(0, 0, 0, 0.2)",
          padding: clamp("15px", "20px", "25px"),
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={4}>
            <FormControl fullWidth>
              <InputLabel id="filterBy">Filter By</InputLabel>
              <Select
                labelId="filterBy"
                value={filterBy}
                label="Filter By"
                onChange={(event) => setFilterBy(event.target.value)}
              >
                <MenuItem value={"day"}>Day</MenuItem>
                <MenuItem value={"month"}>Month</MenuItem>
              </Select>
            </FormControl>
            <br />
            <br />
            <DateCalendar value={selectedDate} onChange={setSelectedDate} />
          </Grid>
          <Grid item xs={12} sm={7} md={8}>
            <Grid ml={2} container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">
                  User Programs ending this {toTitleCase(filterBy)}
                </Typography>
                <br />
                <Typography variant="h3">{filteredData?.new || 0}</Typography>
                <br />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">
                  User Programs ending this {toTitleCase(filterBy)}
                </Typography>
                <br />
                <Typography variant="h3">{filteredData?.end || 0}</Typography>
                <br />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Trending Program</Typography>
                <br />
                <Typography variant="h3">
                  {toTitleCase(filteredData?.trending || "N/A")}
                </Typography>
                <br />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">User - Program Metrics</Typography>
                <br />
                <Typography variant="h3">
                  {filteredData?.all?.length ? (
                    <>
                      {filteredData.all.map(({ name, count }) => (
                        <Typography>
                          {toTitleCase(name)}: {count} Joinee{count > 1 && "s"}
                        </Typography>
                      ))}
                    </>
                  ) : (
                    "N/A"
                  )}
                </Typography>
                <br />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Newsletter Subscriptions</Typography>
                <br />
                <Typography variant="h3">
                  {filteredData?.newsletter || 0}
                </Typography>
                <br />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Contact Form Submissions</Typography>
                <br />
                <Typography variant="h3">
                  {filteredData?.contact || 0}
                </Typography>
                <br />
              </Grid>
              {/* <Grid item xs={12}>
                <Typography variant="h6">Ongoing User Programs</Typography>
                <br />
                <Typography variant="h3">
                  {filteredData?.contact || 0}
                </Typography>
                <br />
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <br />
      <br />
      <br />
    </Box>
  );
};

export default Dashboard;
