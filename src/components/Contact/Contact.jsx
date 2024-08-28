import { useState } from "react";
import Footer from "../Nav/Footer";
import CircularProgress from "@mui/material/CircularProgress";

function Contact() {
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  const [loading, setLoading] = useState(false);
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

  const onSubmit = async (event) => {
    event.preventDefault();

    if (email === "") {
      setErr("Please input a valid email address");
      return;
    }

    setLoading(true);
    const formData = new FormData(event.target);
    const formAccessKey = import.meta.env.VITE_REACT_APP_FORM_ACCESS_KEY;
    formData.append("access_key", formAccessKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setSubmitMessage("Message successfully sent!");
      setLoading(false);
    } else {
      console.error("Error: ", res);
      setSubmitMessage(
        "There was an error in processing this request. Please try again later."
      );
      setLoading(false);
    }
  };

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
          <form onSubmit={onSubmit}>
            <input type="text" placeholder="Name" name="name" />
            <input
              type="email"
              placeholder="Email*"
              value={email}
              onChange={handleSubmit}
              onBlur={handleBlur}
              name="email"
            />
            {err && <p className="err">{err}</p>}
            <textarea
              placeholder="Message"
              className="message"
              name="message"
            />
            {submitMessage && (
              <p
                className={
                  submitMessage === "Message successfully sent!"
                    ? "success"
                    : "err"
                }
              >
                {submitMessage}
              </p>
            )}
            <button className="submit-button">
              {loading ? <CircularProgress /> : "SEND"}
            </button>
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
