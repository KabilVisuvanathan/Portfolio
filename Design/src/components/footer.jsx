import React from 'react';
import { Box, Typography, Link, IconButton, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion'; // For animations
import { Phone, Email, Code, Person } from '@mui/icons-material';

// Animation variants for staggered entrance
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        background: 'linear-gradient(135deg, #1E1E2F, #2A2A4D)', // Darker gradient for depth
        pt:7,
        pb: 7,
        py: 6, // Increased padding for better spacing
        textAlign: 'center',
        color: '#fff',
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        position: 'relative',
        overflow: 'hidden', // For potential background effects
        height: 'auto',
      }}
    >
      {/* Subtle background overlay for depth (optional) */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.05), transparent)',
          zIndex: 0,
        }}
      />

      <Typography
        variant="h4"
        sx={{
          mb: 7,
          fontWeight: 'bold',
          position: 'relative',
          zIndex: 1,
          textTransform: 'uppercase',
          letterSpacing: 1.5,
        }}
      >
        Get in Touch
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 4,
          mx: 'auto',
        }}
      >
        {[
          {
            icon: <Phone />,
            label: '7904434344',
            href: 'tel:+1234567890',
          },
          {
            icon: <Email />,
            label: 'kabil.v@zohocorp.com',
            href: "mailto:kabil.v@zohocorp.com",
          },
          {
            icon: <Person />,
            label: 'ZSTTK376/24',
            href: 'https://one.zoho.com/zohoone/zohocorp/home/cxapp/people/zpeoplehr/zp#home/user/profile-id:2803000812827156',
            target: '_blank',
          },
          {
            icon: <Code />,
            label: 'Kabil_Visuvanathan',
            href: 'https://www.codewars.com/users/Kabil_Visuvanathan',
            target: '_blank',
          },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            whileHover={{ scale: 1.10, transition: { duration: 0.3 }  }} // Hover scale effect
          >
            <Card
              sx={{
                width: 300,
                height:80,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 2,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                background: 'rgba(255, 255, 255, 0.1)', // Semi-transparent card
                backdropFilter: 'blur(5px)', // Glassmorphism effect
                borderRadius: 2,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.3)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, py: 2 }}>
                <a href={item.href} target='_blank' ><IconButton
                  sx={{
                    color: '#fff',
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.3)' },
                  }}
                >
                  {item.icon}
                </IconButton></a>
                <Typography variant="body1">
                  <Link
                    href={item.href}
                    color="white"
                    underline="none"
                    target={item.target}
                    sx={{ fontWeight: 500 }}
                  >
                    {item.label}
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}

export default Contact;