import React, { useState } from "react";
import previousIcon from "/images/icon-previous.svg";
import nextIcon from "/images/icon-next.svg";


const ProductImage = ({  showBtn = "hidden",imageSource,openModal}) => {
  const [activeImage, setActiveImage] = useState(0);

  function handleNext() {
    setActiveImage((prevImage) =>
      prevImage === imageSource.length - 1 ? 0 : prevImage + 1
    );
  }
  function handlePrevious() {
    setActiveImage((prevImage) =>
      prevImage === 0 ? imageSource.length - 1 : prevImage - 1
    );
  }

 
  return (
    <>
     
      <div className={`w-full md:${
              showBtn == "hidden" ? "w-1/2" : "w-full"
            }`}>
    
        <div className="w-full h-[500px] relative flex  overflow-hidden md:rounded-2xl">
          {imageSource.map((image, i) => (
            <img key={image.id}
              onClick={openModal}
              src={image.src}
              alt="Sneaker image"
              className="transition-all w-full object-cover h-full durartion-100 shrink-0 grow-0 md:rounded-2xl"
              style={{ translate: `${-100 * activeImage}%` }}
            />
          ))}
          <button
            className={`absolute rounded-full w-10 h-10 flex items-center justify-center bg-white left-4 p-2 top-[45%] md:${
              showBtn == "hidden" ? "hidden" : "flex"
            }`}
            onClick={handlePrevious}
          >
            <img src={previousIcon} alt="show previous sneaker image" />
          </button>
          <button
            className={`absolute rounded-full w-10 h-10 flex items-center justify-center bg-white right-4 p-2 top-[45%]  md:${
              showBtn == "hidden" ? "hidden" : "flex"
            }`}
            onClick={handleNext}
          >
            <img src={nextIcon} alt="show next sneaker image" />
          </button>
        </div>
        <div className="hidden md:flex items-center gap-4">
          {imageSource.map((image) => (
            <button
              onClick={() => setActiveImage(image.id - 1)}
              key={image.id}
              className={`border-[3px]    flex-1 rounded-lg overflow-hidden mt-8 transition-opacity duration-300 hover:opacity-[0.75] ${
                activeImage + 1 == image.id
                  ? "border-orange"
                  : "border-transparent"
              }`}
            >
              <img
                src={image.thumbnailSrc}
                alt=""
                className={`w-full h-[90px] object-cover ${
                  activeImage + 1 == image.id ? "opacity-[0.6]" : "opacity-1"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

    </>
  );
};

export default ProductImage;
