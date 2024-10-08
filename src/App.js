import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Housing from "./pages/Housing";
import { home, about, housing } from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={home} element={<Home />} />
        <Route path={about} element={<About />} />
        <Route path={housing} element={<Housing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
