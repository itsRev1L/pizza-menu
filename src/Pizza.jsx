import React from "react";

const Pizza = (prop) => {
  return (
    <>
      <div className={`pizza ${prop.pizzaObj.soldOut ? "sold-out" : ""}`}>
        <img src={prop.pizzaObj.photoName} alt={prop.pizzaObj.name} />
        <div>
          <h3>{prop.pizzaObj.name}</h3>
          <p>{prop.pizzaObj.ingredients}</p>
          <span>
            {prop.pizzaObj.soldOut ? "sold out" : prop.pizzaObj.price}
          </span>
        </div>
      </div>
    </>
  );
};

export default Pizza;
