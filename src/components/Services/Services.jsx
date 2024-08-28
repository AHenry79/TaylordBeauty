import Footer from "../Nav/Footer";
import { Link } from "react-router-dom";

function Services() {
  const moveTo = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="services-page">
      <div className="service-list">
        <h1 className="service-title">SERVICES</h1>
        <button onClick={() => moveTo("makeup")} className="service-button">
          MAKEUP
        </button>
        <button
          onClick={() => moveTo("facial-waxing")}
          className="service-button"
        >
          FACIAL WAXING
        </button>
        <button
          onClick={() => moveTo("body-waxing")}
          className="service-button"
        >
          BODY WAXING
        </button>
        <button
          onClick={() => moveTo("brow-tinting")}
          className="service-button"
        >
          BROW TINTING
        </button>
        <button onClick={() => moveTo("facials")} className="service-button">
          FACIALS
        </button>
      </div>
      <div id="makeup">
        <h1 className="service-title">MAKEUP</h1>
        <div className="service-info-wrapper">
          <div className="service-info">
            <h3>Glam service $150</h3>
            <p className="service-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              sequi unde aliquid quaerat pariatur veniam vero qui cupiditate
              quidem sint, neque sapiente sed deserunt quibusdam eum eaque quas
              eos commodi. <br /> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sit sequi amet magni, excepturi repellat ratione
              asperiores ipsum incidunt fugiat nesciunt dolor numquam, earum
              voluptates voluptatibus error est quo tempore illo.
            </p>
            <br />
            <p className="service-p">
              Please{" "}
              <a href="/contact" className="link">
                contact
              </a>{" "}
              Taylor if your look leans more extreme or extra glam to manage
              time expectations
            </p>
          </div>
          <div className="booking">
            <h4>Ready to Book?</h4>
            <p>
              Studio appointments open Fridays & Saturdays (outside of
              pre-planned wedding bookings)
            </p>
            <p>Located at Tricho Studio Salon, Ann Arbor, MI</p>
            <Link to={"/contact"}>
              <button className="book-button">BOOK IN WITH TAYLOR</button>
            </Link>
          </div>
        </div>
      </div>
      <div id="facial-waxing">
        <h1 className="service-title">FACIAL WAXING</h1>
        <h3>Waxing Service $30</h3>
        <p className="service-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi
          unde aliquid quaerat pariatur veniam vero qui cupiditate quidem sint,
          neque sapiente sed deserunt quibusdam eum eaque quas eos commodi.{" "}
          <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          sequi amet magni, excepturi repellat ratione asperiores ipsum incidunt
          fugiat nesciunt dolor numquam, earum voluptates voluptatibus error est
          quo tempore illo.
        </p>
      </div>
      <div id="body-waxing">
        <h1 className="service-title">BODY WAXING</h1>
        <h3>Waxing Service $100</h3>
        <p className="service-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi
          unde aliquid quaerat pariatur veniam vero qui cupiditate quidem sint,
          neque sapiente sed deserunt quibusdam eum eaque quas eos commodi.{" "}
          <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          sequi amet magni, excepturi repellat ratione asperiores ipsum incidunt
          fugiat nesciunt dolor numquam, earum voluptates voluptatibus error est
          quo tempore illo.
        </p>
      </div>
      <div id="brow-tinting">
        <h1 className="service-title">BROW TINTING</h1>
        <h3>Tinting Service $80</h3>
        <p className="service-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi
          unde aliquid quaerat pariatur veniam vero qui cupiditate quidem sint,
          neque sapiente sed deserunt quibusdam eum eaque quas eos commodi.{" "}
          <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          sequi amet magni, excepturi repellat ratione asperiores ipsum incidunt
          fugiat nesciunt dolor numquam, earum voluptates voluptatibus error est
          quo tempore illo.
        </p>
      </div>
      <div id="facials">
        <h1 className="service-title">FACIALS</h1>
        <h3>FACIAL Service $50</h3>
        <p className="service-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi
          unde aliquid quaerat pariatur veniam vero qui cupiditate quidem sint,
          neque sapiente sed deserunt quibusdam eum eaque quas eos commodi.{" "}
          <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          sequi amet magni, excepturi repellat ratione asperiores ipsum incidunt
          fugiat nesciunt dolor numquam, earum voluptates voluptatibus error est
          quo tempore illo.
        </p>
      </div>
      <Footer />
    </div>
  );
}
export default Services;
