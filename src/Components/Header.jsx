import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Search from "./Search";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartItems = useSelector((state)=> state.CartItems)
  
  return (
    <>
      <header>
        <div className="header">
          <div>
            <Link to="/">Shopify</Link>
          </div>
          <div className="search-div">
            <Search />
          </div>
          <div>
            <Link to="/Cart">
              <FaShoppingCart />
            </Link>
            <sup>{
              (cartItems.reduce((acc, currentcartItem) => acc + currentcartItem.quantity, 0))}</sup>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
