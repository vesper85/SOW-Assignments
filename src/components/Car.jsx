// src/components/Carousel.js

import React, { useEffect } from 'react';

import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';

register();

const Car = () => {
  useEffect(() => {
    new Swiper('.swiper-container', {
      slidesPerView: 1, // Default slides per view for small screens
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        // For larger screens (>= 768px), show 3 slides per view
        768: {
          slidesPerView: 3,
        },
      },
    });
  }, []);

  return (
    <swiper-container>
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        ...
        </swiper-container>

  );
};

export default Car;
