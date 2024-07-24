import React from "react";

const ImageCart = ({ imageData }) => {
  return (
    <>
      {imageData.map((image, id) => {
        return (
          <div key={id} className="imageCard">
            <div className="card overflow-hidden">
              <img
                className="overflow-hidden object-fill"
                src={image.urls.small}
                alt="image from unsplash"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ImageCart;
