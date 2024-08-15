
import './App.css'
import About from './component/About'
import Contact from './component/Contact'

import Login from './component/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import Service from './component/Service'
import Header from './component/Header'
import Footer from './component/Footer'
import {ThemeProvider} from "styled-components"
import { GlobalStyle } from './GlobalStyle'
import Home from './component/Home'

function App() {
  const theme={
    colors:{
      primary: "#D9B7A1",            // Light Beige Brown (warm and inviting)
    primarydark: "#B77B6C",        // Medium Brown (darker shade of primary)
    heading: "#3E2723",           // Dark Brown (high contrast for readability)
    text: "#5D4037",              // Medium Brown (easy on the eyes for text)
    white: "#FFFFFF",             // Pure White (for contrast)
    black: "#000000",             // True Black (for strong contrasts)
    helper: "#8D6E63",            // Muted Brown (calm and complementary)
    bg: "#3E2712",                // Darker Brown Background (deep and fitting with the theme)
    footer_bg: "#3E2C1A",         // Slightly Lighter Dark Brown Footer (subtle contrast with the background)
    btn: "#A67B5B",               // Warm Caramel (stands out for buttons)
    border: "#BCAAA4",            // Light Brown (subtle borders)
    hr: "#BCAAA4",                // Light Brown (for horizontal rules)
    gradient: "linear-gradient(90deg, #D7CCC8 0%, #A1887F 100%)", // Brown Gradient
    shadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px", // Soft Shadow
    shadowSupport: "rgba(0, 0, 0, 0.2) 0px 6px 12px", // Deeper Shadow
    },
    media:{mobile:"768px", tab:"998px"}
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      
    <BrowserRouter>
    <Header/>
    
    <Routes>
    <Route path='/' element={<Home/>} />
    {/* <Route path="/service" element={<Service/>}/> */}
      
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route  path="/Login" element={<Login/>}/>
      
      </Routes>
      <Footer/>
    </BrowserRouter>
   </ThemeProvider>
  )
}

export default App
