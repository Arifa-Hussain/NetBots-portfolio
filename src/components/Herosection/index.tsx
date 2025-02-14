import { Box, Grid, Typography, Button } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        // padding: { xs: 3, md: 5 },
        display: 'flex',
        justifyContent: 'flex-start', // Aligns content to the left
      }}
    >
      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="flex-start" // Aligns content to the left
        sx={{ maxWidth: '1200px' }}
      >
        {/* Left Banner */}
        <Grid item xs={12} md={6}>
          <Box
            className="leftbanner"
            sx={{
              padding: { xs: 2, md: 4 },
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start', // Left align content
              textAlign: 'left',
              gap: 2,
            }}
          >
            {/* Main Heading */}
            <Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '1.8rem', md: '2.5rem' },
                lineHeight: 1.2,
              }}
            >
              <span style={{ fontWeight: 'normal' }}>Great</span>{' '}
              <span
                style={{
                  background:
                  'linear-gradient(180deg,rgb(19, 59, 119) 20%, rgba(14, 36, 237, 0) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold',
                }}
              >
                Product
              </span>{' '}
              <span style={{ fontWeight: 'normal' }}>is</span>
            </Typography>

            {/* Subheading */}
            <Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '1.8rem', md: '2.5rem' },
                lineHeight: 1.2,
              }}
            >
              <span style={{ fontWeight: 'bold' }}>built by great</span>{' '}
              <span
                style={{
                  background:
                    'linear-gradient(180deg, #DE4396 0%, rgba(13, 28, 159, 0) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold',
                }}
              >
                teams
              </span>
            </Typography>

            {/* Paragraph */}
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
                maxWidth: '450px',
                marginTop: '8px',
              }}
            >
              We help build and manage a team of world-class developers to bring your vision to life.
            </Typography>

            {/* Button */}
            <Button
              variant="contained"
              size="large"
              sx={{
                textTransform: 'none',
                backgroundColor: '#2A327D',
                '&:hover': { backgroundColor: '#1f285e' },
              }}
              className="primary"
            >
              Let's get started
            </Button>
          </Box>
        </Grid>

        {/* Right Banner */}
        <Grid item xs={12} md={6}>
          <Box
            className="rightbanner"
            sx={{
              display: 'flex',
              alignItems: 'right',
              justifyContent: 'center', // Align image to the left
            }}
          >
            <Box
              component="img"
              src="/homeImages/main.png"
              alt="main image"
              sx={{
                width: { xs: '90%', sm: '70%', md: '60%' },
                height: 'auto',
                maxWidth: '400px',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};


export default HeroSection;
