import './App.css';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Design from './pages/Design/Design';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Pricing from './pages/Pricing/Pricing';
import Services from './pages/Services/Services';
import Skills from './pages/Skills/Skills';
import Stats from './pages/Stats/Stats';
import VideoPage from './pages/Video/VideoPage';
import ScrollButton from './UI/scroll-btn/ScrollButton';


function App() {



  return (
    <>
      <ScrollButton />
      <Home />
      <Services />
      <Design />
      <Portfolio />
      <VideoPage />
      <About />
      <Stats />
      <Skills />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
