import React, { useState } from "react";
import logo from "/images/logo.svg";
import cartIcon from "/images/icon-cart.svg";
import profile from "/images/image-avatar.png";
import useCartStore from "../store";
import deleteIcon from "/images/icon-delete.svg";
import { currencyFormatter } from "../utils/utilis";

const Header = () => {
  const { cart, removeItem } = useCartStore();
  const quantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const [open, setOpen] = useState(false);
  return (
    <header className="flex max-w-[1200px] border-b-2 border-gray-100 py-6 pt-8 px-4 items-center mx-auto relative">
      <img src={logo} alt="sneakers logo" className="mr-8" />
      {/* <nav>
        <ul className='flex gap-10'>
            <li><a href="#none">Collections</a></li>
            <li><a href="#none">Men</a></li>
            <li><a href="#none">Women</a></li>
            <li><a href="#none">About</a></li>
            <li><a href="#none">Contact</a></li>
        </ul>
      </nav> */}
      <div className="flex items-center ml-auto gap-8">
        <button href="#none" className="relative" onClick={() => setOpen(true)}>
          <img src={cartIcon} alt="cart icon" />
          <span className="bg-orange text-white rounded-full text-sm absolute font-bold w-6 h-6 flex items-center justify-center  -top-4 p-2 -right-4">
            {quantity}
          </span>
        </button>
        <button
          className="border-2 border-transparent transition-all duration-300 hover:border-orange w-[50px] h-[50px] rounded-full overflow-hidden"
          onClick={() => setOpen(true)}
        >
          <img
            className="w-[50px] h-[50px] rounded-full"
            src={profile}
            alt="user profile icon"
          />
        </button>
      </div>
      {open && (
        <div className="rounded-lg absolute top-24 shadow-lg w-full right-0 md:right-24 bg-white z-10  items-center min-h-[200px] md:w-[380px]">
          <h2 className="p-4 border-b-2 text-gray-500 font-bold">Cart</h2>

          {cart.length == 0 ? (
            <p className="text-center p-20 text-gray-400 font-semibold">Your cart is empty.</p>
          ) : (
            <div className="p-4 w-full">
              <div>
                {cart.map((cartItem) => (
                  <div key={cartItem.id} className="flex gap-4 mt-4  ">
                    <img
                      className="w-16 h-16 rounded-md"
                      src={cartItem.imageSource[0].thumbnailSrc}
                      alt=""
                    />
                    <div>
                      <p className="text-md text-gray-400">{cartItem.name}</p>
                      <p>
                        <span className="text-gray-400">
                          {currencyFormatter.format(
                            cartItem.discountTotalPrice
                          )}{" "}
                          x{" "}
                        </span>{" "}
                        <span className="text-gray-400">
                          {cartItem.quantity}
                        </span>{" "}
                        <span className="text-black font-bold">
                          {currencyFormatter.format(
                            cartItem.discountTotalPrice * cartItem.quantity
                          )}
                        </span>
                      </p>
                    </div>
                    <button onClick={() => removeItem(cartItem.id)}>
                      <img src={deleteIcon} />
                    </button>
                  </div>
                ))}
              </div>
              <button className="bg-orange p-[0.8rem] w-full text-white font-bold mt-4 rounded-lg justify-self-end">
                Checkout
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
