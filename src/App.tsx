import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Saves from "./pages/Saves";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/saves" element={<Saves />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
