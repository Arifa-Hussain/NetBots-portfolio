import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import { TextField, Button, Typography, Box, Container } from '@mui/material'; // MUI Components
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    Password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Perform additional actions like API calls
  };

  const handleLoginRedirect = () => {
    navigate('/register');
  };

  return (
    <Container maxWidth="sm" sx={{ padding: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Box 
        sx={{
          backgroundColor: '#fff', 
          padding: 4, 
          borderRadius: 2, 
          boxShadow: 5, // Adding box shadow for the form
          width: '100%',
          maxWidth: 400, // Smaller width for the form
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h5" color="primary" align="center" mb={3}>
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
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
            Login
            <ArrowBackIcon sx={{ transform: "rotate(180deg)", marginLeft: "8px" }} />
          </Button>
        </form>

        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Typography variant="body2" color="textSecondary">
            New to Platform?{' '}
            <span
              onClick={handleLoginRedirect}
              style={{
                color: '#2A327D',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              Create an account
            </span>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
