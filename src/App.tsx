
import { Home } from './pages/Home';
import { Features } from './pages/Features';
import { Timeline } from './pages/Timeline';
import { Testimonial } from './pages/Testimonial';
import  Navbar  from './components/layout/Navbar'
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/layout/Footer';
import {Route, Routes} from "react-router-dom"


function App() {

  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Features" element={<Features />}  />
    <Route path="/Timeline" element={<Timeline />} />
    <Route path="/Testimonial" element={<Testimonial />} />
    <Route path="*" element={<NotFoundPage />} />
    </Routes>   
    <Footer/>
    </>
  );
}

export default App;
