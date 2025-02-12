"use client";
import { useRef, useState } from "react";
// import Link from "next/link"; // ✅ Fix: Uncommented Link import
// import { MobileFriendly as MobileFriendlyIcon } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const Slider1 = () => {
  const filteredItems = [
    {
      id: 1,
      heading: "Mobile App Development",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      id: 2,
      heading: "Web Design Development",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      id: 3,
      heading: "Software Testing and Service",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      id: 4,
      heading: "Mobile App Development",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
  ];

  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    if (sliderRef.current) {
      const targetSlide = sliderRef.current.children[index] as HTMLElement;
      targetSlide.scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
    }
  };

  return (
    <Box
      sx={{
        padding: 2,
        backgroundColor: "#f9f9f9",
        height: "100vh",
        overflow: "hidden", // ✅ Fix: Only one overflow rule
        marginBottom: "60px",
      }}
    >
      <Box
        sx={{
          maxWidth: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        {/* Heading */}
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            fontSize: "35px",
            lineHeight: "55px",
            color: "#1A202C",
            padding: "20px",
          }}
        >
          Services we offer
        </Typography>

        {/* Slider */}
             {/* Dots Navigation */}
             <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
          {filteredItems.map((_, index) => (
            <Box
              key={index}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`} // ✅ Explicitly using index
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: activeIndex === index ? "#F76680" : "#ccc",
                margin: "0 5px",
                cursor: "pointer",
              }}
            />
          ))}
        </Box>


        {/* Dots Navigation */}
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
          {filteredItems.map((_, index) => (
            <Box
              key={index}
              onClick={() => handleDotClick(index)}
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: activeIndex === index ? "#F76680" : "#ccc",
                margin: "0 5px",
                cursor: "pointer",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Slider1;
