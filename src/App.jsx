import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Flare from "./pages/Flare";
import Foundation from "./pages/Foundation";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='home' />} />
        <Route path='home' element={<Home />} />
        <Route path='flare' element={<Flare />} />
        <Route path='foundation' element={<Foundation />} />
        <Route path='contactus' element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
