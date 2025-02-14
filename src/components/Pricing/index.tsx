import { Box, Typography, Button, Grid, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import PricingData from '../data/Pricing.json';
import Carousel from 'react-material-ui-carousel';
import { useNavigate } from 'react-router-dom';
import React from 'react';

// Styled Card Component
const StyledCard = styled('div')(({ theme }) => ({
  background: theme.palette.background.paper,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: 12,
  padding: theme.spacing(3),
  margin: theme.spacing(2, 1),
  textAlign: 'center',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
  },
}));

// Styled Button Component
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#2A327D',
  color: '#fff',
  fontWeight: 'bold',
  padding: theme.spacing(1.5, 2),
  width: '100%',
  borderRadius: 8,
  '&:hover': {
    backgroundColor: '#1E255F',
  },
}));

interface PricingCardProps {
  id?: number;
  title: string;
  price: number;
  features: string[];
  actionText: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ id, title, price, features, actionText }) => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate(`/pricing/${id}`, { state: { title, price, features } });
  };

  return (
    <StyledCard>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>{title}</Typography>
      <Typography variant="h4" sx={{ color: '#2A327D', fontWeight: 'bold', mb: 2 }}>${price}</Typography>
      <Box sx={{ textAlign: 'left', mt: 2 }}>
        {features.map((feature, index) => (
          <Typography
            key={index}
            variant="body2"
            sx={{ color: feature.includes('×') ? 'error.main' : 'success.main', mb: 1 }}
          >
            {feature.includes('×') ? '✖' : '✔'} {feature}
          </Typography>
        ))}
      </Box>
      <Box sx={{ mt: 2 }}>
        <StyledButton onClick={handleGetStarted}>{actionText}</StyledButton>
      </Box>
    </StyledCard>
  );
};

const Pricing = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  // Determine the number of items per slide based on screen size
  const itemsPerSlide = isSmallScreen ? 1 : isMediumScreen ? 2 : 3;

  // Group Pricing Plans
  const groupedPlans = [];
  for (let i = 0; i < PricingData.PricingData.length; i += itemsPerSlide) {
    groupedPlans.push(PricingData.PricingData.slice(i, i + itemsPerSlide));
  }

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, textAlign: 'center' }}>
      <Typography
        variant="h3"
        sx={{
          marginBottom: "30px",
          fontWeight: 'bold',
          fontSize: { xs: '1.8rem', md: '2.5rem' },
          lineHeight: 1.2,
        }}
      >
        <span style={{ fontWeight: 'normal' }}>Pricing &</span>{' '}
        <span
          style={{
            background:
              'linear-gradient(180deg,rgb(19, 59, 119) 20%, rgba(14, 36, 237, 0) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
          }}
        >
          Plans
        </span>
      </Typography>
      <Carousel animation="slide" duration={500} navButtonsAlwaysInvisible={true}>
        {groupedPlans.map((group, index) => (
          <Box key={index}>
            <Grid container spacing={2} justifyContent="center">
              {group.map((plan) => (
                <Grid item xs={12} sm={6} md={4} key={Number(plan.id)}>
                  <PricingCard
                    id={Number(plan.id)}
                    title={plan.title}
                    price={plan.price}
                    features={plan.features}
                    actionText={plan.actionText}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Pricing;
