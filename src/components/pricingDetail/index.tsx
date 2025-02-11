import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
  Paper,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { styled } from "@mui/material/styles";
import { XCircle } from "lucide-react";
import pricingDetail from "../data/pricingDetail.json"; // Import JSON data

// Styled Components
const StyledButton = styled(Button)({
  backgroundColor: "#2A327D",
  color: "#fff",
  fontWeight: "bold",
  padding: "12px 24px",
  borderRadius: "8px",
  textTransform: "none",
  fontFamily: "Poppins, sans-serif",
  fontSize: "16px",
  "&:hover": {
    backgroundColor: "#1E255F",
  },
});

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 2),
  width: "100%", // Ensuring it takes full width
  overflowX: "hidden", // Preventing horizontal scroll
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(4, 2),
  },
}));

const PricingDetail = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Extract terms and conditions safely
  const termsAndConditions =
    pricingDetail?.pricingDetail?.find((item) => item.title === "Terms and Conditions") || {};

  return (
    <Box sx={{ py: { xs: 4, md: 6 }, px: { xs: 2, md: 4 }, width: "100%", overflowX: "hidden" }}>
      {pricingDetail?.pricingDetail?.map((section, index) => (
        <SectionWrapper key={section.id}>
          <Grid container spacing={4} alignItems="center" direction={isMobile ? "column" : index % 2 === 0 ? "row" : "row-reverse"}>
            {/* Left Side - Text */}
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ color: "#2A327D", fontWeight: "bold", textAlign: "left", fontFamily: "Poppins, sans-serif" }}>
                {section.title}
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: "bold", mt: 1, textAlign: "left", fontFamily: "Poppins, sans-serif" }}>
                {section.heading}
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, color: "#555", textAlign: "left", fontFamily: "Inter, sans-serif" }}>
                {section.description}
              </Typography>

              {/* List rendering function */}
              {['services', 'features', 'benefits'].map((key) =>
                section[key] ? (
                  <Box key={key} sx={{ mt: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "#2A327D", fontFamily: "Poppins, sans-serif" }}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}:
                    </Typography>
                    <List>
                      {section[key].map((item, index) => (
                        <ListItem key={index} sx={{ justifyContent: "flex-start" }}>
                          <ListItemIcon>
                            <CheckCircleIcon sx={{ color: "#2A327D" }} />
                          </ListItemIcon>
                          <ListItemText primary={item} sx={{ fontFamily: "Inter, sans-serif" }} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                ) : null
              )}

              {section.exclusions && (
                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#D32F2F", fontFamily: "Poppins, sans-serif" }}>
                    Exclusions:
                  </Typography>
                  <List>
                    {section.exclusions.map((item, index) => (
                      <ListItem key={index} sx={{ display: "flex", alignItems: "center" }}>
                        <ListItemIcon>
                          <XCircle size={22} color="red" />
                        </ListItemIcon>
                        <ListItemText primary={item} sx={{ fontFamily: "Inter, sans-serif" }} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}
            </Grid>

            {/* Right Side - Image */}
            <Grid item xs={12} md={6}>
              {section.title !== "Terms and Conditions" && (
                <Box component="img" src={section.image || "/placeholder.jpg"} alt={section.heading} sx={{ width: "100%", height: "auto", borderRadius: "8px", objectFit: "cover" }} />
              )}
            </Grid>
          </Grid>
        </SectionWrapper>
      ))}

      {/* Terms and Conditions Section */}
      {Object.keys(termsAndConditions).length > 0 && (
        <Paper elevation={0} sx={{ p: 4, backgroundColor: "transparent", textAlign: "left" }}>
          {termsAndConditions.description1 && (
            <Typography variant="body1" sx={{ mb: 2, color: "#555", fontFamily: "Inter, sans-serif" }}>
              {termsAndConditions.description1}
            </Typography>
          )}
          <List>
            {Object.entries(termsAndConditions)
              .filter(([key]) => key.startsWith("description") && key !== "description1" && key !== "description5")
              .map(([key, value], index) => (
                <ListItem key={index} sx={{ pl: 0 }}>
                  <ListItemIcon sx={{ minWidth: "32px" }}>
                    <CheckCircleIcon sx={{ color: "#2A327D" }} />
                  </ListItemIcon>
                  <ListItemText primary={value} />
                </ListItem>
              ))}
          </List>
          {termsAndConditions.description5 && (
            <Typography variant="body2" sx={{ mt: 2, color: "#777", fontFamily: "Inter, sans-serif" }}>
              {termsAndConditions.description5}
            </Typography>
          )}
        </Paper>
      )}
    </Box>
  );
};

export default PricingDetail;
