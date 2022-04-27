import React from "react";
import { useContext, useEffect } from "react";
import App, { AppContext } from "../App";
const FeedbackModal = () => {
  const { feedbackModal, closeFeedbackModal } = useContext(AppContext);
  useEffect(() => {
      if(feedbackModal.isOpen) {
          setTimeout(() => {
              closeFeedbackModal();
          }, 1000)
      }
  }, [feedbackModal.isOpen])
  return (
    <div
      className={`${
        !feedbackModal.isOpen && "-translate-y-20"
      } transition-all duration-500 fixed left-0 right-0 w-fit text-center py-4 px-8 rounded-md
     mx-auto bg-very-dark-blue z-50 text-white top-5`}
    >
      {feedbackModal.text}
    </div>
  );
};

export default FeedbackModal;
