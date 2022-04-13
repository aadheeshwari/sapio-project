import React,{useState,useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Component/Home"
import Liked from "./Component/Liked"
import Show from "./Show"
import {Route,Routes} from 'react-router-dom'


function App() {

  return (
    <main>    
      <Show/>
      <Routes>
      <Route index element={<Home/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Liked" element={<Liked/>}/>
    </Routes>
    </main>
  );
}


export default App;