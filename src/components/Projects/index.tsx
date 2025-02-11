// import React, { useState, useEffect } from "react";
// import { Typography, Box, Button, Card, CardMedia, CardContent, Grid } from "@mui/material";
// import projectData from "../data/projects.json"; // Import the JSON file

// const Projects = () => {
//   const [selectedCategory, setSelectedCategory] = useState("MERN Stack");

//   // Categories with IDs mapping to the JSON data
//   const categories = {
//     "Web Applications": [1, 2],
//     "Mobile Applications": [3, 4],
//     "CMS": [5, 6],
//     "Graphic Works": [7, 8],
//     "Marketing Services": [9, 10],
//   };

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

//   // Extract ProjectData from JSON
//   const { ProjectData } = projectData;

//   // Filtered projects based on the selected category
//   const filteredProjects = selectedCategory
//     ? ProjectData.filter((project) => categories[selectedCategory]?.includes(project.id))
//     : [];

//   return (
//     <Box sx={{ padding: 2 }}>
//       {/* Header Section */}
//       <Box
//         sx={{
//           width: "100%",
//           textAlign: "center",
//           paddingTop: "20px",
//           paddingBottom: "20px",
//         }}
//       >
//         <Typography
//           variant="h4"
//           sx={{ fontWeight: "bold", marginBottom: 2 }}
//         >
//           Projects That Showcase Our Expertise
//         </Typography>

//         {/* Category Buttons */}
//         <Grid container spacing={2} justifyContent="center">
//           {Object.keys(categories).map((category) => (
//             <Grid item key={category}>
//               <Button
//                 variant="text"
//                 sx={{
//                   fontSize: { xs: "0.8rem", sm: "1rem" },
//                   textTransform: "none",
//                   padding: { xs: "6px 12px", sm: "8px 16px" },
//                   color: selectedCategory === category ? "#57007B" : "black",
//                   borderBottom: selectedCategory === category ? "2px solid #F76680" : "none",
//                 }}
//                 onClick={() => handleCategoryClick(category)}
//               >
//                 {category}
//               </Button>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

//       {/* Projects Grid */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           flexDirection: "column",
//           padding: 2,
//         }}
//       >
//         <Grid container spacing={4} justifyContent="center">
//           {filteredProjects.length > 0 ? (
//             filteredProjects.map((project) => (
//               <Grid item xs={12} sm={6} md={4} key={project.id}>
//                 <Card sx={{ boxShadow: 3, padding: 2 }}>
//                   <CardMedia
//                     component="img"
//                     sx={{
//                       width: "100%",
//                       height: "180px",
//                       objectFit: "cover",
//                       marginBottom: 2,
//                       borderRadius: 1,
//                       transition: "transform 0.3s ease-in-out",
//                       "&:hover": {
//                         transform: "scale(1.05)",
//                       },
//                     }}
//                     image={project.image}
//                     alt={project.heading}
//                     style={{ cursor: "pointer" }}
//                     onClick={() => window.open("https://netbots.tech/", "_blank")}
//                   />
//                   <CardContent>
                   
//                     <Typography variant="body2" sx={{ marginBottom: 2 }}>
//                       {project.description}
//                     </Typography>
//                     <Button
//                       variant="contained"
//                       sx={{
//                         backgroundColor: "#2A327D",
//                         "&:hover": { backgroundColor: "#1e255a" },
//                       }}
//                       onClick={() => window.open("https://netbots.tech/", "_blank")}
//                     >
//                       Explore Project
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))
//           ) : (
//             <Typography variant="h6" sx={{ color: "gray", marginTop: 4 }}>
//               No projects available for this category.
//             </Typography>
//           )}
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default Projects;
