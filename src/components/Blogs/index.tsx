import { Typography, Box, Card, CardContent, CardMedia, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BlogData from "../data/blog.json";

const Blogs = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("../BlogDetail");
  };
  return (
    <Box sx={{ padding: 4 }}>
        <Typography
                                 variant="h3"
                                 sx={{
                                   marginBottom:"30px",
                                   fontWeight: 'bold',
                                   fontSize: { xs: '1.8rem', md: '2.5rem' },
                                   lineHeight: 1.2,
                                  
                                 }}
                               >
                                 <span style={{ fontWeight: 'normal' }}>Blogs and</span>{' '}
                                 <span
                                   style={{
                                     background:
                                       'linear-gradient(180deg, #718096 100%, rgba(13, 28, 159, 0) 100%)',
                                     WebkitBackgroundClip: 'text',
                                     WebkitTextFillColor: 'transparent',
                                     fontWeight: 'bold',
                                     
                                   }}
                                 >
                                  Insights
                                 </span>{' '}
                                 
                               </Typography>
            
      <Grid container spacing={3} justifyContent="center">
        {BlogData.BlogData.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog.id}>
            <Box
              onClick={handleCardClick}
              sx={{
                cursor: "pointer",
                "&:hover .card-media": {
                  transform: "scale(1.05)",
                  transition: "transform 0.3s ease-in-out",
                },
              }}
            >
              <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={blog.image}
                  alt={blog.title}
                  className="card-media"
                  sx={{
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ marginBottom: 1,marginLeft:"-170px",color:"#2A327D" }}
                  >
                    {blog.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ marginBottom: 2,marginLeft:"-60px" }}
                  >
                    {blog.heading}
                  </Typography>
                  <Typography
  variant="body2"
  sx={{
    WebkitLineClamp: 3,
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textAlign: "justify", // Ensures alignment on both left and right
    marginBottom: 2,
    paddingLeft: "10px", // Adds padding for consistent alignment
    paddingRight: "10px", // Optional for symmetry
  }}
>
  {blog.description}
</Typography>

<Box
  sx={{
    display: "flex",
    alignItems: "center",
    position: "relative", // Enables absolute positioning for text
  }}
>
  <CardMedia
    component="img"
    image={blog.pimage}
    alt="Author"
    sx={{
      width: 40,
      height: 40,
      borderRadius: "50%",
      position: "relative",
      zIndex: 1, // Ensures image stays on bottom
    }}
  />
  <Box
    sx={{
      position: "absolute",
      left: "50px", // Adjust according to your layout
      zIndex: 2, // Ensure text is above image
      display: "flex",
      flexDirection: "column",
    }}
  >
    <Typography variant="body2" color="text.primary" sx={{ fontWeight: "bold" }}>
    {blog.name}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {blog.date}
    </Typography>
  </Box>
</Box>

                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Blogs;
