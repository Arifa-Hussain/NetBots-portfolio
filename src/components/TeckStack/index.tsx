import React, { useState } from "react";
import { Grid, Button, Box, Typography } from "@mui/material";

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState("Backend");

  const categories = {
    Backend: [
      { name: "Node.js", icon: "devicon-nodejs-plain" },
      { name: "Express.js", icon: "devicon-express-original" },
      { name: "Django", icon: "devicon-django-plain" },
      { name: "PHP", icon: "devicon-php-plain" },
      { name: "MySQL", icon: "devicon-mysql-plain" },
      { name: "Java", icon: "devicon-java-plain" },
      { name: ".NET", icon: "devicon-dotnetcore-plain" },
      { name: "Python", icon: "devicon-python-plain" },
      { name: "Ruby on Rails", icon: "devicon-rails-plain" },
    ],
    Frontend: [
      { name: "HTML", icon: "devicon-html5-plain" },
      { name: "CSS", icon: "devicon-css3-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "React.js", icon: "devicon-react-original" },
      { name: "Vue.js", icon: "devicon-vuejs-plain" },
    ],
    Database: [
      { name: "MySQL", icon: "devicon-mysql-plain" },
      { name: "MariaDB", icon: "devicon-mariadb-plain" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
    ],
    CMS: [
      { name: "WordPress", icon: "devicon-wordpress-plain" },
      { name: "Drupal", icon: "devicon-drupal-plain" },
      // { name: "Joomla", icon: "devicon-joomla-plain" }, // Joomla exists
    ],
    "Cloud Testing": [
    
      { name: "TestSigma", icon: "devicon-flask-original" }, // Flask as a test tube
    ],
    DevOps: [
      { name: "Git", icon: "devicon-git-plain" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "GitLab", icon: "devicon-gitlab-plain" },
     
    ],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredIcons = categories[selectedCategory] || [];

  return (
    <Box sx={{ padding: "20px", textAlign: "center" }}>
      {/* Category Buttons */}
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {Object.keys(categories).map((category) => (
          <Grid item key={category}>
            <Button
              variant="text"
              sx={{
                fontSize: { xs: "0.8rem", sm: "1rem" },
                textTransform: "none",
                padding: { xs: "6px 12px", sm: "8px 16px" },
                color: selectedCategory === category ? "black" : "gray",
                fontWeight: selectedCategory === category ? "bold" : "normal",
                background: selectedCategory === category
                  ? "linear-gradient(225deg, #F76680 0%, #57007B 100%)"
                  : "none",
                WebkitBackgroundClip: selectedCategory === category ? "text" : "unset",
                WebkitTextFillColor: selectedCategory === category ? "transparent" : "unset",
              }}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Button>
          </Grid>
        ))}
      </Grid>

      {/* Display Icons (5 per row) */}
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ marginTop: 3, maxWidth: "800px", marginX: "auto" }}
      >
        {filteredIcons.map((item, index) => (
          <Grid item xs={6} sm={4} md={2.4} key={index}>
            <Box sx={{ textAlign: "center", padding: 2 }}>
              <i className={`${item.icon}`} style={{ fontSize: "50px", color: "#333" }}></i>
              <Typography sx={{ marginTop: 1, fontSize: "14px" }}>{item.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TechStack;
