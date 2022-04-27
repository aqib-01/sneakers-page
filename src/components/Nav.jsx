import React, { useState, useContext } from "react";
import { AppContext } from "../App";
import Cart from "./Cart";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const { toggleCart, isCartOpen, cartItemsCount, setIsCartOpen } = useContext(AppContext);
  return (
    <header className="py-4 md:py-7">
      {(isNavOpen || isCartOpen) && (
        <div
          onClick={() => {setIsNavOpen(false); setIsCartOpen(false)}}
          className="fixed inset-0 bg-black opacity-75 z-20"
        ></div>
      )}

      <div className="wrapper relative nav-wrapper flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={toggleNav}
            className={`md:hidden ${isCartOpen ? "z-10" : "z-30"} `}
          >
            <img
              src={isNavOpen ? "images/icon-close.svg" : "images/icon-menu.svg"}
              alt=""
            />
          </button>
          <div className="ml-5 pb-1 md:m-0 md:p-0">
            <img src="images/logo.svg" alt="" />
          </div>
        </div>
        <Cart />
        <nav
          style={{
            width: !isNavOpen ? "0" : "300px",
          }}
          className={` transition-all duration-300 fixed top-0 bottom-0 
          bg-white left-0 right-1/2
        z-20 overflow-hidden md:overflow-visible md:relative md:inset-auto md:!w-auto md:mr-auto md:z-10`}
        >
          <ul
            className="md:ml-8 text-dark-blue md:text-dark-grayish-blue font-semibold mt-24 md:m-0 md:flex items-center
           md:gap-4 lg:gap-7 lg:ml-10"
          >
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center">
          <button
            className={`${isCartOpen && " z-50"} relative`}
            onClick={toggleCart}
          >
            <span className="absolute -right-2 -top-3 bg-orange text-white px-2 text-xs rounded-full">
              {cartItemsCount}
            </span>
            <img src="images/icon-cart.svg" alt="" />
          </button>
          <button className="ml-5 lg:ml-8">
            <img className="w-8" src="images/image-avatar.png" alt="" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
