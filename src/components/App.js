import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '../style/style.js';
import LoginPage from '../pages/LoginPage.js';
import UserContext from '../context/context.js';
import PrivatePage from '../private/privatePage.js';
import { useState } from 'react';
import Main from '../pages/Main.js';
import Providers from '../pages/Providers.js';

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
        <Route path="/main" element={ <PrivatePage>
                                    <Main/>
                                    </PrivatePage>}/>
        <Route path="/providers" element={ <PrivatePage>
                                    <Providers/>
                                    </PrivatePage>}/>                                  
      </Routes>
      </UserContext.Provider>
   </BrowserRouter>
   </>
  );
}

