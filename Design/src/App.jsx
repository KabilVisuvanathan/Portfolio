import { useRef, useState } from 'react'
import './App.css'
import Header from "./components/header";
import Projects from "./components/projects";
import Skills from './components/skills';
import Home from './components/home';
import { colors, createTheme, ThemeProvider, Switch } from '@mui/material';
import Contact from './components/footer';

function App() {

  const theme = createTheme({
    typography: {
      fontFamily: 'Montserrat, san</ThemeProvider>s-serif', 

      h4: {
        fontFamily: 'Montserrat, san</ThemeProvider>s-serif', 
        fontWeight: 700,
        color : "white"
      },

      h6: {
        fontFamily: 'Montserrat, sans-serif', 
        fontWeight: 700,
      },
      body1: {
        fontFamily: 'Montserrat, san</ThemeProvider>s-serif', 
        fontWeight: 500,
        letterSpacing: 1
      },

      button: {
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 500,
        fontSize: 14,
        letterSpacing : 1,
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        
        <Header></Header>
        <Home></Home>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact> 
      </ThemeProvider>
    </>
  )
}

export default App
