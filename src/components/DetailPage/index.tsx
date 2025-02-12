import { useState, useEffect } from "react";
import DetailData from "../data/detail.json"; // Import JSON data
import { useNavigate } from "react-router-dom";
import { Container, Box, Typography, Button, Rating,Grid } from "@mui/material";
import { School, AccessTime } from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import { School, AccessTime } from "@mui/icons-material";
import { Code as JavaScriptIcon } from "@mui/icons-material";
import { Html, Css, Code, Api, Security, GitHub, CodeOutlined } from "@mui/icons-material";
import Accordion1 from "../Accordion/index";
import Instructor from "../Instructor/index";
import JobSuccessStories from "../JobSuccessStories";
import Faq from "../FAQ";
import { Chip } from "@mui/material";

// Define the expected type of detail data
type DetailItem = {
  id: number;
  heading?: string;
  heading1?: string;
  fee?: string;
  description?: string;
  image1: string;
  name?: string;
  designation?: string;
  about?: string;
};

// Component function
const DetailPage = () => {
  const [data, setData] = useState<DetailItem[]>([]); // Use an array instead of null
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    // Set the imported JSON data correctly
    setData(DetailData.DetailData as DetailItem[]); // Type assertion ensures correct data structure
  }, []);

  const handleEnrollNow = () => {
    navigate("/admission-form");
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {data.length > 0 &&
          data.map((item: DetailItem, index: number) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 4,
                mt: 5,
                alignItems: "center",
              }}
            >
              {/* Left Side - Display only once */}
              {index === 0 && (
                <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
                  <Typography
                    variant="h3"
                    sx={{
                      marginBottom: "30px",
                      fontWeight: "bold",
                      fontSize: { xs: "1.8rem", md: "2.5rem" },
                      lineHeight: 1.2,
                    }}
                  >
                    <span style={{ fontWeight: "normal" }}>{item.heading} </span>{" "}
                    <span
                      style={{
                        background:
                          "linear-gradient(180deg,rgb(19, 59, 119) 20%, rgba(14, 36, 237, 0) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontWeight: "bold",
                      }}
                    >
                      {item.heading1}
                    </span>
                  </Typography>
                  <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
                    Fee: {item.fee}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 2,
                      justifyContent: { xs: "center", md: "space-between" },
                      flexWrap: "wrap",
                      gap: 2,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Rating value={4.5} precision={0.5} readOnly sx={{ mr: 1 }} />
                      <Typography variant="body1">4.5/5 Rating</Typography>
                    </Box>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#2A327D",
                        color: "white",
                        fontWeight: "bold",
                        borderRadius: "8px",
                        fontSize: "12px",
                        px: 3,
                        display: "flex",
                        alignItems: "center",
                      }}
                      onClick={handleEnrollNow}
                    >
                      Enroll Now
                      <ArrowBackIcon sx={{ transform: "rotate(180deg)", marginLeft: "8px" }} />
                    </Button>
                  </Box>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    {item.description}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      justifyContent: { xs: "center", md: "space-between" },
                      flexWrap: "wrap",
                      mb: 4,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        backgroundColor: "#f5f5f5",
                        padding: 2,
                        borderRadius: "8px",
                        flex: 1,
                        minWidth: "150px",
                      }}
                    >
                      <School color="primary" />
                      <Typography variant="body1">Courses Covered</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        backgroundColor: "#f5f5f5",
                        padding: 2,
                        borderRadius: "8px",
                        flex: 1,
                        minWidth: "150px",
                      }}
                    >
                      <School color="primary" />
                      <Typography variant="body1">Certifications</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        backgroundColor: "#f5f5f5",
                        padding: 2,
                        borderRadius: "8px",
                        flex: 1,
                        minWidth: "150px",
                      }}
                    >
                      <AccessTime color="primary" />
                      <Typography variant="body1">Duration: 4 months</Typography>
                    </Box>
                  </Box>
                </Box>
              )}
              {/* Right Side - Image (display only once) */}
              {index === 0 && (
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: { xs: 3, md: 0 },
                  }}
                >
                  <img
                    src={item.image1}
                    alt={item.heading || "Detail Image"}
                    style={{
                      width: "100%",
                      maxWidth: "400px",
                      borderRadius: "12px",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              )}
            </Box>
          ))}
      </Container>

      {/* Overview Section */}
      <Container sx={{ padding: 4 }}>
        <Grid item xs={12} md={6}>
          <Accordion1 />
        </Grid>
      </Container>
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
                        Which Tools and Skills will You Learn in the Program?
                    
                      </Typography>
 <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Frontend Development Section */}
        <Box
          sx={{
            mb: 4,
            p: 2,
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: "100%",
            maxWidth: "1120px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Typography variant="h4" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
            1. Frontend Development:
          </Typography>

          <Grid container spacing={3} justifyContent="center" alignItems="center" sx={{ mt: 2 }}>
            <Grid item xs={6} sm={3} md={2}>
              <Chip
                icon={<Html />}
                label="HTML"
                sx={{ backgroundColor: "#f5f5f5", fontWeight: "bold", display: "flex", justifyContent: "center" }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <Chip
                icon={<Css />}
                label="CSS"
                sx={{ backgroundColor: "#f5f5f5", fontWeight: "bold", display: "flex", justifyContent: "center" }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <Chip
                icon={<JavaScriptIcon />}
                label="JavaScript"
                sx={{ backgroundColor: "#f5f5f5", fontWeight: "bold", display: "flex", justifyContent: "center" }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <Chip
                icon={<Code />}
                label="React.js"
                sx={{ backgroundColor: "#f5f5f5", fontWeight: "bold", display: "flex", justifyContent: "center" }}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Backend Development Section */}
        <Box
          sx={{
            mb: 4,
            p: 2,
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: "100%",
            maxWidth: "1120px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Typography variant="h4" sx={{ fontSize: "1rem", fontWeight: "bold", mb: 2 }}>
            2. Backend Development:
          </Typography>

          <Grid container spacing={3} justifyContent="center" alignItems="center">
            <Grid item xs={6} sm={3} md={2}>
              <Chip
                icon={<Code />}
                label="Node.js"
                sx={{ backgroundColor: "#f5f5f5", fontWeight: "bold", display: "flex", justifyContent: "center" }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <Chip
                icon={<CodeOutlined />}
                label="Express.js"
                sx={{ backgroundColor: "#f5f5f5", fontWeight: "bold", display: "flex", justifyContent: "center" }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <Chip
                icon={<Api />}
                label="MongoDB"
                sx={{ backgroundColor: "#f5f5f5", fontWeight: "bold", display: "flex", justifyContent: "center" }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <Chip
                icon={<Security />}
                label="REST API Development"
                sx={{ backgroundColor: "#f5f5f5", fontWeight: "bold", display: "flex", justifyContent: "center" }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <Chip
                icon={<Security />}
                label="Authentication & Authorization"
                sx={{ backgroundColor: "#f5f5f5", fontWeight: "bold", display: "flex", justifyContent: "center" }}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Development Environment Section */}
        <Box
          sx={{
            mb: 4,
            p: 2,
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: "100%",
            maxWidth: "1120px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Typography variant="h4" sx={{ fontSize: "1rem", fontWeight: "bold", mb: 2 }}>
            3. Development Environment and Version Control:
          </Typography>

          <Grid container spacing={3} justifyContent="center" alignItems="center">
            <Grid item xs={6} sm={3} md={2}>
              <Chip
                icon={<Code />}
                label="Visual Studio Code"
                sx={{ backgroundColor: "#f5f5f5", fontWeight: "bold", display: "flex", justifyContent: "center" }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <Chip
                icon={<GitHub />}
                label="Git"
                sx={{ backgroundColor: "#f5f5f5", fontWeight: "bold", display: "flex", justifyContent: "center" }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>

      
      {/* Instructor Section */}
      <Instructor />

      {/* FAQ Section */}
      <Faq />

      {/* Job Success Stories Section */}
      <JobSuccessStories />
    </>
  );
};

export default DetailPage;
