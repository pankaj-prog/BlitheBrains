import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [hideButton, setHideButton] = useState(true);

  const scrollToTopHandler = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset < 200) {
        setHideButton(true);
      } else {
        setHideButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    !hideButton && (
      <button
        className="btn btn-outline-primary btn-pill btn-lg btn-float"
        title="scroll to top"
        onClick={scrollToTopHandler}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    )
  );
};

export default ScrollToTopButton;
