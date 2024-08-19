import Slides from "./Slides";
import Footer from "../Nav/Footer";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";

function Homepage() {
  return (
    <div className="home">
      <Slides />
      <div className="home-title-wrapper">
        <h1 className="home-title">
          BEAUTY, TAYLOR'D <br /> FOR YOU
        </h1>
      </div>
      <div className="testimonials">
        <FormatQuoteRoundedIcon className="quote" />
        <h3 className="testimonial-title">
          I can't believe how amazing she is!
        </h3>
        <img
          src="./src/assets/1722382125292.jpg"
          alt="testimonial image"
          className="testimonial-img"
        />
        <p className="testimonial-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ut
          nulla, necessitatibus sit nam quas! Pariatur distinctio earum dicta
          ipsum repellendus odio odit est! Natus, id excepturi. Mollitia,
          assumenda voluptate?
        </p>
        <div className="line"></div>
        <p className="name">Person 1</p>
      </div>
      <Footer />
    </div>
  );
}
export default Homepage;
