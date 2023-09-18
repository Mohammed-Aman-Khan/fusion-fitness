import useClamp from "@/hooks/useClamp";
import Image from "../Shared/Image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const TRAINERS = [
  {
    name: "John Doe",
    program: "Cardio",
    image_url: "cardio-1",
    description:
      "John is a passionate fitness trainer with expertise in cardio workouts. He's dedicated to help you improve your endurance and achieve your fitness goals.",
  },
  {
    name: "Lisa Smith",
    program: "Cardio",
    image_url: "cardio-2",
    description:
      "Lisa is a certified cardio instructor known for her energetic and motivating classes. Join her sessions to boost your heart health and overall fitness.",
  },
  {
    name: "Ella Martinez",
    program: "Cardio",
    image_url: "cardio-3",
    description:
      "Ella brings years of experience to her cardio classes, making them both effective and enjoyable. Get ready to sweat and see results.",
  },
  {
    name: "Samantha Lee",
    program: "Zumba",
    image_url: "zumba-1",
    description:
      "Samantha is a Zumba enthusiast who brings the party to every class. Join her for a fun-filled workout that combines dance and fitness.",
  },
  {
    name: "Rachel Patel",

    program: "Zumba",
    image_url: "zumba-2",
    description:
      "Rachel's Zumba sessions are known for their infectious energy and Latin rhythms. Experience the joy of dancing while getting fit.",
  },
  {
    name: "Emily White",
    program: "Zumba",
    image_url: "zumba-3",
    description:
      "Emily's Zumba classes are perfect for all levels. Join her to shake off stress, burn calories, and have a blast.",
  },
  {
    name: "David Rodriguez",
    program: "Yoga",
    image_url: "yoga-1",
    description:
      "David is a yoga guru who specializes in Vinyasa flow and mindfulness. His classes promote balance, flexibility, and inner peace.",
  },
  {
    name: "Daniel Kim",
    program: "Yoga",
    image_url: "yoga-2",
    description:
      "Daniel's yoga sessions focus on alignment and strength. Discover the benefits of yoga with his guidance.",
  },
  {
    name: "Olivia Turner",
    program: "Yoga",
    image_url: "yoga-3",
    description:
      "Olivia's gentle and restorative yoga classes are perfect for relaxation and stress relief. Join her to find inner serenity.",
  },
  {
    name: "Mark Johnson",
    program: "Weight lifting",
    image_url: "weight-lifting-1",
    description:
      "Mark is a dedicated weightlifting coach with a focus on strength and muscle development. Train with him to reach new heights.",
  },
  {
    name: "Michael Brown",
    program: "Weight lifting",
    image_url: "weight-lifting-2",
    description:
      "Michael combines expertise and motivation in his weightlifting classes. Build a powerful physique under his guidance.",
  },
  {
    name: "Ryan Adams",
    program: "Weight lifting",
    image_url: "weight-lifting-3",
    description:
      "Ryan's weightlifting workouts are tailored to your goals. Join him to sculpt your body and increase your strength.",
  },
];

const TrainerCard = ({ name, program, image_url, description }) => {
  const clamp = useClamp();

  return (
    <Box
      sx={{
        padding: clamp("15px", "15px", "20px"),
        backgroundColor: "white",
        borderRadius: clamp("10px", "15px", "20px"),
        height: "275px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        boxShadow: "0px 18px 40px -12px rgba(255, 255, 255, 0.3)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          type="image/jpeg"
          src={`/trainers/${image_url}.jpg`}
          alt={name}
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
          }}
        />
        <Box sx={{ marginLeft: "15px" }}>
          <Typography variant="h6">{name}</Typography>
          <Typography>{program}</Typography>
        </Box>
      </Box>
      <Typography>{description}</Typography>
    </Box>
  );
};

const Trainers = () => {
  const clamp = useClamp();

  return (
    <Box
      id="trainers"
      sx={{
        padding: clamp("25px", "50px", "75px"),
        background: "rgb(0,0,0)",
        background:
          "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(43,46,74,1) 50%, rgba(62,66,106,1) 100%)",
      }}
    >
      <center>
        <Typography color="white" variant="h4">
          Our Trainers
        </Typography>
        <br />
        <br />
      </center>
      <Grid container spacing={3}>
        {TRAINERS.map((trainer, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <TrainerCard
              name={trainer.name}
              program={trainer.program}
              image_url={trainer.image_url}
              description={trainer.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Trainers;
