import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../style/style.js";
import LoginPage from "../pages/LoginPage.js";
import UserContext from '../context/context.js';
import { useState } from "react";

export default function App() {
  const [store, setStore] = useState("");
  return (
   <>
   <GlobalStyle/>
   <BrowserRouter>
   <UserContext.Provider
   value={{
    store, setStore
   }}>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
      </Routes>
      </UserContext.Provider>
   </BrowserRouter>
   </>
  );
}

