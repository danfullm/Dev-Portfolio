import logo from './logo.svg';
import './App.css';

import HeroContainer from './components/hero-container';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Links will go here
      </header>
      <div className="App-body">
        <HeroContainer />

        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
