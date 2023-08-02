import '../stylesheets/ImageSlider.css';
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";

const ImageSlider = () => {
  const images = [
    "book-1.jpg",
    "book-2.jpg",
    "book-3.jpg",
    "book-4.jpg",
    "book-5.jpg",
  ];

  const quotes = [
    "Fuel your love for reading with BookWarm.",
    "Escape to different worlds through the pages.",
    "Every book tells a story, find yours.",
    "Explore the world, one page at a time.",
    "Let books be your guide to endless possibilities.",
  ];

  const msg = "Go to BookWorm's library";

  return (
    <div>
      {quotes.map((id) => (
        <div key={id}></div>
      ))}
      <Slide>
        {images.map((image, id) => (
          <div className="each-slide-effect" key={id}>
            <div style={{ backgroundImage: `url(${images[id]})` }}>
              <span>{quotes[id]}</span>
              <Link className="msg" to="/Books">{msg}</Link>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default ImageSlider;
