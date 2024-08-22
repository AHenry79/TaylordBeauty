import Nav from "./components/Nav/Nav";
import Homepage from "./components/Homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio" element={<Homepage />} />
        <Route path="/services" element={<Homepage />} />
        <Route path="/about" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
