import React from 'react';
import { Carousel } from 'react-bootstrap';

function ImageSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./firstbg1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/secondbg1.jpeg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/GrameenCraft.jpeg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./bowl2.jpeg"
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="./belan2.jpeg" // Replace with the path to your second image
          alt="Second slide"
        />
        {/* You can add captions or content for the second slide here */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="./gehu2.jpeg" // Replace with the path to your second image
          alt="Second slide"
        />
        {/* You can add captions or content for the second slide here */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="./rotisbji2.jpeg" // Replace with the path to your second image
          alt="Second slide"
        />
        {/* You can add captions or content for the second slide here */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="./smile2.jpeg" // Replace with the path to your second image
          alt="Second slide"
        />
        {/* You can add captions or content for the second slide here */}
      </Carousel.Item>
      {/* Add more Carousel.Items for additional images */}
    </Carousel>
  
  );
}

export default ImageSlider;