import { useState } from "react"
import { Typography, Box, Card, CardContent, CardMedia, Button } from "@mui/material"
import { motion, AnimatePresence } from "framer-motion"

// Updated projects array with links
const projects = [
  { title: "Git Grove", language: "Java", image: "Project/Java_Gitgrove.png", link: "https://github.com/rajkumarkvr/GitGrove_backend" },
  { title: "Data Structure", language: "Java", image: "Project/Java_DS.png", link: "https://github.com/KabilVisuvanathan/LinkedSet_DS" },
  { title: "Case Management", language: "Java", image: "Project/Java_CaseManagement.jpg", link: "https://github.com/KabilVisuvanathan/Crime_Management" },
  {title: "Invoice Genertor", language: "JavaScript", image: "Project/JS_Invoice.png", link: "https://kabilv-9487-8443.zcodeusers.in/JS_Final_Project/signUp.html" },
  { title: "Stone paper scissor", language: "JavaScript", image: "Project/JS_RPS.jpg", link: "https://kabilv-9487-8443.zcodeusers.in/js-assignment023/" },
  { title: "Calculator", language: "JavaScript", image: "Project/JS_Calculator.png", link: "https://kabilv-9487-8443.zcodeusers.in/js_Calculator/" },
  { title: "Range Rover", language: "HTML & CSS", image: "Project/HTML_RangeRover.webp", link: "https://kabilv-9487-8443.zcodeusers.in/Final_project/project.html" },
  { title: "Vortex page", language: "HTML & CSS", image: "Project/HTML_Vortex.jpeg", link: "https://kabilv-9487-8443.zcodeusers.in/Assignment-015/vortexpage.html" },
  { title: "Cascade page", language: "HTML & CSS", image: "Project/HTML_Cascade.jpeg", link: "https://kabilv-9487-8443.zcodeusers.in/Assignment-018/cascade.html" },
  { title: "Typing Master", language: "Scratch", image: "Project/Scract_typingMaster.png", link: "https://scratch.mit.edu/projects/1041092581" },
  { title: "Bottle Shooter", language: "Scratch", image: "Project/Scratch_bottleShooter.jpg", link: "https://scratch.mit.edu/projects/1040187858" },
  { title: "Name Animator", language: "Scratch", image: "Project/Scratch_nameAnimation.png", link: "https://scratch.mit.edu/projects/1038309176" },
]

function Projects() {
  const [selectedLanguage, setSelectedLanguage] = useState("")
  const [hoveredCard, setHoveredCard] = useState(null)

  const languages = ["All", ...new Set(projects.map((p) => p.language))]
  const filteredProjects = selectedLanguage ? projects.filter((p) => p.language === selectedLanguage) : projects

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  // Animation variants for the title and buttons container
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  }

  // Animation variants for buttons
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.5, type: "spring", stiffness: 120 },
    }),
    hover: { scale: 1.1, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)" },
    tap: { scale: 0.95 },
  }

  // Update the card variants for smoother hover effect
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 70,
        damping: 15,
      },
    }),
    exit: {
      opacity: 0,
      scale: 0.6,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.03,
      y: -5, // Add a slight upward movement on hover
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    tap: { scale: 0.98 },
  }

  // Animation for expanding card content
  const contentVariants = {
    collapsed: {
      height: "auto",
      transition: {
        duration: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    expanded: {
      height: "auto",
      transition: {
        duration: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  }

  // Update the button container variants for smoother transitions
  const buttonContainerVariants = {
    hidden: {
      opacity: 0,
      y: 10,
      height: 0,
      marginTop: 0,
      transition: {
        duration: 0.2,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      marginTop: 16,
      transition: {
        duration: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  }

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <Box
        id="projects"
        sx={{
          minHeight: "100vh",
          textAlign: "center",
          pt: 7,
          pb: 7,
          background: "linear-gradient(135deg, #1E1E2F, rgba(37, 37, 66, 0.91))",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle background overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.05), transparent)",
            zIndex: 0,
          }}
        />

        {/* Title and Filter Buttons */}
        <motion.div variants={titleVariants}>
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              mb: 6,
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: 1.5,
              position: "relative",
              zIndex: 1,
            }}
          >
            Projects
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 4,
              mb: 6,
              position: "relative",
              zIndex: 1,
              flexWrap: "wrap",
              px: 2,
            }}
          >
            {languages.map((language, index) => (
              <motion.div
                key={language}
                custom={index}
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  variant={selectedLanguage === language ? "contained" : "outlined"}
                  onClick={() => setSelectedLanguage(language === "All" ? "" : language)}
                  sx={{
                    color: "#fff",
                    borderColor: "#fff",
                    bgcolor: selectedLanguage === language ? "#1976d2" : "transparent",
                    "&:hover": {
                      bgcolor: selectedLanguage === language ? "#1565c0" : "rgba(255, 255, 255, 0.1)",
                      borderColor: "#fff",
                    },
                    textTransform: "none",
                    px: 3,
                    ml:2,
                    borderRadius: 2,
                  }}
                >
                  {language}
                </Button>
              </motion.div>
            ))}
          </Box>
        </motion.div>

        {/* Projects Grid */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            flexGrow: 1,
            paddingLeft: 3,
            paddingRight: 3,
            // alignContent: "space-between",
            // position: "relative",
            // zIndex: 1,
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedLanguage || "all"}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ duration: 0.2 }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "1rem",
                width: "100%",
                alignItems: "flex-start", // Align items at the top
              }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover="hover"
                  whileTap="tap"
                  onHoverStart={() => setHoveredCard(project.title)}
                  onHoverEnd={() => setHoveredCard(null)}
                  style={{
                    width: 350,
                    position: "relative",
                    margin: "8px",
                    // Remove the fixed height approach and let the card size itself naturally
                    transition: "transform 0.1s ease, box-shadow 0.3s ease",
                  }}
                >
                  <Card
                    sx={{
                      bgcolor: "ButtonShadow",
                      borderRadius: "12px",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                      transition: "all 0.3s ease",
                      position: "relative",
                      overflow: "hidden",
                      height: "100%",
                      display: "flex",
                      m:3,
                      // paddingTop: 3,
                      flexDirection: "column",
                      // Add a min-height to ensure consistent sizing
                      minHeight: "320px",
                    }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        position: "relative",
                        height: 220,
                        backgroundImage: `url(${project.image || "https://via.placeholder.com/350x200"})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          height: "10%", // Controls how much of the image blends
                          background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 100%)",
                        },
                      }}
                    />

                    <motion.div
                      variants={contentVariants}
                      initial="collapsed"
                      animate={hoveredCard === project.title ? "expanded" : "collapsed"}
                    >
                      <CardContent
                        sx={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          pb: 2,
                          transition: "all 0.3s ease",
                          overflow: "hidden",
                          // Add flex-grow to ensure content fills the space
                          flexGrow: 1,
                          // Add consistent padding
                          pt: 2,
                          px: 2,
                        }}
                      >
                        <Box sx={{ mb: 2 }}>
                          <Typography variant="h5" sx={{ color: "#333" }}>
                            {project.title}
                          </Typography>
                          <Typography variant="body1" color="textSecondary">
                            {project.language}
                          </Typography>
                        </Box>

                        <Box sx={{ flexGrow: 1 }} />

                        {/* Button container with animation */}
                        <motion.div
                          variants={buttonContainerVariants}
                          initial="hidden"
                          animate={hoveredCard === project.title ? "visible" : "hidden"}
                        >
                          <Button
                            variant="contained"
                            color="primary"
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              width: "100%",
                              bgcolor: "#1976d2",
                              "&:hover": { bgcolor: "#1565c0" },
                            }}
                          >
                            Visit Project
                          </Button>
                        </motion.div>
                      </CardContent>
                    </motion.div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </Box>
      </Box>
    </motion.div>
  )
}

export default Projects

