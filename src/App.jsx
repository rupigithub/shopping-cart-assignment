import React from "react";
import Header from "./Components/Header";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/cart";

function App(){
    return(
        <>
        <HashRouter>
        <Header/>
        <div>
            <Routes>
                <Route path="/"element={<Home/>} />
                <Route path="/cart"element={<Cart/>} />
            </Routes>
        </div>
       </HashRouter>
        </>
    )
}

export default App;
