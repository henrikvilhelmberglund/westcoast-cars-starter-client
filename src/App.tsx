import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/site.css';
import './assets/css/utilities.css';
import './components/vehicle/vehicle.css';
import VehiclesPage from './pages/Vehicles';
import Navbar from './components/ui/Navbar';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/vehicles' element={<VehiclesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
