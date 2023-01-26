import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "../style/style.js";
import LoginPage from "../pages/LoginPage.js";


export default function App() {
  return (
   <>
   <GlobalStyle/>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
      </Routes>
   </BrowserRouter>
   </>
  );
}

