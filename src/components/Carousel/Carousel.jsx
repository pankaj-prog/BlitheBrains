import React, { useEffect, useState } from "react";
import { videos } from "../../backend/db/videos";

import "./Carousel.css";
import CarouselCard from "./CarouselCard";

const Carousel = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      if (carouselIndex == 2) {
        setCarouselIndex(0);
      } else {
        setCarouselIndex(carouselIndex + 1);
      }
    }, 3000);

    return () => clearTimeout(id);
  }, [carouselIndex]);

  return (
    <section className="carousel-wrapper gutter-bottom-24">
      <CarouselCard video={videos[carouselIndex]} />
    </section>
  );
};

export default Carousel;
