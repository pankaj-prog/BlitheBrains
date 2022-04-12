import React, { useEffect, useState } from "react";
import { videos } from "../../backend/db/videos";

import "./Carousel.css";
import CarouselCard from "./CarouselCard";

const Carousel = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [transitionClass, setTransitionClass] = useState("onpage");

  let className;
  if (transitionClass == "entering") {
    className = "carousel-card entering";
  }
  if (transitionClass == "onpage") {
    className = "carousel-card onpage";
  }

  useEffect(() => {
    const id = setTimeout(() => {
      if (carouselIndex == 2) {
        setTransitionClass("entering");
        setTimeout(() => {
          setTransitionClass("onpage");
          setCarouselIndex(0);
        }, 200);
      } else {
        setTransitionClass("entering");
        setTimeout(() => {
          setTransitionClass("onpage");
          setCarouselIndex(carouselIndex + 1);
        }, 200);
      }
    }, 3000);

    return () => clearTimeout(id);
  }, [carouselIndex]);

  return (
    <section className="carousel-wrapper gutter-bottom-24">
      <CarouselCard video={videos[carouselIndex]} className={className} />
    </section>
  );
};

export default Carousel;
