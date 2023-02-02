import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '../style/style.js';
import LoginPage from '../pages/LoginPage.js';
import UserContext from '../context/context.js';
import PrivatePage from '../private/privatePage.js';
import { useState } from 'react';
import Main from '../pages/Main.js';
import Providers from '../pages/Providers.js';
import Products from '../pages/Products.js';
import Receipts from '../pages/Receipts.js';
import Storage from '../pages/Storage.js';
import Sell from '../pages/Sell.js';

export default function App() {
  const [store, setStore] = useState("");
  const [provider, setProvider] = useState("");
  const [product, setProduct] = useState([]);
  const [productsStore, setProductsStore] = useState([]);
  return (
   <>
   <GlobalStyle/>
   <BrowserRouter>
   <UserContext.Provider
   value={{
    store, setStore, provider, setProvider, product, setProduct, productsStore, setProductsStore
   }}>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/main" element={ <PrivatePage>
                                    <Main/>
                                    </PrivatePage>}/>
        <Route path="/providers" element={ <PrivatePage>
                                    <Providers/>
                                    </PrivatePage>}/> 
        <Route path="/products" element={ <PrivatePage>
                                    <Products/>
                                    </PrivatePage>}/> 
        <Route path="/receipts" element={ <PrivatePage>
                                    <Receipts/>
                                    </PrivatePage>}/>  
        <Route path="/storage" element={ <PrivatePage>
                                    <Storage/>
                                    </PrivatePage>}/> 
        <Route path="/sell" element={ <PrivatePage>
                                    <Sell/>
                                    </PrivatePage>}/>                                                                                                                      
      </Routes>
      </UserContext.Provider>
   </BrowserRouter>
   </>
  );
}


