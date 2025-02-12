import { useState } from "react";
import {
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Typography,
  Grid,
  Container,
  Box,
  Modal,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import {
  AccountBox,
  // Person,
  Phone,
  Email,
  LocationOn,
  Send,
  CheckCircle,
} from "@mui/icons-material";
import { SelectChangeEvent } from "@mui/material";


function AdmissionForm() {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    phone: "",
    email: "",
    address: "",
    gender: "",
    course: "",
    payment: "",
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false); // ✅ Added state for modal visibility

  const handleChange =
  (field: keyof typeof formData) =>
  (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const { name, phone, email } = formData;
    if (!name || !phone || !email) {
      alert("Please fill out all required fields marked with *");
      return;
    }

    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}>
        <Typography
          variant="h3"
          sx={{
            marginBottom: "30px",
            fontWeight: "bold",
            fontSize: { xs: "1.8rem", md: "2.5rem" },
            lineHeight: 1.2,
          }}
        >
          <span style={{ fontWeight: "normal" }}>Shape Your Future</span>{" "}
          <span
            style={{
              background: "linear-gradient(180deg,rgb(19, 59, 119) 20%, rgba(14, 36, 237, 0) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
            }}
          >
            with Netbots
          </span>{" "}
        </Typography>

        <Typography color="text.secondary">
          Take the first step toward mastering the skills that will shape your tech career. Fill out the form below and start your transformative journey with Netbots.
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <Box sx={{ marginBottom: 3 }}>
          <TextField
            fullWidth
            label="Name *"
            variant="outlined"
            required
            value={formData.name}
            onChange={handleChange("name")}
            InputProps={{
              startAdornment: <AccountBox sx={{ marginRight: 1 }} />,
            }}
            sx={{
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
            }}
          />
        </Box>

        {/* Phone No */}
        <Box sx={{ marginBottom: 3 }}>
          <TextField
            fullWidth
            label="Phone No *"
            variant="outlined"
            required
            value={formData.phone}
            onChange={handleChange("phone")}
            InputProps={{
              startAdornment: <Phone sx={{ marginRight: 1 }} />,
            }}
            sx={{
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
            }}
          />
        </Box>

        {/* Email */}
        <Box sx={{ marginBottom: 3 }}>
          <TextField
            fullWidth
            label="E-mail Address *"
            variant="outlined"
            required
            value={formData.email}
            onChange={handleChange("email")}
            InputProps={{
              startAdornment: <Email sx={{ marginRight: 1 }} />,
            }}
            sx={{
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
            }}
          />
        </Box>

{/* Gender */}
<Box sx={{ marginBottom: 3 }}>
          <FormControl fullWidth>
            <Typography variant="h6" sx={{ textAlign: "left", marginBottom: 1 }}>
              Gender
            </Typography>
            <RadioGroup row value={formData.gender} onChange={handleChange("gender")}>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>
        </Box>

        {/* Address */}
        <Box sx={{ marginBottom: 3 }}>
          <TextField
            fullWidth
            label="Address"
            variant="outlined"
            multiline
            rows={2}
            value={formData.address}
            onChange={handleChange("address")}
            InputProps={{
              startAdornment: <LocationOn sx={{ marginRight: 1 }} />,
            }}
            sx={{
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
            }}
          />
        </Box>

        {/* Courses */}
        <Box sx={{ marginBottom: 3 }}>
          <Typography variant="h6" sx={{ textAlign: "left", marginBottom: 1 }}>
            Courses You Want to Enroll *
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Choose Course</InputLabel>
                <Select
                  value={formData.course}
                  onChange={handleChange("course")}
                  label="Choose Course"
                >
                  <MenuItem value="mern">MERN Stack</MenuItem>
                  <MenuItem value="python">Python Programming</MenuItem>
                  <MenuItem value="flutter">Flutter App Development</MenuItem>
                  <MenuItem value="cpp">C++ Programming</MenuItem>
                  <MenuItem value="digital">Digital Marketing</MenuItem>
                  <MenuItem value="cit">CIT</MenuItem>
                  <MenuItem value="graphic">Graphic Designing</MenuItem>
                  <MenuItem value="uiux">UI/UX Designing</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
        {/* Submit Button */}
        <Box sx={{ textAlign: "center", marginTop: 3 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2A327D",
              color: "white",
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: "8px",
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor: "#4A4E7C",
              },
            }}
            type="submit"
          >
            <Send sx={{ marginRight: 1 }} />
            Submit Form
          </Button>
        </Box>
      </form>

      {/* Popup Modal */}
      <Modal open={isPopupOpen} onClose={closePopup} aria-labelledby="success-modal-title">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "#2A327D",
            color: "white",
            width: "400px",
            borderRadius: "12px",
            textAlign: "center",
            boxShadow: 24,
            p: 3,
          }}
        >
          <CheckCircle sx={{ fontSize: "60px", color: "white", mb: 2 }} />
          <Typography id="success-modal-title" variant="h6" sx={{ mb: 2 }}>
            Successfully Submitted
          </Typography>
          <Typography variant="body2" sx={{ mb: 3 }}>
            Your application has been successfully submitted.
            <br />
            We will review your details and contact you soon.
          </Typography>
          <Button
            variant="contained"
            onClick={closePopup}
            sx={{
              backgroundColor: "#fff",
              color: "#2A327D",
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#4A4E7C",
                color: "white",
              },
            }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </Container>
  );
}

export default AdmissionForm;
