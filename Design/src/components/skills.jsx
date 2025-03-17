import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion'; // Import Framer Motion for advanced animations

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Skills with image paths (replace with your actual image URLs or local paths)
  const skillsList = [
    { name: 'Java', image: 'Images/icons8-java-logo.svg' },
    { name: 'JavaScript', image: 'Images/icons8-javascript.svg' },
    { name: 'HTML', image: 'Images/icons8-html-5.svg' },
    { name: 'CSS', image: 'Images/icons8-css-logo.svg' },
    { name: 'MySQL', image: 'Images/icons8-mysql-logo-240.svg' },
    { name: 'React', image: 'Images/icons8-react-480.svg' },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Staggered animation for children
        delayChildren: 0.3, // Delay before children start
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 }, // Start off-screen and scaled down
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring', // Physics-based animation
        stiffness: 100,
        damping: 20,
        duration: 0.6,
      },
    },
  };

  return (
    <Box
      id="skills"
      sx={{
        height: '100vh',
        textAlign: 'center',
        pt: 5,
        pb: 5,
        height: 'auto',
        background: 'linear-gradient(135deg, #1E1E2F, rgba(37, 37, 66, 0.91))',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Animated Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            mt: 7,
            mb: 8,
            letterSpacing: 3,
            color: '#fff',
            textTransform: 'uppercase',
          }}
        >
          My Skills
        </Typography>
      </motion.div>

      {/* Animated Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 4,
            maxWidth: 1000,
            mx: 'auto',
            height: 'calc(100% - 120px)',
            alignContent: 'start',
          }}
        >
          {skillsList.map((skill, index) => (
            <motion.div
              key={skill.name}
              custom={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 2, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)' }} // Enhanced hover effect
              whileTap={{ scale: 0.95 }} // Slight shrink on tap
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 3,
                  m: 4,
                  border: '1px solid #1976d2',
                  borderRadius: '12px',
                  bgcolor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent background
                  backdropFilter: 'blur(5px)', // Glassmorphism
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                }}
              >
                <img
                  src={skill.image}
                  alt={`${skill.name} logo`}
                  style={{
                    width: '100px',
                    height: '100px',
                    marginBottom: '16px',
                  }}
                />
                <Typography variant="h6" color="#fff">
                  {skill.name}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </motion.div>
    </Box>
  );
};

export default Skills;