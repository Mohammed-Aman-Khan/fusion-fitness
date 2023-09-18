import useClamp from "@/hooks/useClamp";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FAQs from "./faqs";

const FAQS = () => {
  const clamp = useClamp();

  return (
    <Box
      sx={{
        padding: clamp("25px", "50px", "75px"),
        backgroundColor: (theme) => theme.palette.primary.light,
        color: "white",
      }}
    >
      <center>
        <Typography variant="h4">Frequently Asked Questions</Typography>
        <br />
        <br />
        <Box sx={{ maxWidth: "750px" }}>
          {FAQs.map(({ question, answer }, index) => (
            <Accordion
              key={index}
              disableGutters
              sx={{
                backgroundColor: (theme) => theme.palette.primary.light,
                color: "white",
                borderBottom: "1px solid white",
              }}
              TransitionProps={{ unmountOnExit: true }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              >
                <Typography variant="h6">{question}</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  backgroundColor: (theme) => theme.palette.primary.light,
                }}
              >
                <Typography>{answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </center>
    </Box>
  );
};

export default FAQS;
