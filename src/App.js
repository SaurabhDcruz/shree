import "./App.css";
//import Layout from "./Layout";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";
import Faculty from "./Faculty";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Career from "./Career";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Header2 from "./Shared/Header/Header2";
import { Footer2 } from "./Shared/Footer/Footer2";
import HomePage from "./Home/HomePage";
import Courses2 from "./Courses/Courses2";
import Contact2 from "./Contact/Contact2";
import Career2 from "./Career/Career2";
import Gallery2 from "./Gallery/Gallery2";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <div className="mb-[6rem]">
      <Header2 />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Career" element={<Career2 />} />
        <Route path="/Courses" element={<Courses2 />} />
        <Route path="/Faculty" element={<Faculty />} />
        <Route path="/Gallery" element={<Gallery2 />} />
        <Route path="/Contact" element={<Contact2 />} />
      </Routes>
      <Footer2 />
    </BrowserRouter>
  );
}

export default App;
