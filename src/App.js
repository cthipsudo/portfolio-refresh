import './App.css';

// Import Components
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectSection from './components/ProjectSection';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <ProjectSection />
      <About />
    </div>
  );
}

export default App;
