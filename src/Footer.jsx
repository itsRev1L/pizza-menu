import React from "react";
import "./index.css";
const hour = new Date().getHours();
const closeHour = 22;
const isOpen = hour >= 12 && hour <= closeHour;
console.log(isOpen);
const Footer = () => {
  return (
    <footer className="footer">
      {isOpen ? (
        <Order endHour={closeHour} />
      ) : (
        <div className="order">
          <p>We are close until {12}:00</p>
        </div>
      )}
    </footer>
  );
};

const Order = (prop) => {
  return (
    <div className="order">
      <p>We are open until {prop.endHour}:00</p>
      <button className="btn">Order Now!</button>
    </div>
  );
};

export default Footer;
