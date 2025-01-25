import React from "react";
import Pizza from "./Pizza.jsx";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const Menu = () => {
  const isPizza = 1;
  return (
    <>
      <main className="menu">
        <h2>OUR MENU</h2>
        {isPizza > 0 ? (
          <div className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </div>
        ) : (
          <p>we have nothing, case oh got it all...</p>
        )}
        {/* <Pizza
          name="Pizza Spinaci"
          photosrc="pizzas/spinaci.jpg"
          desc="Tomato, mozarella, spinach, and ricotta cheese"
          price={20}
        />
        <Pizza
          name="Focaccia"
          photosrc="pizzas/focaccia.jpg"
          desc="Bread with italian olive oil and rosemary"
          price={2}
        /> */}
      </main>
    </>
  );
};

export default Menu;
