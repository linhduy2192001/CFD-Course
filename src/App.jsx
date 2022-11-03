import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages";
import Contact from "./pages/hop-tac";
import Team from "./pages/than-vien";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hop-tac" element={<Contact />} />
        <Route path="/thanh-vien" element={<Team />} />
      </Routes>
      {/* <Home/> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
