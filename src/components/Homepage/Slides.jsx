import { useState, useEffect } from "react";

function Slides() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const slideshowInterval = setInterval(() => {
      showSlides((slideIndex % 4) + 1);
    }, 10000);

    return () => {
      clearInterval(slideshowInterval);
    };
  }, [slideIndex]);

  const currentSlide = (n) => {
    showSlides(n);
  };

  const showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    setSlideIndex(n);

    slides[n - 1].style.display = "block";
    dots[n - 1].className += " active";
  };

  return (
    <div className="slide-container">
      <div className="slides fade">
        <img src="./src/assets/1722382125717.jpg" alt="makeup model" />
      </div>
      <div className="slides fade" style={{ display: "none" }}>
        <img src="./src/assets/1722382125401.jpg" alt="squirtle" />
      </div>
      <div className="slides fade" style={{ display: "none" }}>
        <img src="./src/assets/1722382125627.jpg" alt="charmander" />
      </div>
      <div className="slides fade" style={{ display: "none" }}>
        <img src="./src/assets/1722382125528.jpg" alt="pikachu" />
      </div>

      <div className="dots" style={{ textAlign: "center" }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
        <span className="dot" onClick={() => currentSlide(4)}></span>
      </div>
    </div>
  );
}
export default Slides;
