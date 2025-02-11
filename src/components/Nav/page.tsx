"use client";
import React, { useState } from "react";
import {
  Stack,
  Link as MuiLink,
  Toolbar,
  Container,
  AppBar,
  Button,
  Drawer,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const pages = [
  { name: "Home", id: "home", path: "/" },
  { name: "Pricing", id: "pricing", path: "/pricing" },
  { name: "Services", id: "services", path: "/services" },
  { name: "Blog", id: "blog", path: "/blogs" },
  { name: "How it Works", id: "how-it-works", path: "/how-it-works" },
  { name: "Hire", id: "hire", path: "/hire" },
  { name: "portfolio", id: "portifolio", path: "/portifolio" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      {/* Button to open Drawer for small screens */}
      <Button
        variant="text"
        onClick={toggleDrawer(true)}
        sx={{
          color: "purple",
          display: { xs: "flex", sm: "none" },
        }}
      >
        <MenuIcon />
      </Button>

      {/* Drawer Component */}
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor="right"
        sx={{
          "& .MuiDrawer-paper": {
            height: "100%",
            width: "100%",
            color: "#2A327D", 
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
         <Button
  onClick={toggleDrawer(false)}
  sx={{
    color: "#2A327D", // Set the cross button color
    "&:hover": {
      backgroundColor: "rgba(42, 50, 125, 0.1)", // Add a light hover effect
    },
  }}
>
  <CloseIcon />
</Button>

        </Box>

        {/* Drawer Navigation */}
        <NavList
          sx={{
            flexDirection: "column",
            textAlign: "center",
            gap: 2,
          }}
        />
       <Button
  variant="contained"
  sx={{
    backgroundColor: "#2A327D", // Set the background color
    color: "white", // Text color
    margin: 2, // Outer margin
    width: "290px", // Fixed width
    fontSize: "14px", // Font size
    alignSelf: "center", // Center alignment
    paddingY: 1.5, // Add padding on top and bottom (adjust for spacing)
    paddingX: 2, // Add padding on left and right for spacing
    "&:hover": {
      color: "white", // Darker shade on hover
    },
  }}
  href="/skill"
>
  Skill Development Program
</Button>

      </Drawer>

      {/* Navigation for larger screens */}
      <Stack
        direction="row"
        alignItems="center"
        spacing={3}
        sx={{
          display: { xs: "none", sm: "flex" },
        }}
      >
        <NavList />
        <Button
  variant="contained"
  sx={{
    backgroundColor: "#2A327D", // Set the background color
    color: "white", // Text color
    margin: 2, // Outer margin
    width: "290px", // Fixed width
    fontSize: "14px", // Font size
    alignSelf: "center", // Center alignment
    paddingY: 1.5, // Add padding on top and bottom (adjust for spacing)
    paddingX: 2, // Add padding on left and right for spacing
    "&:hover": {
      color: "white", // Darker shade on hover
    },
  }}
  href="/skill"
>
  Skill Development Program
</Button>
      </Stack>
    </>
  );
};

const NavList = ({ ...props }) => {
  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={3} {...props}>
      {pages.map((page) => (
        <Link key={page.id} to={page.path}>
          <MuiLink
            sx={{
              color: "black",
              textDecoration: "none",
              fontSize: { xs: "18px", sm: "initial" },
              "&:hover": {
                textDecoration: "none",
              },
            }}
          >
            {page.name}
          </MuiLink>
        </Link>
      ))}
    </Stack>
  );
};

const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "white",
        color: "#4A5568",
        boxShadow: "none",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Container>
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            {/* Responsive Logo */}
            <Box
              component="img"
              src="/homeImages/logo.svg"
              alt="Logo"
              sx={{
                height: { xs: 80, sm: 100, md: 110 }, // Maintain aspect ratio
                width: { xs: 200, sm: 220, md: 250 },
                maxWidth: "100%",
              }}
            />
            <Nav />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
