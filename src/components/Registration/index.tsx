import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Box, Container } from '@mui/material'; 
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    Password: '',
    contactNo: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Perform additional actions like API calls
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };


  return (
    <Container maxWidth="sm" sx={{ padding: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Box 
        sx={{
          backgroundColor: '#fff', 
          padding: 4, 
          borderRadius: 2, 
          boxShadow: 5, // Adding a stronger box shadow for the entire form
          width: '100%',
          maxWidth: 400, // Making the form width smaller
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h5" color="primary" align="center" mb={3}>
          Registration
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
            required
          />
          <TextField
            label="Contact No"
            variant="outlined"
            fullWidth
            margin="normal"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            required
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#2A327D',
              padding: '10px',
              mt: 2,
              '&:hover': {
                backgroundColor: '#1e2469',
              },
            }}
          >
            Enroll Now
            <ArrowBackIcon sx={{ transform: "rotate(180deg)", marginLeft: "8px" }} />
          </Button>
        </form>

        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Typography variant="body2" color="textSecondary">
            Already have an account?{' '}
            <span
              onClick={handleLoginRedirect}
              style={{
                color: '#2A327D',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              Login
            </span>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default RegistrationForm;
