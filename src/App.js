import logo from './logo.svg';
import ReactGA from 'react-ga';

import './App.css';

import HeroContainer from './components/hero-container';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';

const trackingId = "281370654"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.set({
  // any data that is relevant to the user session
  // that you would like to track with google analytics
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="nav-bar"><h1>DF | Developer</h1></div>
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
