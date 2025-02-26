import React from "react";
import Header from "./Header.jsx";
import Menu from "./Menu.jsx";
import Footer from "./Footer.jsx";
import "./index.css";
const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
};

export default App;
