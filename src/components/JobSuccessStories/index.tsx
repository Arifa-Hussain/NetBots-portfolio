import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Avatar } from "@mui/material";
import DetailData from "../data/detail.json";

const JobSuccessStories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Filter the data to get the item with id: 2
    const filteredData = DetailData.DetailData.filter((item) => item.id === 2);
    setData(filteredData); // Set the filtered data into state
  }, []);

  return (
    <Box sx={{ width: "95%", maxWidth: "1200px", margin: "0 auto", padding: "1px" }}>
      <Box sx={{ width: "100%", marginBottom: 3, marginTop: "60px" }}>
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
                              Job Success Stories
                          
                            </Typography>
      </Box>

      {/* Grid Container */}
      <Grid
        container
        spacing={2} // Reduced spacing between cards
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {data.map((story, index) =>
          [0, 1, 2].map((_, repeatIndex) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={`${index}-${repeatIndex}`} // Unique key using index and repeatIndex
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              {/* Card */}
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 300, // Slightly smaller width for cards
                  padding: "15px",
                  border: "1px solid #ddd",
                  borderRadius: "12px", // Smooth rounded corners
                  backgroundColor: "#fff",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Subtle shadow
                  transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth hover effect
                  "&:hover": {
                    transform: "scale(1.05)", // Slightly enlarge on hover
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)", // Stronger shadow on hover
                  },
                }}
              >
                {/* Avatar Image */}
                <Avatar
                  src={story.image1}
                  alt={story.name}
                  sx={{
                    width: 90,
                    height: 90,
                    margin: "0 auto",
                    marginBottom: 1.5,
                    border: "2px solid #986666",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: 1,
                    color: "#333", // Darker text color
                    fontSize: "1rem",
                  }}
                >
                  {story.name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontStyle: "italic",
                    color: "gray",
                    marginBottom: 1.5,
                    fontSize: "0.9rem",
                  }}
                >
                  {story.designation}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "justify",
                    color: "#555", // Softer text color for readability
                    fontSize: "0.85rem",
                  }}
                >
                  {story.about}
                </Typography>
              </Box>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default JobSuccessStories;
