//react component for showing images in an array
//todo: trim array based on a given size

import { useState } from 'react';


const ImageComponent = ({imgList}) => {
  const [currentImageIndex, changeCurrentImageIndex] = useState(0);

  function selectImage(index: number) {
    changeCurrentImageIndex(index);
  }

  function shiftLeft() {
    if (currentImageIndex > 0) {
      changeCurrentImageIndex(currentImageIndex - 1)
    } else {
      changeCurrentImageIndex(imgList.length - 1)
    }
  }

  function shiftRight() {
    if (currentImageIndex < imgList.length - 1) {
      changeCurrentImageIndex(currentImageIndex + 1)
    } else {
      changeCurrentImageIndex(0)
    }
  }

  return (
    <div className='items-center p-2 flex flex-col'>
      <div className="currentImage w-80 h-70 border-2 border-black">
        <img className='' src={imgList[currentImageIndex]} alt="" />
      </div>

      <div className='flex flex-row items-center'>

        {/* left button */}
        <button className='flex flex-row justify-center items-center rounded-full bg-transparent h-12 w-12 text-center' onClick={shiftLeft}><i className="ri-arrow-left-line"></i></button>

        <div></div>
        <div className='flex flex-row p-2'>
          {imgList.map((imageUrl, index) => (
            <div className={currentImageIndex == index ? 'border-2 border-black ' : ''} key={index}>
              <img className='h-16 w-auto' src={imageUrl} alt="image-alt" onClick={() => selectImage(index)} />
            </div>
          ))}
        </div>

        {/* right button */}
        <button className='flex flex-row justify-center items-center rounded-full bg-transparent h-12 w-12 text-center' onClick={shiftRight}><i className="ri-arrow-right-line"></i></button>
      </div>
    </div>
  );
};

export default ImageComponent;
