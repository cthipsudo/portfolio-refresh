import './App.css';

// Import Components
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectSection from './components/ProjectSection';
import About from './components/About';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <ProjectSection />
      <About />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
