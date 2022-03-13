import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../../pages/about/About";
import Home from "../../pages/home/Home";

const Main = () => {
  return (
    <div className=" mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
