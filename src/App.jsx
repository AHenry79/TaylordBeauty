import Nav from "./components/Nav/Nav";
import Homepage from "./components/Homepage/Homepage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio" element={<Homepage />} />
        <Route path="/services" element={<Homepage />} />
        <Route path="/about" element={<Homepage />} />
        <Route path="/contact" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
