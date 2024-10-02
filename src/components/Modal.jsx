import React from "react";
import closeIcon from "/images/icon-close.svg";
import { createPortal } from "react-dom";
const Modal = ({ children, closeModal, isOpen }) => {
  return createPortal(
    <div>
      <div
        className="hidden md:block w-full h-full bg-[rgba(0,0,0,0.7)] fixed top-0 left-0 z-20"
        onClick={closeModal}
      ></div>

      <dialog
        open={isOpen}
        className="hidden md:block top-[5%] mx-auto w-[100%]  fixed  max-w-[600px] z-50 rounded-lg  bg-transparent py-8"
      >
        <button onClick={closeModal} className="absolute   top-0 right-4">
          <img src={closeIcon} alt="" />
        </button>
        {children}
      </dialog>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
