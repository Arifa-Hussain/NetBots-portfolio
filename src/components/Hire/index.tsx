import { 
  Container, Grid, Typography, Card, CardContent, TextField, 
  Button, Dialog, DialogTitle, DialogContent, DialogActions, Box, MenuItem, InputLabel, FormControl
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import jobs from "../data/hire.json";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Select } from "@mui/material"; 
import { useState } from "react";


const Hire = () => {
  const [openDialog, setOpenDialog] = useState(false); // State for success popup

  // Form Validation Schema
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required").min(3, "At least 3 characters"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10,15}$/, "Invalid phone number")
      .required("Phone number is required")
      .required("Position is required"),
      
    resume: Yup.mixed().required("Resume is required"),
    coverLetter: Yup.mixed().required("Cover Letter is required"),
  });

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      designation:"",
      resume: null,
    coverLetter: null, 
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Form Submitted:", values);
      setOpenDialog(true); // Show success popup
      resetForm();
    },
  });

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={4} alignItems="flex-start">
        {/* Career Opportunities (Left Side) */}
        <Grid item xs={12} md={6}>
        <Typography
                                             variant="h3"
                                             sx={{
                                               marginBottom:"30px",
                                               fontWeight: 'bold',
                                               fontSize: { xs: '1.8rem', md: '2.5rem' },
                                               lineHeight: 1.2,
                                              
                                             }}
                                           >
                                             <span style={{ fontWeight: 'normal' }}>Career </span>{' '}
                                             <span
                                               style={{
                                                 background:
                                                   'linear-gradient(180deg,rgb(19, 59, 119) 20%, rgba(14, 36, 237, 0) 100%)',
                                                 WebkitBackgroundClip: 'text',
                                                 WebkitTextFillColor: 'transparent',
                                                 fontWeight: 'bold',
                                                 
                                               }}
                                             >
                                              Oppurtunities
                                             </span>{' '}
                                             
                                           </Typography>
          {jobs.jobs.map((job, index) => (
            <Card
              key={index}
              sx={{
                mb: 3,
                p: 2,
                boxShadow: 3,
                transition: "0.3s",
                "&:hover": { boxShadow: 6, transform: "scale(1.02)" },
              }}
            >
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "#333" }}>
                  {job.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.6 }}>
                  {job.description}
                </Typography>
                <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold", color: "#444" }}>
                  Responsibilities:
                </Typography>
                <ul style={{ marginTop: "8px", paddingLeft: "0px", listStyle: "none" }}>
                  {job.responsibilities.map((resp, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "#666",
                        marginBottom: "6px",
                      }}
                    >
                      <span style={{ fontSize: "18px", fontWeight: "bold", color: "#1976D2" }}>•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </Grid>

        {/* Apply Now Form (Right Side) */}
        <Grid item xs={12} md={6}>
        <Typography
                                             variant="h3"
                                             sx={{
                                               marginBottom:"30px",
                                               fontWeight: 'bold',
                                               fontSize: { xs: '1.8rem', md: '2.5rem' },
                                               lineHeight: 1.2,
                                              
                                             }}
                                           >
                                             <span style={{ fontWeight: 'normal' }}>Apply </span>{' '}
                                             <span
                                               style={{
                                                 background:
                                                   'linear-gradient(180deg,rgb(19, 59, 119) 20%, rgba(14, 36, 237, 0) 100%)',
                                                 WebkitBackgroundClip: 'text',
                                                 WebkitTextFillColor: 'transparent',
                                                 fontWeight: 'bold',
                                                 
                                               }}
                                             >
                                              Now
                                             </span>{' '}
                                             
                                           </Typography>
          <Card sx={{ p: 3, boxShadow: 3 }}>
            <CardContent>
              <form onSubmit={formik.handleSubmit}>
                {/* Full Name */}
                <TextField
                  fullWidth
                  label="Full Name"
                  name="fullName"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                  helperText={formik.touched.fullName && formik.errors.fullName}
                  margin="normal"
                  variant="outlined"
                />

                {/* Email */}
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  margin="normal"
                  variant="outlined"
                />

                {/* Phone Number */}
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  type="text"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                  margin="normal"
                  variant="outlined"
                />
 <Box sx={{ marginBottom: 3 }}>
 
 <Grid container spacing={2}>
  <Grid item xs={12}>
    <FormControl fullWidth>
      <InputLabel>Select Position</InputLabel>
      <Select
        value={formik.values.designation}
        onChange={formik.handleChange} // Ensure it's part of Formik
        name="designation" // Make sure to include name for Formik tracking
        label="Choose Course"
        sx={{ textAlign: "left", "& .MuiSelect-select": { textAlign: "left" } }} // Align text left
      >
        <MenuItem value="mern_dev">Full Stack Developer</MenuItem>
        <MenuItem value="graphic_designer">Graphic Designer</MenuItem>
      </Select>
    </FormControl>
  </Grid>
</Grid>

</Box>

                {/* Resume Upload */}
                <Box
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "8px 12px",
    marginTop: "15px",
  }}
>
  <Typography
    variant="body1"
    sx={{
      marginRight: "10px", // space between label and input
      flexShrink: 0, // Prevent label from shrinking
    }}
  >
    Upload Your Resume
  </Typography>

  <input
    type="file"
    name="resume"
    accept=".pdf"
    onChange={(event) => {
      const files = event.target.files;
      if (files && files.length > 0) {
        formik.setFieldValue("resume", files[0]);
      }
    }}
    onBlur={formik.handleBlur}
    style={{
      flex: 1, // Fill remaining space
      border: "none",
      outline: "none",
      padding: "5px",
      fontSize: "14px",
      display: "block",
    }}
  />
</Box>

{formik.touched.resume && formik.errors.resume && (
  <Typography color="error" sx={{ fontSize: "14px", mt: 1 }}>
    {formik.errors.resume}
  </Typography>
)}



<Box
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "8px 12px",
    marginTop: "15px",
  }}
>
  <Typography
    variant="body1"
    sx={{
      marginRight: "10px", // space between label and input
      flexShrink: 0, // Prevent label from shrinking
    }}
  >
    Upload Your Cover Letter
  </Typography>

  <input
    type="file"
    name="coverLetter"
    accept=".pdf"
    onChange={(event) => {
      const files = event.target.files;
      if (files && files.length > 0) {
        formik.setFieldValue("coverLetter", files[0]);
      }
    }}
    onBlur={formik.handleBlur}
    style={{
      flex: 1, // Fill remaining space
      border: "none",
      outline: "none",
      padding: "5px",
      fontSize: "14px",
      display: "block",
    }}
  />
</Box>

{formik.touched.coverLetter && formik.errors.coverLetter && (
  <Typography color="error" sx={{ fontSize: "14px", mt: 1 }}>
    {formik.errors.coverLetter}
  </Typography>
)}


                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ backgroundColor: "#2A327D", "&:hover": { backgroundColor: "#1F275E" }, mt: 2 }}
                >
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Success Popup */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ textAlign: "center", mt: 2 }}>
          <CheckCircleOutlineIcon sx={{ fontSize: 50, color: "green" }} />
        </DialogTitle>
        <DialogContent>
          <Typography variant="h5" sx={{ textAlign: "center", fontWeight: "bold" }}>
            Success!
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center", mt: 1, color: "#555" }}>
            Your application has been submitted successfully.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", mb: 2 }}>
          <Button variant="contained" onClick={() => setOpenDialog(false)} sx={{ backgroundColor: "#2A327D" }}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Hire;
