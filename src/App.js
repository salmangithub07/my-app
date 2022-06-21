import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Frontpage from './Frontpage';
import About from './pages/About';
import Contact from './pages/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Teamp from './pages/TeamP';
import Blog from './pages/Blog';
import Errorpage from './pages/Errorpage';
import Blogdetail from './pages/Blogdetail';

function App() {
  return (
    <>    
    <Navigation />
    <Routes>
        <Route exact path = "/" element= {<Frontpage />} ></Route>
        <Route exact path = "/about" element ={<About />}></Route>
        <Route exact path = "/services" element ={<Services />}></Route>
        <Route exact path = "/portfolio" element ={<Portfolio />}></Route>
        <Route exact path = "/team" element ={<Teamp />}></Route>
        <Route exact path = "/blog" element ={<Blog />}></Route>
        <Route exact path = "/contact" element ={<Contact />}></Route>
        <Route exact path = "/blog-details" element ={<Blogdetail />}></Route>
        <Route path = "*" element ={<Errorpage />}></Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
