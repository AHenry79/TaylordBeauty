import { useState } from "react";
import Footer from "../Nav/Footer";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const hours = [
    "Closed",
    "Closed",
    "Closed",
    "By Appointment",
    "09:00 am - 05:00pm",
    "08:00 am - 05:00pm",
    "Closed",
  ];
  const today = new Date().getDay();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleBlur = () => {
    if (email !== "" && !validateEmail(email)) {
      setErr("Please input a valid email address");
    } else {
      setErr("");
    }
  };

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  return (
    <div className="contact-page-wrapper">
      <div className="contact-info-page-wrapper">
        <div className="contact-wrapper">
          <h1 className="contact">CONTACT ME</h1>
          <h3>Send in a question or book an appointment!</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" />
            <input
              type="email"
              placeholder="Email*"
              value={email}
              onChange={handleSubmit}
              onBlur={handleBlur}
            />
            {err && <p className="err">{err}</p>}
            <textarea placeholder="Message" className="message" />
            <input type="integer" placeholder="Phone Number" />
            <button className="submit-button">SEND</button>
          </form>
        </div>
        <div className="contact-info-wrapper">
          <h2 className="location-header">Location</h2>
          <h4 className="location-info">
            Location: <br /> Friday & Saturday - Mosman, Studio 8 Hair Salon
          </h4>
          <h4 className="location-info mobile">
            Mobile service can be offered for group bookings and weddings.
          </h4>
          <h2 className="location-header business">Taylor'd Beauty</h2>
          <h3 className="hours-title">Hours</h3>
          <div className="hours-table">
            <ul className="days">
              {days.map((day, index) => (
                <li
                  key={index}
                  style={{
                    fontWeight: index + 1 === today ? "bold" : "normal",
                  }}
                >
                  {day}
                </li>
              ))}
            </ul>
            <ul className="times">
              {hours.map((hour, index) => (
                <li
                  key={index}
                  style={{
                    fontWeight: index + 1 === today ? "bold" : "normal",
                  }}
                >
                  {hour}
                </li>
              ))}
            </ul>
          </div>
          <p className="warning">
            Appointments outside of normal business hours may be arranged only
            through enquiry.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Contact;
