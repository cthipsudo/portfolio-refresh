import "./App.css";

// Import Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectSection from "./components/ProjectSection";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="snap-y">
        <Hero />
        <ProjectSection />
        <Testimonials />
        <About />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
