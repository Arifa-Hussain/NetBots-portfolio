// import React from "react";
import servicesData from "../data/services.json"; // Ensure correct path
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";

const StyledCard = styled(Card)({
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.3s, box-shadow 0.3s",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 6px 25px rgba(0, 0, 0, 0.3)",
  },
  textDecoration: "none",
});

const StyledMedia = styled(CardMedia)({
  height: 200,
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

const Services = () => {
  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    navigate(`/services/${id}`);
  };

  const { ServicesData } = servicesData;

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography
        variant="h3"
        sx={{
          marginBottom: "30px",
          fontWeight: 'bold',
          fontSize: { xs: '1.8rem', md: '2.5rem' },
          lineHeight: 1.2,

        }}
      >
        <span style={{ fontWeight: 'normal' }}>Our</span>{' '}
        <span
          style={{
            background:
              'linear-gradient(180deg,rgb(19, 59, 119) 20%, rgba(14, 36, 237, 0) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',

          }}
        >
          Services
        </span>{' '}

      </Typography>
      <Grid container spacing={3}>
        {ServicesData.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <StyledCard onClick={() => handleCardClick(service.id)}>
              <StyledMedia
                
                image={service.image}  // Use 'src' instead of 'image'
                // alt={service.heading}
              />
              <CardContent>
                <Typography variant="h6" component="h2" gutterBottom>
                  {service.heading}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: "1rem" }}>
                  {service.description}
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "#2A327D",
                    "&:hover": {
                      backgroundColor: "#1F275E",
                    },
                  }}
                >
                  {service.button}
                </Button>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
