import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Sustain from "./pages/Sustain";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from './pages/PrivacyPolicy';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='home' />} />
        <Route path='home' element={<Home />} />
        <Route path='create' element={<Create />} />
        <Route path='sustain' element={<Sustain />} />
        <Route path='contactus' element={<ContactUs />} />
        <Route path='privacy-policy' element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
