import React from 'react';
import servicesDetailData from '../data/ServicesDetail.json';
import {
  Box,
  Typography,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'; // Correct icon for bullets
import Slider2 from '../slider2/page';

const ServicesDetail: React.FC = () => {
  const { ServicesDetail } = servicesDetailData;

  // Find the data for id 3
  const cmsService = ServicesDetail.find((service) => service.id === 3);

  return (
    <Container maxWidth="lg" sx={{ padding: '2rem' }}>
      {/* Heading Section */}
      <Typography
                          variant="h3"
                          sx={{
                            marginBottom:"30px",
                            fontWeight: 'bold',
                            fontSize: { xs: '1.8rem', md: '2.5rem' },
                            lineHeight: 1.2,
                           
                          }}
                        >
                          <span style={{ fontWeight: 'normal' }}> Best Web Design and</span>{' '}
                          <span
                            style={{
                              background:
                                'linear-gradient(180deg,rgb(19, 59, 119) 20%, rgba(14, 36, 237, 0) 100%)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              fontWeight: 'bold',
                              
                            }}
                          >
                            Development Services
                          </span>{' '}
                          
                        </Typography>
     

      {/* General Sections */}
      <Grid container spacing={4}>
        {ServicesDetail.filter((service) => service.id !== 3 && service.id < 5).map((service) => (
          <Grid item xs={12} key={service.id}>
            <Box
              sx={{
                padding: '1.5rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                backgroundColor: '#f9f9f9',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
              }}
            >
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
                 {service.heading}
              
                </Typography>
              <Typography
                variant="body1"
                align="justify"
                sx={{
                  color: '#555',
                  lineHeight: 1.8,
                  marginTop: '1rem',
                }}
              >
                {service.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* New Section (ID: 3) */}
      {cmsService && (
        <Box
          sx={{
            marginTop: '4rem',
            padding: '2rem',
            backgroundColor: '#f4f4f9',
            borderRadius: '8px',
          }}
        >
          <Grid container spacing={4} alignItems="center">
            {/* Left Side (Heading and Description) */}
            <Grid item xs={12} md={6}>
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
                 {cmsService.heading}
              
                </Typography>
              <Typography
                variant="body1"
                align="justify"
                sx={{
                  color: '#555',
                  lineHeight: 1.8,
                }}
              >
                {cmsService.description}
              </Typography>
            </Grid>

            {/* Right Side (Image) */}
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={cmsService.image}
                alt={cmsService.heading}
                sx={{
                  width: '70%',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                }}
              />
            </Grid>
          </Grid>
        </Box>
      )}

      {/* Intermediate Section (e.g., ID 4) */}
      {ServicesDetail.filter((service) => service.id === 4).map((service) => (
        <Box sx={{ marginTop: '4rem', padding: '2rem', borderRadius: '8px' }} key={service.id}>
          <Grid container spacing={4} alignItems="center">
            {/* Left Side (Image) */}
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={service.image}
                alt={service.heading}
                sx={{
                  width: '80%',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                }}
              />
            </Grid>

            {/* Right Side (Heading, Description, and Points) */}
            <Grid item xs={12} md={6}>
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
                 {service.heading}
              
                </Typography>
              <Typography
                variant="body1"
                align="justify"
                sx={{
                  color: '#555',
                  lineHeight: 1.8,
                }}
              >
                {service.description}
              </Typography>

              {/* Additional Points */}
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: '#2A327D',
                  fontWeight: 'bold',
                  marginTop: '2rem',
                }}
              >
                {service.heading2}
              </Typography>
              <List sx={{ marginTop: '1rem' }}>
                {[service.point1, service.point2, service.point3, service.point4, service.point5]
                  .filter(Boolean) // Filter out undefined or null points
                  .map((point, index) => (
                    <ListItem key={index} sx={{ paddingLeft: 0, display: 'flex', alignItems: 'center' }}>
                      <ListItemIcon sx={{ minWidth: '0', marginRight: '10px' }}>
                        <FiberManualRecordIcon sx={{ color: 'black', fontSize: '10px' }} />
                      </ListItemIcon>
                      <Typography variant="body1" sx={{ color: '#555', fontSize: '16px' }}>
                        {point}
                      </Typography>
                    </ListItem>
                  ))}
              </List>
            </Grid>
          </Grid>
        </Box>
      ))}

      {/* New Horizontal Card Section for IDs 5 to 9 */}
      <Box sx={{ marginTop: '4rem' }}>
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
                 Explore our other services
              
                </Typography>
        <Grid container spacing={4}>
          {ServicesDetail.filter((service) => service.id >= 5 && service.id <= 9).map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                  borderRadius: '8px',
                  backgroundColor: '#f9f9f9',
                }}
              >
                {/* Card Image */}
                <CardMedia
                  component="img"
                  image={service.image}
                  alt={service.heading}
                  sx={{
                    objectFit: 'contain', // Ensures the image maintains aspect ratio
                    width: '80%', // Reduce the image width
                    height: '100px', // Automatically adjust height to maintain aspect ratio
                    margin: '10px auto', // Add space around the image and center it
                    borderRadius: '8px', // Optional: Slight rounding for the image edges
                  }}
                />
                {/* Card Content */}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      color: '#2A327D',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginBottom: '1rem',
                    }}
                  >
                    {service.heading}
                  </Typography>
                  <Typography
                    variant="body2"
                    align="justify"
                    sx={{
                      color: '#555',
                      lineHeight: 1.8,
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Slider2 />
      </Box>
    </Container>
  );
};

export default ServicesDetail;
