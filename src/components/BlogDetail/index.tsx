import { Box, Typography, TextField, IconButton, InputAdornment, List, ListItem, ListItemIcon, ListItemText, Grid, Card, CardContent, CardMedia  } from "@mui/material";
import BlogDataFile from "../data/BlogDetail.json";
import SearchIcon from "@mui/icons-material/Search";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowRightIcon from "@mui/icons-material/ArrowRight"; // Added missing import for ArrowRightIcon

const BlogDetail = () => {
  // Access BlogData array from the imported JSON file
  const BlogData = BlogDataFile.BlogData;

  // Extract the main blog, highlights, and recent posts dynamically
  const mainBlog = BlogData.find((item) => item.id === 1);
  const highlights = BlogData.find((item) => item.id === 2);
  const recentPosts = BlogData.filter((item) => item.id >= 3);

  // Extract the specific blog sections using their IDs
  const careerSection = BlogData.find((item) => item.id === 6);
  const categoriesSection = BlogData.find((item) => item.id === 7);

  // Find the data for section 8 and section 9
  const leftSection = BlogData.find((item) => item.id === 8);
  const rightSection = BlogData.find((item) => item.id === 9);

  // The 6 button labels for the right side

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        gap: "20px",
      }}
    >
      {/* Main Blog Section */}
      {mainBlog && (
        <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "white",
          }}
        >
          {/* Blog Image */}
          {mainBlog.image && (
            <Box
              sx={{
                width: "100%",
                height: { xs: "200px", sm: "300px", md: "400px" },
                overflow: "hidden",
                borderBottom: "1px solid #ddd",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={mainBlog.image}
                alt={mainBlog.title || "Blog Image"}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          )}

          {/* Blog Content and Search Box */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "20px",
              padding: "20px",
            }}
          >
            {/* Blog Content */}
            <Box sx={{ flex: 2 }}>
              <Typography
                                             variant="h3"
                                             sx={{
                                               marginBottom:"30px",
                                               fontWeight: 'bold',
                                               fontSize: { xs: '1.8rem', md: '2.5rem' },
                                               lineHeight: 1.2,
                                               textAlign: "left"
                                              
                                             }}
                                           >
                                             <span style={{ fontWeight: 'normal' }}>{mainBlog.heading}</span>{' '}
                                             <span
                                               style={{
                                                 background:
                                                   'linear-gradient(180deg,rgb(19, 59, 119) 20%, rgba(14, 36, 237, 0) 100%)',
                                                 WebkitBackgroundClip: 'text',
                                                 WebkitTextFillColor: 'transparent',
                                                 fontWeight: 'bold',
                                                 
                                               }}
                                             >
                                              {mainBlog.heading1}
                                             </span>{' '}
                                             
                                           </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "left",
                  margin: 0,
                  padding: "10px 0",
                }}
              >
                {mainBlog.description}
              </Typography>
            </Box>
            {/* Search Box */}
          </Box>
        </Box>
      )}

      {/* Additional Sections */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "20px",
        }}
      >
        {/* Highlights */}
        {highlights && (
          <Box flex={2}>
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
                            Highlights
                          
                            </Typography>
            <List>
              {Object.keys(highlights)
                .filter((key) => key.startsWith("description"))
                .map((key, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={highlights[key]} />
                  </ListItem>
                ))}
            </List>
          </Box>
        )}

        {/* Recent Posts */}
        <Box
          flex={1}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            padding: "10px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
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
                          Recent Posts
                        
                          </Typography>
          {recentPosts
            .filter((post) => [3, 4, 5].includes(post.id)) // Filter posts by id
            .map((post) => (
              <Box
                key={post.id}
                sx={{
                  display: "flex",
                  gap: "15px",
                  alignItems: "flex-start",
                  padding: "10px",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
                }}
              >
                <Box
                  sx={{
                    width: "80px",
                    height: "80px",
                    overflow: "hidden",
                    borderRadius: "8px",
                  }}
                >
                  <img
                    src={post.image}
                    alt="Recent Post"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Box>
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
                                   {post.title}
                                
                                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      display: "-webkit-box",
                    }}
                  >
                    {post.description}
                  </Typography>
                </Box>
              </Box>
            ))}
        </Box>
      </Box>
{/* Additional Sections2 */}
<Box sx={{ padding: 2 }}>
  <Grid container spacing={4} direction="column">
    {categoriesSection && (
      <Grid item xs={12} md={12} id="section-7">
<Box sx={{ padding: 2 }}>
  <Grid container spacing={4} direction="column">
    {/* Career Growth Section */}
    <Grid item xs={12} md={12} id="section-6">
      {careerSection && (
        <>
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
                          {careerSection.heading}
                       
                         </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              textAlign: "left", // Aligns the description to the left
              marginTop: 0, // Optional: Removes any unwanted margin above the paragraph
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" }, // Responsive font size
            }}
          >
            {careerSection.description}
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <img
                src={careerSection.image1}
                alt="Career Image 1"
                style={{
                  width: "100%",
                  height: "auto",
                  transition: "transform 0.3s ease", // Smooth transition effect
                }}
                sx={{
                  "&:hover": {
                    transform: "scale(1.05)", // Zoom-in effect
                  },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <img
                src={careerSection.image2}
                alt="Career Image 2"
                style={{
                  width: "100%",
                  height: "auto",
                  transition: "transform 0.3s ease", // Smooth transition effect
                }}
                sx={{
                  "&:hover": {
                    transform: "scale(1.05)", // Zoom-in effect
                  },
                }}
              />
            </Grid>
          </Grid>

          <Typography
            variant="body1"
            paragraph
            sx={{
              textAlign: "left", // Aligns the description to the left
              marginTop: 0, // Optional: Removes any unwanted margin above the paragraph
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" }, // Responsive font size
            }}
          >
            {careerSection.description}
          </Typography>
        </>
      )}
    </Grid>

    {/* Categories Section */}
    {categoriesSection && (
      <Grid item xs={12} md={12} id="section-7">
        <Box
          sx={{
            padding: { xs: 2, sm: 3 },
            borderRadius: "8px",
            backgroundColor: "#f9f9f9", // Light background for a clean look
            width: "95%", // Full width to fit the container
            marginLeft: 0, // Remove any negative margin for left alignment
            marginBottom: "20px", // Optional: add some bottom margin for spacing
          }}
        >
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
                          {careerSection.heading}
                       
                         </Typography>
          <List>
            {Object.keys(categoriesSection)
              .filter((key) => key.startsWith("description"))
              .map((key, index) => (
                <ListItem key={index} disableGutters sx={{ padding: "4px 0" }}>
                  <ListItemIcon>
                    <ArrowRightIcon sx={{ color: "#2A327D", fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={categoriesSection[key]}
                    primaryTypographyProps={{
                      variant: "body1",
                      sx: { color: "#333", fontSize: { xs: "0.9rem", sm: "1rem" } }, // Responsive font size
                    }}
                  />
                </ListItem>
              ))}
          </List>
        </Box>
      </Grid>
    )}

    {/* Tags Section */}
    {categoriesSection && (
      <Grid item xs={12} md={12} id="section-8">
        <Box
          sx={{
            padding: 3,
            borderRadius: "8px",
            backgroundColor: "#f9f9f9", // Light background for a clean look
            boxSizing: "border-box",
            marginLeft: 0, // Left alignment
            marginBottom: "20px", // Optional bottom margin for spacing
          }}
        >
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
                          NetBots Tags
                       
                         </Typography>
          <Grid
            container
            spacing={2}
            sx={{
              flexWrap: "wrap", // Ensures wrapping on smaller screens
              justifyContent: "flex-start", // Aligns buttons to the left
            }}
          >
            {/* Buttons */}
            {["NetBots", "Technology", "Cyber Security", "Product Branding", "Launched Products", "Digital Marketing"].map((tag, index) => (
              <Grid item key={index} xs={12} sm={4} md={2}> {/* Adjust button width at different breakpoints */}
                <button
                  style={{
                    fontSize: "14px",
                    border: "none", // No border
                    borderRadius: "20px",
                    backgroundColor: "#2A327D", // Attractive primary color
                    color: "#fff", // White text for contrast
                    cursor: "pointer",
                    transition: "transform 0.3s ease", // Smooth hover effect
                    width: "100%",  // Make buttons take full width of the Grid item
                    height: "40px",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.transform = "scale(1)")
                  }
                >
                  {tag}
                </button>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    )}
  </Grid>
</Box>

      </Grid>
    )}
  </Grid>
</Box>
{/* laste section */}
<Box sx={{ padding: 2, borderRadius: 2 }}>
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
                Related Posts
              
                </Typography>
  <Grid container spacing={4} justifyContent="center">
    {BlogData.filter((blog) => ['10', '11', '12'].includes(blog.id)).map((blog) => (
      <Grid item xs={12} sm={6} md={4} key={blog.id}>
        <Card sx={{ boxShadow: 3, borderRadius: 2, padding: 2, border: "1px solid #E7DAED" }}>
          <CardMedia
            component="img"
            height="200"
            image={blog.image}
            alt={blog.title}
            sx={{ objectFit: 'cover', borderRadius: 2 }}
          />
          <CardContent>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Typography  sx={{fontSize:"12px",fontWeight:"bold", color: "#2A327D" }}>
                  {blog.title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" sx={{ color: "#2A327D" }}>
                  {new Date(blog.date).toLocaleDateString()}
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: "#2A327D", marginTop: 2, textAlign: "left" }}>
  {blog.heading}
</Typography>
<Grid container alignItems="center" spacing={2}>
  <Grid item>
    <CardMedia
      component="img"
      height="40"
      image={blog.profile}
      alt={`${blog.name}'s profile`}
      sx={{ borderRadius: '50%' }}  // Optional: Makes the image circular
    />
  </Grid>
  <Grid item>
    <Typography variant="body2" sx={{ color: "#2A327D" }}>
      {blog.name}
    </Typography>
  </Grid>
</Grid>

          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>

    </Box>

  );
};

export default BlogDetail;
