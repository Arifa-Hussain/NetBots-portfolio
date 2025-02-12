
import { Box, Typography, Grid, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { useNavigate } from "react-router-dom";;
import {
  Home as HomeIcon,
  Build as BuildIcon,
  Security as SecurityIcon,
  AccountBalance as AccountBalanceIcon,
} from "@mui/icons-material"; // Import relevant icons
import skillData from "../data/skill.json"
const Skill = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle button click and navigate to the DetailPage
  const handleDetailsClick = () => {
    navigate("/detail-page"); // Navigate to the DetailPage route
  };

  const handleEnrollNow = () => {
    // Navigate to admission form page (already defined)
    navigate("/admission-form");
  };
  return (
    <Box sx={{ padding: { xs: "2rem 1rem", md: "4rem 2rem" } }}>
       <Typography
                                                           variant="h3"
                                                           sx={{
                                                             marginBottom:"30px",
                                                             fontWeight: 'bold',
                                                             fontSize: { xs: '1.8rem', md: '2.5rem' },
                                                             lineHeight: 1.2,
                                                            
                                                           }}
                                                         >
                                                           <span style={{ fontWeight: 'normal' }}>  Building Better Futures Through  </span>{' '}
                                                           <span
                                                             style={{
                                                               background:
                                                                 'linear-gradient(180deg,rgb(19, 59, 119) 20%, rgba(14, 36, 237, 0) 100%)',
                                                               WebkitBackgroundClip: 'text',
                                                               WebkitTextFillColor: 'transparent',
                                                               fontWeight: 'bold',
                                                               
                                                             }}
                                                           >
                                                             Skill Development 
                                                           </span>{' '}
                                                           
                                                         </Typography>
     
      <Grid container spacing={4} justifyContent="center">
        {/* Section 1 - First Line */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: "#2A327D",
              borderRadius: "21.82px",
              padding: "20px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box",
              width: "100%",
              maxWidth: "400px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                overflow: "hidden",
                marginBottom: "16px",
              }}
            >
              <img
                src="/ServicesImage/im1.jpeg"
                alt="Mern Stack Web Development"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "#2A327D",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Mern Stack Web Development
              </Typography>
            </Box>
            <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",  
    backgroundColor: "#3C4579",
    borderRadius: "8px",
    marginBottom: "16px",
    width: "93%",
    border: "2px solid white",
  }}
>
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      marginBottom: "16px",
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <HomeIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData.skillData[3].description}
      </Typography>
    </Box>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <BuildIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData .skillData [4].description}
      </Typography>
    </Box>
  </Box>

  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <SecurityIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData .skillData[5].description}
      </Typography>
    </Box>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <AccountBalanceIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData.skillData[6].description}
      </Typography>
    </Box>
  </Box>
</Box>

{/* Buttons Section */}
<Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        alignItems: "center", // Align items in the center
        gap: 2, // Adds spacing between buttons
      }}
    >
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FFFFFF",
          color: "#2A327D",
          fontWeight: "bold",
          borderRadius: "8px",
          width: "150px", // Same width for both buttons
          fontSize: "12px", // Optional: Set the same font size for consistency
        }}
        onClick={handleDetailsClick} // Handle the Details button click
      >
        Details
        <ArrowBackIcon sx={{ transform: "rotate(180deg)", marginLeft: "8px" }} />
      </Button>

      <div>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#DAEE2C",
            color: "#2A327D",
            fontWeight: "bold",
            borderRadius: "8px",
            width: "150px", // Same width for both buttons
            fontSize: "12px", // Same font size
          }}
          onClick={handleEnrollNow} // Call the function when clicked
        >
          Enroll Now
          <ArrowBackIcon sx={{ transform: "rotate(180deg)", marginLeft: "8px" }} />
        </Button>
      </div>
    </Box>


          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: "#2A327D",
              borderRadius: "21.82px",
              padding: "20px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box",
              width: "100%",
              maxWidth: "400px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                overflow: "hidden",
                marginBottom: "16px",
              }}
            >
              <img
                src="/ServicesImage/im2.jpeg"
                alt="Digital Marketing"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "#2A327D",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Digital Marketing
              </Typography>
            </Box>
            <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#3C4579",
    borderRadius: "8px",
    marginBottom: "16px",
    width: "93%",
    border: "2px solid white",
  }}
>
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      marginBottom: "16px",
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <HomeIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData.skillData[3].description}
      </Typography>
    </Box>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <BuildIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData.skillData[4].description}
      </Typography>
    </Box>
  </Box>

  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <SecurityIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData.skillData[5].description}
      </Typography>
    </Box>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <AccountBalanceIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData.skillData[6].description}
      </Typography>
    </Box>
  </Box>
</Box>

{/* Buttons Section */}
<Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        alignItems: "center", // Align items in the center
        gap: 2, // Adds spacing between buttons
      }}
    >
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FFFFFF",
          color: "#2A327D",
          fontWeight: "bold",
          borderRadius: "8px",
          width: "150px", // Same width for both buttons
          fontSize: "12px", // Optional: Set the same font size for consistency
        }}
        onClick={handleDetailsClick} // Handle the Details button click
      >
        Details
        <ArrowBackIcon sx={{ transform: "rotate(180deg)", marginLeft: "8px" }} />
      </Button>

      <div>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#DAEE2C",
            color: "#2A327D",
            fontWeight: "bold",
            borderRadius: "8px",
            width: "150px", // Same width for both buttons
            fontSize: "12px", // Same font size
          }}
          onClick={handleEnrollNow} // Call the function when clicked
        >
          Enroll Now
          <ArrowBackIcon sx={{ transform: "rotate(180deg)", marginLeft: "8px" }} />
        </Button>
      </div>
    </Box>


          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: "#2A327D",
              borderRadius: "21.82px",
              padding: "20px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box",
              width: "100%",
              maxWidth: "400px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                overflow: "hidden",
                marginBottom: "16px",
              }}
            >
              <img
                src="/ServicesImage/im3.jpeg"
                alt="Graphic Designing"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "#2A327D",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Graphic Designing
              </Typography>
            </Box>
            <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#3C4579",
    borderRadius: "8px",
    marginBottom: "16px",
    width: "93%",
    border: "2px solid white",
  }}
>
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      marginBottom: "16px",
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <HomeIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData.skillData[3].description}
      </Typography>
    </Box>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <BuildIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData.skillData[4].description}
      </Typography>
    </Box>
  </Box>

  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <SecurityIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData.skillData[5].description}
      </Typography>
    </Box>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <AccountBalanceIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData.skillData[6].description}
      </Typography>
    </Box>
  </Box>
</Box>

{/* Buttons Section */}
<Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        alignItems: "center", // Align items in the center
        gap: 2, // Adds spacing between buttons
      }}
    >
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FFFFFF",
          color: "#2A327D",
          fontWeight: "bold",
          borderRadius: "8px",
          width: "150px", // Same width for both buttons
          fontSize: "12px", // Optional: Set the same font size for consistency
        }}
        onClick={handleDetailsClick} // Handle the Details button click
      >
        Details
        <ArrowBackIcon sx={{ transform: "rotate(180deg)", marginLeft: "8px" }} />
      </Button>

      <div>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#DAEE2C",
            color: "#2A327D",
            fontWeight: "bold",
            borderRadius: "8px",
            width: "150px", // Same width for both buttons
            fontSize: "12px", // Same font size
          }}
          onClick={handleEnrollNow} // Call the function when clicked
        >
          Enroll Now
          <ArrowBackIcon sx={{ transform: "rotate(180deg)", marginLeft: "8px" }} />
        </Button>
      </div>
    </Box>

          </Box>
        </Grid>

        {/* Section 2 - Second Line */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: "#2A327D",
              borderRadius: "21.82px",
              padding: "20px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box",
              width: "100%",
              maxWidth: "400px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                overflow: "hidden",
                marginBottom: "16px",
              }}
            >
              <img
                src="/ServicesImage/im4.jpeg"
                alt="Python Programming"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "#2A327D",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Python Programming
              </Typography>
            </Box>
            <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#3C4579",
    borderRadius: "8px",
    marginBottom: "16px",
    width: "93%",
    border: "2px solid white",
  }}
>
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      marginBottom: "16px",
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <HomeIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData.skillData[3].description}
      </Typography>
    </Box>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <BuildIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData.skillData[4].description}
      </Typography>
    </Box>
  </Box>

  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <SecurityIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData.skillData[5].description}
      </Typography>
    </Box>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <AccountBalanceIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData.skillData[6].description}
      </Typography>
    </Box>
  </Box>
</Box>

{/* Buttons Section */}
<Box
  sx={{
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "space-between",
  }}
>
  <Button
    variant="contained"
    sx={{
      backgroundColor: "#FFFFFF",
      color: "#2A327D",
      padding: "8px 16px",
      borderRadius: "8px",
    }}
  >
    <ArrowBackIcon />
    Details
  </Button>
  <Button
    variant="contained"
    sx={{
      backgroundColor: "#DAEE2C",
      color: "#2A327D",
      padding: "8px 16px",
      borderRadius: "8px",
    }}
  >
    Enroll Now
    <ArrowBackIcon sx={{ transform: "rotate(180deg)" }} />
  </Button>
</Box>

          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: "#2A327D",
              borderRadius: "21.82px",
              padding: "20px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box",
              width: "100%",
              maxWidth: "400px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                overflow: "hidden",
                marginBottom: "16px",
              }}
            >
              <img
                src="/ServicesImage/im5.jpeg"
                alt="CIT"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "#2A327D",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                CIT
              </Typography>
            </Box>
            <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#3C4579",
    borderRadius: "8px",
    marginBottom: "16px",
    width: "93%",
    border: "2px solid white",
  }}
>
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      marginBottom: "16px",
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <HomeIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData.skillData[3].description}
      </Typography>
    </Box>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <BuildIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData.skillData[4].description}
      </Typography>
    </Box>
  </Box>

  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <SecurityIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData.skillData[5].description}
      </Typography>
    </Box>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <AccountBalanceIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData.skillData[6].description}
      </Typography>
    </Box>
  </Box>
</Box>

{/* Buttons Section */}
<Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        alignItems: "center", // Align items in the center
        gap: 2, // Adds spacing between buttons
      }}
    >
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FFFFFF",
          color: "#2A327D",
          fontWeight: "bold",
          borderRadius: "8px",
          width: "150px", // Same width for both buttons
          fontSize: "12px", // Optional: Set the same font size for consistency
        }}
        onClick={handleDetailsClick} // Handle the Details button click
      >
        Details
        <ArrowBackIcon sx={{ transform: "rotate(180deg)", marginLeft: "8px" }} />
      </Button>

      <div>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#DAEE2C",
            color: "#2A327D",
            fontWeight: "bold",
            borderRadius: "8px",
            width: "150px", // Same width for both buttons
            fontSize: "12px", // Same font size
          }}
          onClick={handleEnrollNow} // Call the function when clicked
        >
          Enroll Now
          <ArrowBackIcon sx={{ transform: "rotate(180deg)", marginLeft: "8px" }} />
        </Button>
      </div>
    </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: "#2A327D",
              borderRadius: "21.82px",
              padding: "20px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box",
              width: "100%",
              maxWidth: "400px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                overflow: "hidden",
                marginBottom: "16px",
              }}
            >
              <img
                src="/ServicesImage/im6.jpeg"
                alt="UI/UX Designing"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "#2A327D",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                UI/UX Designing
              </Typography>
            </Box>
            <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#3C4579",
    borderRadius: "8px",
    marginBottom: "16px",
    width: "93%",
    border: "2px solid white",
  }}
>
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      marginBottom: "16px",
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <HomeIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData.skillData[3].description}
      </Typography>
    </Box>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <BuildIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData.skillData[4].description}
      </Typography>
    </Box>
  </Box>

  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <SecurityIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData.skillData[5].description}
      </Typography>
    </Box>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <AccountBalanceIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData.skillData[6].description}
      </Typography>
    </Box>
  </Box>
</Box>

{/* Buttons Section */}
<Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        alignItems: "center", // Align items in the center
        gap: 2, // Adds spacing between buttons
      }}
    >
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FFFFFF",
          color: "#2A327D",
          fontWeight: "bold",
          borderRadius: "8px",
          width: "150px", // Same width for both buttons
          fontSize: "12px", // Optional: Set the same font size for consistency
        }}
        onClick={handleDetailsClick} // Handle the Details button click
      >
        Details
        <ArrowBackIcon sx={{ transform: "rotate(180deg)", marginLeft: "8px" }} />
      </Button>

      <div>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#DAEE2C",
            color: "#2A327D",
            fontWeight: "bold",
            borderRadius: "8px",
            width: "150px", // Same width for both buttons
            fontSize: "12px", // Same font size
          }}
          onClick={handleEnrollNow} // Call the function when clicked
        >
          Enroll Now
          <ArrowBackIcon sx={{ transform: "rotate(180deg)", marginLeft: "8px" }} />
        </Button>
      </div>
    </Box>
          </Box>
        </Grid>

        {/* Section 3 - Third Line */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: "#2A327D",
              borderRadius: "21.82px",
              padding: "20px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box",
              width: "100%",
              maxWidth: "400px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                overflow: "hidden",
                marginBottom: "16px",
              }}
            >
              <img
                src="/ServicesImage/im7.jpeg"
                alt="Flutter App Development"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "#2A327D",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Flutter App Development
              </Typography>
            </Box>
            <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#3C4579",
    borderRadius: "8px",
    marginBottom: "16px",
    width: "93%",
    border: "2px solid white",
  }}
>
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      marginBottom: "16px",
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <HomeIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData.skillData[3].description}
      </Typography>
    </Box>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <BuildIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData.skillData[4].description}
      </Typography>
    </Box>
  </Box>

  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <SecurityIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData.skillData[5].description}
      </Typography>
    </Box>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <AccountBalanceIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData.skillData[6].description}
      </Typography>
    </Box>
  </Box>
</Box>

{/* Buttons Section */}
<Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        alignItems: "center", // Align items in the center
        gap: 2, // Adds spacing between buttons
      }}
    >
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FFFFFF",
          color: "#2A327D",
          fontWeight: "bold",
          borderRadius: "8px",
          width: "150px", // Same width for both buttons
          fontSize: "12px", // Optional: Set the same font size for consistency
        }}
        onClick={handleDetailsClick} // Handle the Details button click
      >
        Details
        <ArrowBackIcon sx={{ transform: "rotate(180deg)", marginLeft: "8px" }} />
      </Button>

      <div>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#DAEE2C",
            color: "#2A327D",
            fontWeight: "bold",
            borderRadius: "8px",
            width: "150px", // Same width for both buttons
            fontSize: "12px", // Same font size
          }}
          onClick={handleEnrollNow} // Call the function when clicked
        >
          Enroll Now
          <ArrowBackIcon sx={{ transform: "rotate(180deg)", marginLeft: "8px" }} />
        </Button>
      </div>
    </Box>

          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: "#2A327D",
              borderRadius: "21.82px",
              padding: "20px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box",
              width: "100%",
              maxWidth: "400px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                overflow: "hidden",
                marginBottom: "16px",
              }}
            >
              <img
                src="/ServicesImage/im8.jpeg"
                alt="C++ Programming"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "#2A327D",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                C++ Programming
              </Typography>
            </Box>
            <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#3C4579",
    borderRadius: "8px",
    marginBottom: "16px",
    width: "93%",
    border: "2px solid white",
  }}
>
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      marginBottom: "16px",
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <HomeIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData.skillData[3].description}
      </Typography>
    </Box>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <BuildIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData.skillData[4].description}
      </Typography>
    </Box>
  </Box>

  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <SecurityIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData.skillData[5].description}
      </Typography>
    </Box>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <AccountBalanceIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData.skillData[6].description}
      </Typography>
    </Box>
  </Box>
</Box>

{/* Buttons Section */}
<Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        alignItems: "center", // Align items in the center
        gap: 2, // Adds spacing between buttons
      }}
    >
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FFFFFF",
          color: "#2A327D",
          fontWeight: "bold",
          borderRadius: "8px",
          width: "150px", // Same width for both buttons
          fontSize: "12px", // Optional: Set the same font size for consistency
        }}
        onClick={handleDetailsClick} // Handle the Details button click
      >
        Details
        <ArrowBackIcon sx={{ transform: "rotate(180deg)", marginLeft: "8px" }} />
      </Button>

      <div>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#DAEE2C",
            color: "#2A327D",
            fontWeight: "bold",
            borderRadius: "8px",
            width: "150px", // Same width for both buttons
            fontSize: "12px", // Same font size
          }}
          onClick={handleEnrollNow} // Call the function when clicked
        >
          Enroll Now
          <ArrowBackIcon sx={{ transform: "rotate(180deg)", marginLeft: "8px" }} />
        </Button>
      </div>
    </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: "#2A327D",
              borderRadius: "21.82px",
              padding: "20px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box",
              width: "100%",
              maxWidth: "400px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                overflow: "hidden",
                marginBottom: "16px",
              }}
            >
              <img
                src="/ServicesImage/im9.jpeg"
                alt="Scratch Programming"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "#2A327D",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Scratch Programming
              </Typography>
            </Box>
            <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#3C4579",
    borderRadius: "8px",
    marginBottom: "16px",
    width: "93%",
    border: "2px solid white",
  }}
>
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      marginBottom: "16px",
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <HomeIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData.skillData[3].description}
      </Typography>
    </Box>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <BuildIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData.skillData[4].description}
      </Typography>
    </Box>
  </Box>

  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <SecurityIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData.skillData[5].description}
      </Typography>
    </Box>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "45%",
      }}
    >
      <AccountBalanceIcon sx={{ color: "white", fontSize: "40px" }} />
      <Typography
        variant="body2"
        sx={{ color: "white", fontSize: "0.875rem" }}
      >
        {skillData.skillData[6].description}
      </Typography>
    </Box>
  </Box>
</Box>

{/* Buttons Section */}
<Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        alignItems: "center", // Align items in the center
        gap: 2, // Adds spacing between buttons
      }}
    >
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FFFFFF",
          color: "#2A327D",
          fontWeight: "bold",
          borderRadius: "8px",
          width: "150px", // Same width for both buttons
          fontSize: "12px", // Optional: Set the same font size for consistency
        }}
        onClick={handleDetailsClick} // Handle the Details button click
      >
        Details
        <ArrowBackIcon sx={{ transform: "rotate(180deg)", marginLeft: "8px" }} />
      </Button>

      <div>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#DAEE2C",
            color: "#2A327D",
            fontWeight: "bold",
            borderRadius: "8px",
            width: "150px", // Same width for both buttons
            fontSize: "12px", // Same font size
          }}
          onClick={handleEnrollNow} // Call the function when clicked
        >
          Enroll Now
          <ArrowBackIcon sx={{ transform: "rotate(180deg)", marginLeft: "8px" }} />
        </Button>
      </div>
    </Box>

          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skill;
