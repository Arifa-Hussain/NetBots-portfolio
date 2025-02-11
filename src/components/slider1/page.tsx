'use client';
import React, { useRef, useState } from "react";
import Link from "next/link";
import { MobileFriendly as MobileFriendlyIcon } from "@mui/icons-material";
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
        overflow: "hidden", 
        marginBottom:"60px"
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
        <Box
          ref={sliderRef}
          sx={{
            display: "flex",
            overflowX: "auto", // Horizontal scroll enabled
            scrollBehavior: "smooth",
            gap: 2,
            marginTop: 2,
            width: "100%",
            padding: "0 10px",
            "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar
            overflowX: "hidden", // Prevent horizontal scroll on the entire page
          }}
        >
          {filteredItems.map((item, index) => (
            <Box
              key={item.id}
              sx={{
                flex: "0 0 333px",
                border: "1px solid #ddd",
                borderRadius: 2,
                backgroundColor: "#F9F9FF",
                textAlign: "center",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                height: "287px",
                transition: "border 0.3s ease",
                "&:hover": {
                  border: "2px solid transparent",
                  backgroundImage:
                    "linear-gradient(#fff, #fff), linear-gradient(225deg, #F76680 0%, #57007B 100%)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "content-box, border-box",
                },
              }}
            >
              <Link href={`/`} style={{ textDecoration: "none" }}>
                {/* Icon with purple circle */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    border: "2px solid purple",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#fff",
                  }}
                >
                  <MobileFriendlyIcon sx={{ fontSize: 28, color: "purple" }} />
                </Box>
                <Box sx={{ padding: 2, marginTop: "40px" }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
                    {item.heading || "Product"}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "rgb(119, 122, 128);", marginTop: 1 }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Link>
            </Box>
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
