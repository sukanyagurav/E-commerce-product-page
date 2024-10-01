import React, { useEffect, useState } from "react";
import minus from "/images/icon-minus.svg";
import plus from "/images/icon-plus.svg";
import cart from "/images/icon-cart.svg";
import { currencyFormatter } from "../utils/utilis";
import previousIcon from '/images/icon-previous.svg'
import nextIcon from '/images/icon-next.svg'

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
  const [activeImage, setActiveImage] = useState(0);


  function handleNext(){

    setActiveImage(prevImage=>prevImage === dumyProduct.imageSource.length-1 ?  0 : prevImage+1)
   console.log(activeImage)
  }
  function handlePrevious(){
    setActiveImage(prevImage=>prevImage === 0 ?  dumyProduct.imageSource.length-1 : prevImage-1)
  }
  return (
    <section className="flex max-w-[1200px] flex-col md:flex-row mx-auto md:gap-10 lg:gap-16 items-center  md:my-9 md:px-4"> 
      <div className="hidden md:block md:w-1/2">
        <img
          src={dumyProduct.imageSource[activeImage].src}
          alt=""
          className=" h-[500px] rounded-2xl object-cover"
        />
        <div className="flex items-center gap-4">
          {dumyProduct.imageSource.map((image) => (
            <button
              onClick={() => setActiveImage(image.id-1)}
              key={image.id}
              className={`border-2    flex-1 rounded-lg overflow-hidden mt-8 transition-opacity duration-300 hover:opacity-[0.7] ${
                activeImage+1 == image.id
                  ? "border-orange"
                  : "border-transparent"
              }`}
            >
              <img
                src={image.thumbnailSrc}
                alt=""
                className={`w-full h-[90px] object-cover ${
                  activeImage+1 == image.id ? "opacity-[0.6]" : "opacity-1"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
      <div className="w-full relative h-full flex  overflow-hidden md:hidden">
          {dumyProduct.imageSource.map((image,i)=>(
            <img src={image.src} alt="Sneaker image" className="transition-all w-full h-full durartion-100 shrink-0 grow-0"  
              style={{ translate: `${-100 * (activeImage)}%`}}
         
            />
          ))}
          <button className="absolute rounded-full w-10 h-10 flex items-center justify-center bg-white left-4 p-2 top-[45%]" onClick={handlePrevious}>
            <img src={previousIcon} alt="show previous sneaker image" />
          </button>
          <button className="absolute rounded-full w-10 h-10 flex items-center justify-center bg-white right-4 p-2 top-[45%]" onClick={handleNext}>
            <img src={nextIcon} alt="show next sneaker image" />
          </button>
      </div>
      <div className="mt-8 w-full p-4 md:p-0 md:w-1/2 md:max-w-[480px] md:mt-0 ">
        <span className="text-grayish-blue text-sm tracking-[0.1em] block uppercase font-bold">
          {dumyProduct.companyName}
        </span>
        <h1 className="text-4xl font-bold tracking-wider mt-4 mb-12">
          {dumyProduct.name}
        </h1>
        <p className="text-grayish-blue leading-relaxed">
          {dumyProduct.description}
        </p>

        <h2 className="inline-flex mr-[2rem]  items-center font-bold gap-4 mt-4">
          <span className="text-3xl ">$ 125.00</span>
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
            <button className="w-12 h-full px-4">
              <img src={minus} alt="decrease quantity by 1  " />
            </button>
            <span className="block px-4 text-dark-blue2 font-bold">5</span>
            <button className="w-12 h-full px-4" >
              <img src={plus} alt="increase quantity by 1" />
            </button>
          </div>
          <button className=" px-4 w-full flex justify-center items-center gap-2 hover:opacity-[0.6]  bg-orange py-3 rounded-lg" >
            <img src={cart} alt="" className="w-4 h-4" />
            <span className="font-bold  text-dark-blue2">Add to Cart</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
