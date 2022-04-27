import React, { useContext } from "react";
import { AppContext } from "../App";
const Cart = () => {
  const { imgsThumb, isCartOpen, cartItemsCount, deleteCartItems } =
    useContext(AppContext);
  return (
    <div
      className={`
       ${isCartOpen ? "scale-1" : "scale-0"}
       transition-all 
      absolute bg-white left-0 right-0 top-16 z-40 py-8 rounded-lg max-w-sm ml-auto`}
    >
      <h4 className="px-8 text-lg font-semibold text-very-dark-blue">Cart</h4>
      <hr className="my-8" />
      {cartItemsCount === 0 ? (
        <div className="px-8 text-center">Cart is empty!!!</div>
      ) : (
        <div className="px-8">
          <div className=" flex items-center justify-between">
            <div className="overflow-hidden rounded-md w-fit h-fit">
              <img src={imgsThumb[0]} className="w-16" alt="" />
            </div>
            <div className="mr-auto ml-4">
              <p className="text-lg text-dark-grayish-blue">
                Autumn Limited Edition...
              </p>
              <div>
                <span className="text-dark-grayish-blue">
                  $125 x <span>{cartItemsCount}</span>
                </span>{" "}
                <span className="text-very-dark-blue font-semibold ml-2">
                  ${125 * cartItemsCount}
                </span>
              </div>
            </div>
            <button onClick={deleteCartItems}>
              <img src="images/icon-delete.svg" alt="" />
            </button>
          </div>
          <button className="mt-6 w-full bg-orange font-semibold text-white py-4 rounded-md">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
