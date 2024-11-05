import React, { useEffect, useState } from "react";
import minus from "/images/icon-minus.svg";
import plus from "/images/icon-plus.svg";
import cartImage from "/images/icon-cart.svg";
import { calculateDiscount, currencyFormatter } from "../utils/utilis";

import ProductImage from "./ProductImage";
import Modal from "./Modal";
import useCartStore from "../store";

const dumyProduct = {
  id: 1,
  name: "Fall Limited Edition Sneakers",
  companyName: "Sneaker Company",
  actualPrice: 250,
  discountPrice: 50,
  discountType: "percentage",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  imageSource: [
    {
      id: 1,
      thumbnailSrc: "/images/image-product-1-thumbnail.jpg",
      src: "/images/image-product-1.jpg",
    },
    {
      id: 2,
      thumbnailSrc: "/images/image-product-2-thumbnail.jpg",
      src: "/images/image-product-2.jpg",
    },
    {
      id: 3,
      thumbnailSrc: "/images/image-product-3-thumbnail.jpg",
      src: "/images/image-product-3.jpg",
    },
    {
      id: 4,
      thumbnailSrc: "/images/image-product-4-thumbnail.jpg",
      src: "/images/image-product-4.jpg",
    },
  ],
};
const Product = () => {
  const [open, setOpen] = useState(false);
  const id = 1;
  const { cart, updateCart } = useCartStore();

  const storedQuantity = cart.findIndex((cartItem) => cartItem.id == id);
  const [quantity, setQuantity] = useState(
    storedQuantity > -1 ? cart[storedQuantity].quantity : 0
  );
  function handleModal() {
    setOpen(true);
  }

  function handleAdd() {
    setQuantity((quantity) => {
      if (quantity < 10) {
        quantity += 1;
        return quantity;
      }
      return quantity;
    });
  }
  function handleRemove() {
    setQuantity((quantity) => {
      if (quantity >= 0) {
        quantity -= 1;
        return quantity;
      }
      return quantity;
    });
  }

  function updateItems(item) {
    updateCart(item);
  }
  return (
    <section className="flex max-w-[1200px] flex-col md:flex-row mx-auto md:gap-10 lg:gap-16 items-center  md:my-9 md:px-4">
      <ProductImage
        imageSource={dumyProduct.imageSource}
        openModal={handleModal}
        key="1"
      />
      {open && (
        <Modal isOpen={open} closeModal={() => setOpen(false)}>
          <ProductImage
            imageSource={dumyProduct.imageSource}
            showBtn="show"
            openModal={handleModal}
            key="1"
          />
        </Modal>
      )}
      <div className="mt-8 w-full p-4 md:p-0 md:w-1/2 md:max-w-[480px] md:mt-0 ">
        <span className="text-orange text-sm tracking-[0.1em] block uppercase font-bold">
          {dumyProduct.companyName}
        </span>
        <h1 className="text-4xl font-bold tracking-wider mt-4 mb-12">
          {dumyProduct.name}
        </h1>
        <p className="text-grayish-blue leading-relaxed">
          {dumyProduct.description}
        </p>

        <h2 className="inline-flex mr-[2rem]  items-center font-bold gap-4 mt-4">
          <span className="text-3xl ">
            {currencyFormatter.format(
              calculateDiscount(
                dumyProduct.actualPrice,
                dumyProduct.discountPrice,
                dumyProduct.discountType
              )
            )}
          </span>
          {dumyProduct.discountType && (
            <span className="bg-dark-blue2 text-light-white rounded-lg  p-2  py-1 text-[0.85em] ">
              {dumyProduct.discountPrice}
              {dumyProduct.discountType == "percentage" ? "%" : ""}
            </span>
          )}
        </h2>
        <span className="inline text-grayish-blue font-bold line-through md:block my-2">
          {currencyFormatter.format(dumyProduct.actualPrice)}
        </span>
        <div className="flex flex-col md:flex-row  gap-6 my-9 items-center">
          <div className="bg-light-grayish-blue w-full flex justify-between items-center rounded-lg h-[50px]">
            <button
              className={`w-12 h-full px-4 ${
                quantity === 0 && "opacity-[0.5] cursor-not-allowed"
              }`}
              disabled={quantity === 0}
              onClick={() => handleRemove(dumyProduct.id)}
            >
              <img src={minus} alt="decrease quantity by 1  " />
            </button>
            <span className="block px-4 text-dark-blue2 font-bold">
              {quantity}
            </span>
            <button
              className={`w-12 h-full px-4 ${
                quantity >= 10 && "opacity-[0.5] cursor-not-allowed"
              }`}
              onClick={() => handleAdd()}
            >
              <img src={plus} alt="increase quantity by 1" />
            </button>
          </div>
          <button
            onClick={() =>
              updateItems({
                id: dumyProduct.id,
                name: dumyProduct.name,
                companyName: dumyProduct.companyName,
                discountPrice: dumyProduct.discountPrice,
                actualPrice: dumyProduct.actualPrice,
                quantity,
                imageSource: dumyProduct.imageSource,
                discountTotalPrice: calculateDiscount(
                  dumyProduct.actualPrice,
                  dumyProduct.discountPrice,
                  dumyProduct.discountType
                ),
              })
            }
            className={` px-4 w-full flex justify-center items-center gap-2 hover:opacity-[0.6]  bg-orange py-3 rounded-lg ${
              quantity === 0 && "opacity-[0.5] cursor-not-allowed"
            }`}
          >
            <img src={cartImage} alt="" className="w-4 h-4" />
            <span className="font-bold  text-dark-blue2">Add to Cart</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
