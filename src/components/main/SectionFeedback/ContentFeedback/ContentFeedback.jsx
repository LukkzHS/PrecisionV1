import React from 'react';
import Carousel from '../Carousel/Carousel'
import data from '/src/assets/json/Data.json';

const ContentFeedback = () => {
  const reviews = data[0].clientes;

  return (
    <div className="content-feedback">
      <Carousel reviews={reviews} />
    </div>
  );
};

export default ContentFeedback;
