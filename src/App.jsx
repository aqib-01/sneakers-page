import React, { useState, useReducer, useEffect } from "react";

import FeedbackModal from "./components/FeedbackModal";
import LightBox from "./components/LightBox";

import Main from "./components/Main";
import Nav from "./components/Nav";
export const AppContext = React.createContext();

const reducer = (state, action) => {
  if (action.type === "ADD_CART_ITEM") {
    const count = action.payload;
    return {
      ...state,
      cartItemsCount: state.cartItemsCount + count,
      feedbackModal: {
        isOpen: true,
        text: count === 1 ? count + " Item Added!" : count + " Items Added!",
      },
    };
  }
  if (action.type === "DELETE_CART_ITEMS") {
    return {
      ...state,
      feedbackModal: {
        isOpen: true,
        text: state.cartItemsCount === 1 ? "Item Deleted!" : "Items Deleted!",
      },
      cartItemsCount: 0,
    };
  }
  if (action.type === "CLOSE_FEEDBACK_MODAL") {
    return {
      ...state,
      feedbackModal: {
        ...state.feedbackModal,
        isOpen: false,
      },
    };
  }
  if (action.type === "COUNT_VALUE_MISSING") {
    return {
      ...state,
      feedbackModal: {
        isOpen: true,
        text: "Please add a value!",
      },
    };
  }
};
const defaultState = {
  cartItemsCount: 0,
  feedbackModal: {
    text: "Item Added!",
    isOpen: false,
  },
};
const App = () => {
  const [imgs] = useState([
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg",
  ]);
  const [imgsThumb] = useState([
    "images/image-product-1-thumbnail.jpg",
    "images/image-product-2-thumbnail.jpg",
    "images/image-product-3-thumbnail.jpg",
    "images/image-product-4-thumbnail.jpg",
  ]);
  const [count, setCount] = useState(0);
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);
  const addCount = () => {
    setCount(count + 1);
  };
  const minusCount = () => {
    setCount(count - 1);
  };
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const [state, dispatch] = useReducer(reducer, defaultState);
  const addCartItem = () => {
    if (count) {
      dispatch({ type: "ADD_CART_ITEM", payload: count });
      setCount(0);
    } else if (count === 0) {
      dispatch({ type: "COUNT_VALUE_MISSING" });
    }
  };
  const deleteCartItems = () => {
    dispatch({ type: "DELETE_CART_ITEMS" });
  };
  const closeFeedbackModal = () => {
    dispatch({ type: "CLOSE_FEEDBACK_MODAL" });
  };
  useEffect(() => {
    if (isLightBoxOpen) {
      document.body.classList.add("overflow-hidden");
    } else if (!isLightBoxOpen) {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isLightBoxOpen]);
  const openLightBox = () => {
    if (window.innerWidth >= 1024) {
      setIsLightBoxOpen(true);
    }
  };
  const closeLightBox = () => {
    setIsLightBoxOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        imgs,
        imgsThumb,
        count,
        addCount,
        minusCount,
        isCartOpen,
        toggleCart,
        addCartItem,
        cartItemsCount: state.cartItemsCount,
        deleteCartItems,
        setIsCartOpen,
        feedbackModal: state.feedbackModal,
        closeFeedbackModal,
        openLightBox,
        closeLightBox,
      }}
    >
      <FeedbackModal />
      <Nav />
      <Main />
      {isLightBoxOpen && <LightBox />}
    </AppContext.Provider>
  );
};

export default App;
