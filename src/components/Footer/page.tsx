import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Box, Typography, IconButton } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  const pages = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blogs" },
    { name: "Hire", path: "/hire" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  return (
    <Box
      sx={{
        padding: "30px",
        borderTop: "2px solid #E4ECF7",
        marginTop: "20px"
      }}
    >
      <Grid container spacing={4}>
        {/* First Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Box component="img" src="/homeImages/logo.svg" alt="Logo" sx={{ height: "100px", width: "auto" }} />
          <Typography sx={{ fontSize: "14px", color: "#718096" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
        </Grid>

        {/* Second Section - Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography sx={{ fontWeight: "bold", mb: 2, color: "#718096" }}>Quick Links</Typography>
          {pages.map((page) => (
            <Typography key={page.name} sx={{ fontSize: "14px", color: "#718096", mb: 1 }}>
              <Link to={page.path} style={{ textDecoration: "none", color: "inherit" }}>{page.name}</Link>
            </Typography>
          ))}
        </Grid>

        {/* Third Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography sx={{ fontWeight: "bold", mb: 2, color: "#718096" }}>Contact Us</Typography>
          <Typography sx={{ fontSize: "14px", color: "#718096", mb: 1 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#718096", mb: 1 }}>+923123456789</Typography>
        </Grid>

        {/* Fourth Section - Social Media */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography sx={{ fontWeight: "bold", mb: 2, color: "#718096" }}>Follow Us</Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton aria-label="facebook" sx={{ color: "#555", "&:hover": { color: "#3b5998" } }}>
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="instagram" sx={{ color: "#555", "&:hover": { color: "#E1306C" } }}>
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label="linkedin" sx={{ color: "#555", "&:hover": { color: "#0077b5" } }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton aria-label="twitter" sx={{ color: "#555", "&:hover": { color: "#1DA1F2" } }}>
              <TwitterIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Divider */}
      <Box sx={{ marginY: 3, borderTop: "1px solid #ccc" }}></Box>

      {/* Footer Text */}
      <Typography sx={{ textAlign: "center", fontSize: "14px", color: "#718096" }}>
        © 2024 Copyright by Net Bots (SMC-PRIVATE) LTD. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
