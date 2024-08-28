import React from 'react';
import Carousel from './CarouselFeedback/Carousel';
import Review from './CarouselFeedback/Review/Review';
import data from '/src/assets/json/Data.json';

const ContentFeedback = () => {
  const reviews = data[0].clientes;
  const visibleSlides = 5; // Quantidade de slides visíveis ao mesmo tempo

  return (
    <div className="content-feedback">
      <Carousel visibleSlides={visibleSlides} autoPlay={true} interval={10000}>
        {reviews.map((review, index) => (
          <Review key={index} {...review} />
        ))}
      </Carousel>
    </div>
  );
};

export default ContentFeedback;
