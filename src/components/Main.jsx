import React, { useContext, useState } from "react";
import ImageSlider from "./ImageSlider";
import { AppContext } from "../App";
const Main = () => {
  const {addCount, minusCount, count, addCartItem} = useContext(AppContext)
  return (
    <main>
      <div className="wrapper lg:flex items-center lg:my-16">
        <ImageSlider />
        <section className="mt-6 lg:m-0 lg:ml-44 md:max-w-lg mx-auto">
          <div>
            <h4 className="text-lg text-orange font-semibold uppercase">
              Sneaker Company
            </h4>
            <h1 className="text-3xl font-semibold mt-3 text-very-dark-blue">
              Fall Limited Edition Sneakers
            </h1>
            <p className="mt-4 text-dark-grayish-blue">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand
              everything the weather can offer.
            </p>
          </div>
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center">
              <span className="text-2xl font-semibold">$125.00</span>
              <span
                className="ml-3 bg-light-grayish-blue shadow-sm text-orange
              font-semibold px-1 rounded-sm"
              >
                50%
              </span>
            </div>
            <span className="text-grayish-blue line-through font-semibold">
              $250.00
            </span>
          </div>
          <div className="sm:flex sm:my-6 lg:mb-0">
            <div
              className=" my-6 sm:m-0 flex rounded-lg items-stretch justify-between
           bg-light-grayish-blue overflow-hidden sm:flex-1"
            >
              <button onClick={minusCount} disabled={count === 0 ? true : false} className="p-5 hover:bg-grayish-blue">
                <img src="images/icon-minus.svg" alt="" />
              </button>
              <span className="self-center text-very-dark-blue font-semibold">
                {count}
              </span>
              <button onClick={addCount} className="p-5 hover:bg-grayish-blue">
                <img src="images/icon-plus.svg" alt="" />
              </button>
            </div>

            <button
              onClick={() => addCartItem()}
              className="bg-orange flex items-center w-full
           justify-center py-4 rounded-lg mb-10 sm:mb-0 sm:w-auto sm:flex-1
           sm:ml-4 hover:opacity-50"
            >
              <svg
                className="mr-3"
                width="22"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#fff"
                  fillRule="nonzero"
                />
              </svg>
              <span className="text-white">Add to cart</span>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
