import React, { useEffect, useState } from "react";

import "./Carousel.css";
import CarouselCard from "./CarouselCard";
import { useAxios } from "../../utils/useAxios";

const Carousel = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [transitionClass, setTransitionClass] = useState("onpage");

  // video fetch
  const [carouselVideos, setCarouselVideos] = useState([]);

  const { makeRequest, response } = useAxios();

  useEffect(() => {
    makeRequest({
      method: "get",
      url: "/api/videos",
    });
  }, []);

  useEffect(() => {
    if (response) {
      const filteredVideos = response.videos.filter((video) => {
        return video.label.includes("carousel");
      });
      setCarouselVideos(filteredVideos);
    }
  }, [response]);

  // carousel
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
      {carouselVideos.length > 0 && (
        <CarouselCard
          video={carouselVideos[carouselIndex]}
          className={className}
        />
      )}
    </section>
  );
};

export default Carousel;
