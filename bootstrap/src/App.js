import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (<>
      <Navbar />
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/contact' element={<Contact/>} />
            <Route exact path='/service' element={<Service/>} />
            <Route path='*' element={<div>Error Page</div>} />
          </Routes>
        <Footer />

    </>);
}

export default App;
