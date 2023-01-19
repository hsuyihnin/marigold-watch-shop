import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Womanbrand from "./components/Womanbrand";
import Manbrand from "./components/Manbrand";
import Royaloak from "./components/Royaloak";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wmbrand" element={<Womanbrand />} />
        <Route path="/mbrand" element={<Manbrand />} />
        <Route path="/royaloak" element={<Royaloak />} />
      </Routes>
    </div>
  );
}
