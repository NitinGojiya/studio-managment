import './App.css';
import Navbar from './Controlller/Navbar';
import Home from './Controlller/Home';
import Footer from './Controlller/Footer';
import { Routes, Route } from "react-router-dom"
import Signup from './Controlller/Signup';

import Studiopage from './Controlller/Studiopage';
import Website from './Controlller/Website';
import Test from './Controlller/Test';
import { useState } from 'react';


function App() {
  const [login,setLogin]=useState(false);
  
  return (
    <>
      <Navbar login={login} setLogin={setLogin}/>
   
      
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/signup" element={ <Signup/>} />
        <Route path="/studio" element={ <Studiopage/>} />
        <Route path="/studioweb" element={ <Website/>} />
        <Route path="/test" element={ <Test/>} />
        
      </Routes>
      <Footer />
    </>


  );
}

export default App;
