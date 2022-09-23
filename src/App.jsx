import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Contacto from "./views/Contacto";
import NotFound from "./views/NotFound";

function App() {

  const localpath = window.location.pathname.split('/')[1];
  
  return (
    <>
      <BrowserRouter>
        <Navbar basePath={localpath} />
          <Routes>
            <Route path={`${localpath}/`} element={<Home />}/>
            <Route path={`${localpath}/contacto`} element={<Contacto />}/>
            <Route path={`${localpath}*`} element={<NotFound />} />
            
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
