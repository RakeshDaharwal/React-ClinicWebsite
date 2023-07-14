import React from 'react';
import Header from "./Header/Header";
import Home from "./Home";
import About from './About/About';
import Contact from './Contact/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from "./Error/ErrorPage";
import Service from './Service/Service';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
      </>
      )
}
      export default App;
