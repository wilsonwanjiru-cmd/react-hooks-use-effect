import React, { useState, useEffect } from "react";

function DogPics() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch dog images from an API
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((r) => r.json())
      .then((data) => {
        // Update the 'images' state with fetched data
        setImages(data.message);
      });
  }, []); // Empty dependencies array to run only once on mount

  console.log("render");

  return (
    <div>
      {images.map((image) => (
        <img src={image} key={image} alt="Dog" />
      ))}
    </div>
  );
}

export default DogPics;
