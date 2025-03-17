import { Box, Avatar, Typography, Fade } from "@mui/material";
import { useEffect, useState } from "react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Box
      id="home"
      sx={{
        minHeight: { xs: "60vh", md: "100vh" }, // Full height on desktop, auto on mobile
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" }, // Image below text on mobile
        alignItems: "center",
        justifyContent: "center",
        textAlign: { xs: "center", md: "left" },
        background: "linear-gradient(135deg, #1E1E2F, rgba(37, 37, 66, 0.91))",
        color: "#fff",
        px: { xs: 3, md: 6 },
        py: { xs: 8, md: 0 }, // Added padding on mobile for spacing
        gap: { xs: 7, md: 6 }, // Space between text & image
      }}
    >
      {/* Text Section */}
      <Box
        sx={{
          flex: 1,
          maxWidth: { xs: "90%", md: "50%" },
          mb: { xs: 5, md: 0 }, // Adds more space below text on mobile
        }}
      >
        <Fade in={isVisible} timeout={1500}>
          <Typography sx={{ fontSize:{xs : "28px", md: "48px"}, fontWeight: "bold", mb: { xs: 4, md: 5 } }}>
            Kabila Rajan
          </Typography>
        </Fade>

        <Fade in={isVisible} timeout={2000}>
          <Typography sx={{ mb: 4, fontSize: { xs: 18, md: 24 }, letterSpacing: 1, fontWeight: 400 }}>
            I'm currently training myself in{" "}
            <span style={{ fontWeight: "bold", fontSize: 26, color: "white" }}>
              Backend Development
            </span>.
          </Typography>
        </Fade>

        <Fade in={isVisible} timeout={2500}>
          <Typography sx={{ fontSize: { xs: 18, md: 22 }, mb: 3, fontWeight: 400 }}>
            An optimistic person who loves learning across various domains.
          </Typography>
        </Fade>
      </Box>

      {/* Avatar Section */}
      <Fade in={isVisible} timeout={2000}>
        <Avatar
          src="Images/user-original.png"
          sx={{
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.92)",
            width: { xs: 170, sm: 240, md: 460 },
            height: { xs: 170, sm: 240, md: 460 },
            border: "5px solid rgba(0, 0, 0, 0.82)",
            mt: { xs: 3, md: 0 }, // Adds space between header and avatar on mobile
          }}
        />
      </Fade>
    </Box>
  );
};

export default Home;
