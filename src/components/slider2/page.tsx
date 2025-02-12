'use client';
import { useRef, useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const Slider2 = () => {
  const [selectedArrow, setSelectedArrow] = useState<"left" | "right" | null>(null);

  const filteredItems = [
    { id: 2, image1: "/homeImages/c1.png" },
    { id: 3, image1: "/homeImages/c2.png" },
    { id: 4, image1: "/homeImages/c3.png" },
    { id: 5, image1: "/homeImages/c4.png" },
    { id: 6, image1: "/homeImages/c5.png" },
    { id: 7, image1: "/homeImages/c6.png" },
    { id: 8, image1: "/homeImages/c7.png" },
  ];

  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.scrollWidth / 3; // scroll by 1/3 of the content width
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth", // smooth scroll behavior
      });
    }
    setSelectedArrow(direction);
  };

  return (
    <>
      {/* Heading Section */}
      <Box sx={{ width: "100%", marginBottom: 3,marginTop:"60px"}}>
      <Typography
    variant="h5"
    sx={{
      color: "#2A327D",
      fontWeight: "bold",
      fontFamily: "Poppins, sans-serif",
      mb: 2, // Added margin-bottom for spacing
    }}
  >
 Meet the people working with us

  </Typography>

      </Box>

      {/* Slider Section */}
      <Box sx={{ background: "#F7F7FA", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", position: "relative", marginBottom: "50px" }}>
        <Box sx={{ position: "relative", width: "100%", display: "flex", alignItems: "center" }}>
          {/* Left Arrow Button */}
          <IconButton
            onClick={() => handleScroll("left")}
            sx={{
              position: "absolute",
              left: 10,
              zIndex: 10,
              background: selectedArrow === "left" ? "#F76680" : "white",
              color: selectedArrow === "left" ? "#fff" : "#57007B",
              "&:hover": { background: "#F76680", color: "#fff" },
              boxShadow: 2,
            }}
          >
            <ArrowBackIos sx={{ fontSize: "20px" }} />
          </IconButton>

          {/* Slider Container */}
          <Box
            ref={sliderRef}
            sx={{
              display: "flex",
              overflowX: "hidden", // This hides the horizontal scrollbar
              scrollBehavior: "smooth",
              gap: 3,
              width: "100%",
              padding: "10px 0",
            }}
          >
            {filteredItems.map((item) => (
              <Box key={item.id} sx={{ flex: "0 0 200px", height: "130px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <Box component="img" src={item.image1} alt={`Image ${item.id}`} sx={{ width: "80%", height: "auto", objectFit: "contain" }} />
              </Box>
            ))}
          </Box>

          {/* Right Arrow Button */}
          <IconButton
            onClick={() => handleScroll("right")}
            sx={{
              position: "absolute",
              right: 10,
              zIndex: 10,
              background: selectedArrow === "right" ? "#F76680" : "white",
              color: selectedArrow === "right" ? "#fff" : "#57007B",
              "&:hover": { background: "#F76680", color: "#fff" },
              boxShadow: 2,
            }}
          >
            <ArrowForwardIos sx={{ fontSize: "20px" }} />
          </IconButton>
        </Box>
      </Box>
      
    </>
  );
};

export default Slider2;
