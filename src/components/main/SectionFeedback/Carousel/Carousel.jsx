import React from "react";
import Slider from "react-slick";
import Review from '../Review/Review';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import css from './Carousel.module.css'; 

function Carousel({ reviews }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,  
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1299,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className={css.carouselContainer}>
      <Slider {...settings} className={css.slider}>
        {reviews.map((review, index) => (
          <Review key={index} {...review} />
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;