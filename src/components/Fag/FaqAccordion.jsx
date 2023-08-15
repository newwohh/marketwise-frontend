import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FaqAccordion(props) {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Accordion
      expanded={expanded === props.el.panel}
      onChange={handleChange(props.el.panel)}
      sx={{
        height: "",
        marginBottom: "20px",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        sx={{
          padding: "10px",
        }}
      >
        <Typography variant="h5" sx={{ width: "33%", flexShrink: 0 }}>
          {props.el.primary}
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>
          {props.el.secondary}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{props.el.description}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default FaqAccordion;
