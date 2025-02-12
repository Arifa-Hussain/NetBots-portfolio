
import MuiAccordion from '@mui/material/Accordion'; // Renamed to avoid conflict
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography, Box } from '@mui/material';
import FaqData from '../data/FAQ.json';

const Faq = () => {
  return (
    <>
    <Typography
                      variant="h5"
                      sx={{
                        color: "#2A327D",
                        fontWeight: "bold",
                        fontFamily: "Poppins, sans-serif",
                        mb: 2, // Added margin-bottom for spacing
                           marginTop:"5px"
                      }}
                    >
                     Frequently Asked Questions
                  
                    </Typography>
    <Box
      sx={{
        maxWidth: '1150px',
        margin: '2rem auto',
        padding: '1rem',
        borderRadius: '12px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
        marginLeft:"67px"
      }}
    >
      {FaqData.FaqData.map((item) => (
        <MuiAccordion
          key={item.id}
          disableGutters
          sx={{
            marginBottom: '1rem',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            '&:before': {
              display: 'none', // Removes the default divider line
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${item.id}-content`}
            id={`panel${item.id}-header`}
            sx={{
              padding: '0.5rem 1rem',
              '& .MuiAccordionSummary-content': {
                margin: '0.5rem 0',
              },
            }}
          >
            <Typography sx={{ fontWeight: 400, color: '#333' }}>
              {item.heading}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              padding: '1rem',
              borderTop: '1px solid #e0e0e0',
            }}
          >
            <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.6 }}>
              {item.description}
            </Typography>
          </AccordionDetails>
        </MuiAccordion>
      ))}
    </Box>
    </>
  );
};

export default Faq;
