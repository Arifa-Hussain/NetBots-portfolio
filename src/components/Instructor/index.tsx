'use client';
import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton,Avatar, Grid } from "@mui/material";
// import { ArrowForwardIos } from "@mui/icons-material";

const Instructor = () => {
  const [selectedItem, setSelectedItem] = useState<number>(1); // State to track the selected item (1 or 2)

  const filteredItems = [
    {
      id: 1,
      avatar: "/DetailImages/av.avif",
      name: "John Doe",
      description: "Expert in Web Development",
      experience: "With over 7 years of professional experience in web development, I specialize in creating responsive, user-centric websites and applications. Proficient in modern technologies like React.js, Node.js, and Next.js, I deliver scalable and efficient solutions tailored to client needs.",
    },
    {
      id: 2,
      avatar: "/DetailImages/av.avif",
      name: "Jane Smith",
      description: "Senior Data Scientist",
      experience: "With over 10 years of experience in Data Science, I specialize in building scalable machine learning models and analyzing complex datasets. Proficient in Python, TensorFlow, and AI techniques, I aim to deliver impactful insights.",
    },
  ];

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedItem((prevItem) => (prevItem === 1 ? 2 : 1)); // Toggle between 1 and 2
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleCircleClick = (item: number) => {
    setSelectedItem(item); // Set the selected item on circle button click
  };

  return (
    <>
      {/* Heading Section */}
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
                      Meet Our Instructors of MERN Stack Development Program
                    
                      </Typography>

      {/* Main Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          maxWidth: "1200px",
          margin: "0 auto",
          paddingX: { xs: 2, sm: 4 },
          marginBottom: { xs: "30px", sm: "50px" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            padding: { xs: 3, sm: 4 },
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Adds a smooth shadow
            backgroundColor: "#fff", // Ensures proper contrast
          }}
        >
          <Grid container spacing={4}>
            {/* Avatar Section */}
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                src={filteredItems[selectedItem - 1].avatar}
                alt={filteredItems[selectedItem - 1].name}
                sx={{
                  width: { xs: 100, sm: 200, md: 300 },
                  height: { xs: 100, sm: 200, md: 300 },
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </Grid>

            {/* Info Section */}
            <Grid item xs={12} sm={6}>
              <Box sx={{ textAlign: "left", paddingX: { xs: 2, sm: 4 } }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    color: "#2A327D",
                    marginBottom: 1,
                    fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem" },
                  }}
                >
                  {filteredItems[selectedItem - 1].name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "gray",
                    marginBottom: 2,
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  }}
                >
                  {filteredItems[selectedItem - 1].description}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginBottom: 5,
                    fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                  }}
                >
                  <hr />
                  <Typography
                    variant="body2"
                    sx={{
                      marginBottom: 2,
                      marginTop: 5, // Added marginTop
                      fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                    }}
                  >
                    {filteredItems[selectedItem - 1].experience}
                  </Typography>
                </Typography>
                <hr />
                <Box
                  sx={{
                    display: "flex",
                    gap: { xs: 1, sm: 2 },
                    marginTop: { xs: 3, sm: 5 },
                    flexDirection: { xs: "column", sm: "row" },
                  }}
                > 
                </Box>
              </Box>
            </Grid>
          </Grid>
          {/* Circle Navigation */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              marginTop: "20px",
            }}
          >
            {[1, 2].map((item) => (
              <IconButton
                key={item}
                onClick={() => handleCircleClick(item)}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: selectedItem === item ? "#2A327D" : "#fff",
                  border: `2px solid ${selectedItem === item ? "#F76680" : "#57007B"}`,
                  "&:hover": { backgroundColor: "#2A327D", color: "#fff" },
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Instructor;
