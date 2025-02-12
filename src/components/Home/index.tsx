import React from "react";
import { Grid, Box, Typography, Button, Avatar,Container } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Slider2 from "../slider2/page";
import homeJson from "../data/home.json";
import HeroSection from "../Herosection";
import TechStack from "../TeckStack";

const Home: React.FC = () => {
  // Access homeData safely
  const homeData = homeJson?.homeData || [];
  // Define the lastSection data safely
  // const lastSection = homeData[homeData.length - 1] || {
  //   heading: "",
  //   description: "",
  //   description2: "",
  //   description3: "",
  //   image4: "/homeImages/defaultImage.jpg",
  // };

  return (
    <>
    <HeroSection/>
      {/* Main Section */}
      {homeData.length > 0 ? (
        homeData.map((item, index) => (
          <div
            key={item.id}
            style={{
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              overflow: "hidden", // Ensure no overflow
              boxSizing: "border-box", // Include padding in width calculation
            }}
          >
            {/* Video Section */}
            {index === 0 && item.video && (
              <Grid
                container
                spacing={2}
                alignItems="stretch"
                justifyContent="center"
              >
               <Grid item xs={12} md={6}>
               <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // Align all items to the left
    paddingLeft: { xs: 2, md: 3 }, // Add left padding for spacing
    paddingTop: 2,
    marginBottom: 2, // Ensure there’s space below the box for better layout
  }}
>
<Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '1.8rem', md: '2.5rem' },
                lineHeight: 1.2,
              }}
            >
              <span style={{ fontWeight: 'bold' }}>Leading Companies</span>{' '}
              <br />
              <span
                style={{
                  background:
                  'linear-gradient(180deg,rgb(19, 59, 119) 20%, rgba(14, 36, 237, 0) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold',
                  marginLeft:"-220px"
                }}
              >
                Trust Us
              </span>{' '}
             
            </Typography>
    <Typography
      variant="body1"
      sx={{
        fontSize: { xs: "0.9rem", md: "1rem" },
        marginBottom: 2,
        textAlign: "left", // Ensure text is left-aligned
      }}
    >
      {item.description}
    </Typography>

</Box>
</Grid>

                <Grid item xs={12} md={6}>
                  <Box
                    component="video"
                    controls
                    src={item.video}
                    sx={{
                      width: "100%", // Ensure video width is responsive
                      maxHeight: "300px",
                      objectFit: "cover",
                      borderRadius: 2,
                    }}
                  />
                </Grid>
              </Grid>
            )}
          </div>
        ))
      ) : (
        <Typography variant="h6" sx={{ textAlign: "center", marginTop: 4 }}>
          No data available to display.
        </Typography>
      )}

      <Slider2 />

      {/* Heading and Description Section for Client Reviews */}
      <Box sx={{ width: "100%", marginBottom: 3, textAlign: "center" }}>
      <Typography
    variant="h5"
    sx={{
      color: "#2A327D",
      fontWeight: "bold",
      fontFamily: "Poppins, sans-serif",
      mb: 2, // Added margin-bottom for spacing
         marginTop:"40px"
    }}
  >
   Why Customer love working with us

  </Typography>
        <Typography
          sx={{
            textAlign: "center",
            color: "#718096", 
            fontSize: { xs: "15px", md: "15px" }, 
            lineHeight: 1.8, 
            maxWidth: "600px", 
            margin: "0 auto", 
            fontWeight: "400", 
          }}
        >
          <span style={{ color: "#57007B" }}>"</span>
          Without any doubt I recommend Alcaline Solutions as one of the best web
          design and digital marketing agencies. One of the best agencies I’ve
          came across so far. Wouldn’t hesitate to introduce their work to
          someone else.
          <span style={{ color: "#57007B" }}>"</span>
        </Typography>
      </Box>

      {/* Five Client Reviews in One Line */}
      <Grid container spacing={3} justifyContent="center">
        {homeData.slice(9, 14).map((client) => (
          <Grid
            key={client.id}
            item
            xs={12}
            sm={6}
            md={2.4} // Adjusts to fit 5 items in one row
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {/* Circular Image */}
            <Avatar
              src={client.image2 || "/homeImages/defaultImage.jpg"} // Use fallback if image2 is undefined
              alt={client.name}
              sx={{
                width: "120px",
                height: "120px",
                marginBottom: 1,
                borderRadius: "50%",
              }}
            />
            {/* Stars */}
            <Box>
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <StarIcon key={i} sx={{ color: "gold" }} />
                ))}
            </Box>
            {/* Name */}
            <Typography
              variant="h6"
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
                marginTop: 1,
                marginBottom: 1,
              }}
            >
              {client.name}
            </Typography>
            {/* Designation */}
            <Typography
              variant="body2"
              sx={{
                fontSize: "0.9rem",
                fontWeight: "400",
                color: "gray",
                marginBottom:"20px"
              }}
            >
              {client.designation}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* Our recent Case studies */}
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
         
          paddingTop: "1.5px",
        }}
      >
         <Typography
    variant="h5"
    sx={{
      color: "#2A327D",
      fontWeight: "bold",
      fontFamily: "Poppins, sans-serif",
      mb: 2, 
         marginTop:"40px"
    }}
  >
  Our recent case studies

  </Typography>
      </Box>

      {/* Three Case Study Sections with Image on Left and Text on Right */}
      {homeData.slice(17, 20).map((data) => (
        <Box sx={{ textAlign: "center", padding: { xs: "30px", sm: "50px",background: "#F7F7FA", } }} key={data.id}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <Box sx={{ padding: "20px" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "40px" }}>
                  {data.heading}
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    fontStyle: "italic",
                    marginLeft: "12px",
                  }}
                >
                  {data.description}
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    fontStyle: "italic",
                    marginLeft: "-145px",
                    marginBottom: "40px",
                    marginTop: "40px",
                  }}
                >
                  {data.description2}
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    color: "#57007B",
                    fontStyle: "italic",
                    marginLeft: "12px",
                    padding: "8px",
                    borderLeft: "4px solid #57007B",
                    borderRadius: "4px",
                  }}
                >
                  {data.description3}
                </Typography>
              </Box>
            </Grid>

            {/* Right Section (Image) */}
            <Grid item xs={12} sm={6}>
              <Box sx={{ padding: "20px" }}>
                <img
                  src={data.image}
                  alt="Software Image"
                  style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      ))}

      {/* Tech Stack Section */}
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          paddingTop: "0.1px",
          paddingBottom: "0.5px",
        }}
      >
      <Typography
    variant="h5"
    sx={{
      color: "#2A327D",
      fontWeight: "bold",
      fontFamily: "Poppins, sans-serif",
      mb: 2, // Added margin-bottom for spacing,
      marginTop:"40px"
    }}
  >
  Our tech stack

  </Typography>
      </Box>
      <Box
  sx={{
    width: "100%",
    textAlign: "center",
   
  }}
>
 <TechStack />
</Box>
<Typography
    variant="h5"
    sx={{
      color: "#2A327D",
      fontWeight: "bold",
      fontFamily: "Poppins, sans-serif",
      mb: 2, // Added margin-bottom for spacing
         marginTop:"40px"
    }}
  >
 How Development Progresses Through Base Processes

  </Typography>

        <Box sx={{ padding: "20px", marginTop: "50px" }}>
  {/* Horizontal Line Above First Section */}
  <Box />

  <Grid container spacing={4} justifyContent="center">
    {/* First Row */}
    {homeData.slice(35, 38).map((item) => (
      <Grid
        key={item.id}
        item
        xs={12}
        sm={6}
        md={4}
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box
          sx={{
            padding: "20px",
            textAlign: "center",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            height: "150px",
            width: "70%",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: "10px", marginTop: "10px" }}
          >
            {item.heading}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#718096", lineHeight: 1.6 }}
          >
            {item.description}
          </Typography>
        </Box>
      </Grid>
    ))}
  </Grid>

  {/* Horizontal Line with Linear Gradient */}
  <Box
    sx={{
      height: "2px",
      background: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
      position: "relative",
      marginY: "40px",
    }}
  >
    {/* Long Vertical Lines */}
    {homeData.slice(35, 41).map((_, index) => (
      <Box
        key={index}
        sx={{
          position: "absolute",
          top: "50%",
          left: `${(index % 3) * 33.33 + 16.66}%`, // Dynamically position lines
          transform: "translateY(-50%)",
          height: "40px", // Adjusted height for longer lines
          width: "2px",
          background: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
        }}
      />
    ))}
  </Box>

  <Grid container spacing={4} justifyContent="center">
    {/* Second Row */}
    {homeData.slice(38, 41).map((item) => (
      <Grid
        key={item.id}
        item
        xs={12}
        sm={6}
        md={4}
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box
          sx={{
            padding: "20px",
            textAlign: "center",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            height: "200px",
            width: "70%",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              marginBottom: "10px",
              marginTop: "10px",
            }}
          >
            {item.heading}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#718096", lineHeight: 1.6 }}
          >
            {item.description}
          </Typography>
        </Box>
      </Grid>
    ))}
  </Grid>
  <Box />
</Box>
<Typography
    variant="h5"
    sx={{
      color: "#2A327D",
      fontWeight: "bold",
      fontFamily: "Poppins, sans-serif",
      mb: 2, // Added margin-bottom for spacing
         marginTop:"40px"
    }}
  >
  Featured Resources

  </Typography>

        <Box sx={{ padding: 4 }}>
  <Grid container spacing={2} justifyContent="space-between">
    {homeData.slice(41, 46).map((item) => (
      <Grid item xs={12} sm={6} md={2.4} key={item.id}>
        <Box
          sx={{
            border: 1,
            borderColor: "grey.300",
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 3,
            height: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between", // Ensures content stretches vertically
          }}
        >
          <img
            src={item.image}
            alt={item.description}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
            }}
          />
          <Box sx={{ padding: 2, flexGrow: 1 }}>
            <Typography variant="h6" gutterBottom>
              {item.description}
            </Typography>
          </Box>
          <Box
            sx={{
              padding: 2,
              display: "flex",
              justifyContent: "flex-end", // Align button to the right
            }}
          >
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon sx={{ color: "#57007B" }} />}
              sx={{
                textTransform: "none",
                paddingLeft: 2,
                paddingRight: 2,
                color: "#57007B",
                borderColor:"white"
              }}
            >
              Read More
            </Button>
          </Box>
        </Box>
      </Grid>
    ))}
  </Grid>
</Box>
<Box
  sx={{
    background: "linear-gradient(225deg, #F1F1F5 0%, #E4ECF7 100%)",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-between",
    alignItems: "center",
    padding: { xs: "20px 10px", md: "20px 30px" },
    borderRadius: "8px",
  }}
>
  <Typography
    variant="h1"
    sx={{
      fontSize: { xs: "24px", md: "30px" },
      fontWeight: "bold",
      height:"110px",
      textAlign: { xs: "center", md: "left" },
      marginBottom: { xs: "20px", md: "0",marginTop:"50px" },
    }}
  >
    Hire the best developers and <br /> designers around!
  </Typography>

  <Box
    sx={{
      position: "relative",
      textAlign: { xs: "center", md: "right" },
    }}
  >
    <Box
      sx={{
        position: "absolute",
        top: "-10px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "60%",
        height: "3px",
        background: "linear-gradient(225deg, #FFC656 0%, #F16063 100%)",
        borderRadius: "3px",
      }}
    ></Box>
    <Button
      sx={{
        background: "linear-gradient(225deg, #FFC656 0%, #F16063 100%)",
        width: "262px",
        height: "57px",
        borderRadius: "5px",
        border: "1px solid",
        color: "#fff",
        textTransform: "none",
        fontSize: "16px",
        fontWeight: "bold",
        padding: "8px 10px",
        ":hover": {
          background: "linear-gradient(225deg, #F16063 0%, #FFC656 100%)",
        },
      }}
    >
      Hire Top Developers
    </Button>
    <Box
      sx={{
        position: "absolute",
        bottom: "-10px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "60%",
        height: "3px",
        background: "linear-gradient(225deg, #FFC656 0%, #F16063 100%)",
        borderRadius: "3px",
      }}
    ></Box>
    
  </Box>
</Box>
<Container maxWidth={false} disableGutters sx={{ position: "relative" }}>

      {/* <LogoAnimation /> */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#fff",
          textAlign: "center",
        }}
      >
      </Box>
    </Container>
    </>
)};
export default Home;