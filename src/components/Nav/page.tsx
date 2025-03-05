"use client";
import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  IconButton,
  Stack,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Link as MuiLink,
  useMediaQuery,
  MenuItem,
  Select,
  TextField,
  FormControl,
  InputLabel,
  InputAdornment
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const pages = [
  { name: "Home", id: "home", path: "/" },
  { name: "hotels", id: "hotels", path: "/hotels" },
  { name: "tour", id: "tour", path: "/tour" },
 
  { name: "Eat & Drink", id: "eat", path: "/eat" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: "url(/HomeImages/banner.jpg)",
        backgroundSize: "full",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        overflow: "hidden",
      }}
    >
      {/* Navbar */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled ? "white" : "transparent",
          color: scrolled ? "black" : "white",
          boxShadow: "none",
          transition: "background-color 0.3s ease",
          // marginBottom:"-80px"
        }}
      >
        <Container>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {/* Logo */}
            <Box component="img" src="/HomeImages/logo.jpg" alt="Logo" sx={{ height: 50 }} />

            {/* Desktop Navigation */}
            {!isMobile ? (
              <Stack direction="row" spacing={3} alignItems="center">
                {pages.map((page) => (
                  <Link key={page.id} to={page.path} style={{ textDecoration: "none" }}>
                    <MuiLink sx={{ color: scrolled ? "black" : "white", fontWeight: "bold" }}>
                      {page.name}
                    </MuiLink>
                  </Link>
                ))}
                <IconButton color="inherit"><ShoppingCartIcon /></IconButton>
                <IconButton color="inherit"><FavoriteBorderIcon /></IconButton>
                <IconButton color="inherit"><AccountCircleIcon /></IconButton>
              </Stack>
            ) : (
              // Mobile Menu Button
              <IconButton edge="end" color="inherit" onClick={() => setMobileOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{ "& .MuiDrawer-paper": { width: "250px", backgroundColor: "#222", color: "white" } }}
      >
        <IconButton
          onClick={() => setMobileOpen(false)}
          sx={{ alignSelf: "flex-end", p: 2, color: "white" }}
        >
          <CloseIcon />
        </IconButton>
        <List>
          {pages.map((page) => (
            <ListItem key={page.id} button component={Link} to={page.path} onClick={() => setMobileOpen(false)}>
              <ListItemText primary={page.name} sx={{ textAlign: "center", fontWeight: "bold" }} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Hero Section */}
      <Typography variant="h2" component="h1" sx={{ fontWeight: "bold", color: "white", textAlign: "center" }}>
        Book Unique Experiences
      </Typography>
      <Typography variant="h5" component="p" sx={{ mt: 2, color: "white", textAlign: "center", mb: 3 }}>
        Explore top-rated tours, hotels, and restaurants around the world
      </Typography>

      {/* Search Bar */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          backgroundColor: "white",
          padding: 2,
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          width: isMobile ? "90%" : "70%",
          gap: 2,
        }}
      >
        {/* Hotel City Input */}
        <TextField
          placeholder="Hotel City"
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnIcon />
              </InputAdornment>
            ),
          }}
        />

        {/* When Input */}
        <TextField
          placeholder="When"
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CalendarTodayIcon />
              </InputAdornment>
            ),
          }}
        />

        {/* Guests Selection Dropdown */}
        <FormControl fullWidth>
          <InputLabel>Guests</InputLabel>
          <Select>
            <MenuItem>
              Adults
              <IconButton onClick={() => setAdults(Math.max(1, adults - 1))}><RemoveIcon /></IconButton>
              {adults}
              <IconButton onClick={() => setAdults(adults + 1)}><AddIcon /></IconButton>
            </MenuItem>
            <MenuItem>
              Children
              <IconButton onClick={() => setChildren(Math.max(0, children - 1))}><RemoveIcon /></IconButton>
              {children}
              <IconButton onClick={() => setChildren(children + 1)}><AddIcon /></IconButton>
            </MenuItem>
          </Select>
        </FormControl>

        {/* Search Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ff7f50",
            color: "white",
            padding: "12px 25px",
            fontSize: "18px",
            fontWeight: "bold",
            borderRadius: "8px",
            textTransform: "none",
            boxShadow: "0px 5px 15px rgba(255, 127, 80, 0.5)",
            "&:hover": { backgroundColor: "#ff6347" },
          }}
        >
          <SearchIcon /> Search
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
