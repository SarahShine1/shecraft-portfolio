import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import ServicesSection from "./components/ServicesSection";
import Technologies from "./components/Technologies";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Team from "./components/Team";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-bg-main text-text-main min-h-screen transition-colors duration-500">
      <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      <Home />
      <ServicesSection />
      <Technologies />
      <Team />
      <ContactSection />
      <Footer />


      <ToastContainer position="top-right" autoClose={4000} />



      
    </div>
  );
}

export default App;

