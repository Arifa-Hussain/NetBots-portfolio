import React, { useState } from "react";
import { Typography, Box, Button, Card, CardMedia, CardContent, Grid } from "@mui/material";
import portifolioData from "../data/portifolio.json";

const Portifolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("Web Applications");

  // Map categories to IDs as per JSON
  const categories = {
    "Web Applications": [2, 3],
    "Mobile Applications": [4, 5],
    "CMS": [6],
    "Graphic Works": [7, 8],
    "Marketing Services": [9],
  };

  // Handle category button click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter projects based on selected category
  const filteredProjects = portifolioData.PortifolioData.filter(
    (project) => categories[selectedCategory]?.includes(project.id) && project.image
  );
  return (
    <Box sx={{ padding: 2 }}>
      {/* Header Section */}
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
         <Typography
                                                     variant="h3"
                                                     sx={{
                                                       marginBottom:"30px",
                                                       fontWeight: 'bold',
                                                       fontSize: { xs: '1.8rem', md: '2.5rem' },
                                                       lineHeight: 1.2,
                                                      
                                                     }}
                                                   >
                                                     <span style={{ fontWeight: 'normal' }}> Projects That Showcase  </span>{' '}
                                                     <span
                                                       style={{
                                                         background:
                                                           'linear-gradient(180deg,rgb(19, 59, 119) 20%, rgba(14, 36, 237, 0) 100%)',
                                                         WebkitBackgroundClip: 'text',
                                                         WebkitTextFillColor: 'transparent',
                                                         fontWeight: 'bold',
                                                         
                                                       }}
                                                     >
                                                      Our Expertise
                                                     </span>{' '}
                                                     
                                                   </Typography>
        {/* Category Buttons */}
        <Grid container spacing={2} justifyContent="center">
          {Object.keys(categories).map((category) => (
            <Grid item key={category}>
              <Button
                variant="text"
                sx={{
                  fontSize: { xs: "0.8rem", sm: "1rem" },
                  textTransform: "none",
                  padding: { xs: "6px 12px", sm: "8px 16px" },
                  color: selectedCategory === category ? "#57007B" : "black",
                  borderBottom: selectedCategory === category ? "2px solid #F76680" : "none",
                }}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Projects Grid */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: 2,
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <Card sx={{ boxShadow: 3, padding: 2 }}>
                  <CardMedia
                    component="img"
                    sx={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                      marginBottom: 2,
                      borderRadius: 1,
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                    image={project.image}
                    alt={project.heading}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ marginBottom: 1 }}>
                      {project.heading}
                    </Typography>
                    <Typography variant="body2" sx={{ marginBottom: 2 }}>
                      {project.description}
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#2A327D",
                        "&:hover": { backgroundColor: "#1e255a" },
                      }}
                    >
                      Explore Project
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="h6" sx={{ color: "gray", marginTop: 4 }}>
              No projects available for this category.
            </Typography>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Portifolio;
