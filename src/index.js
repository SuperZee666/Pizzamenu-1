import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// eslint-disable-next-line
const pizzaData = [
  {
    key: 1,
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    key: 2,
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    key: 3,
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    key: 4,
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    key: 5,
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    key: 6,
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {
    // color: "red",
    // textAlign: "center",
    // fontSize: "50px",
    // fontFamily: "cursive",
    // textTransform: "uppercase",
  };
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //   const pizzas = [];
  const numPizzas = pizzaData.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza key={pizza.key} pizzaObjects={pizza} />
          ))}
        </ul>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={12}
        soldOut={false}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price={12}
        soldOut={false}
      />
      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        photoName="pizzas/margherita.jpg"
        price={10}
        soldOut={false}
      /> */}
    </main>
  );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <p>{props.pizzaObjects.key}</p>
      <img src={props.pizzaObjects.photoName} alt={props.pizzaObjects.name} />
      <h3>{props.pizzaObjects.name}</h3>
      <p>{props.pizzaObjects.ingredients}</p>
      <span>€{props.pizzaObjects.price + 3}</span>
      <p>{props.pizzaObjects.soldOut ? "Sold Out" : "Available"}</p>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();

  const openHours = 9;
  const closeHours = 22;
  const isOpen = hour >= openHours && hour <= closeHours;

  return (
    <footer style={{ textAlign: "center" }} className="footer">
      {new Date().toLocaleString()}.{" "}
      {isOpen ? "Yes we're Open!" : "Sorry, we're Closed!"}
      {isOpen && (
        <div className="order">
          <p style={{ textAlign: "center" }}>
            We waiting for your Order, Closing at {closeHours}:00!!{" "}
            <span role="img">🍕</span>
          </p>
          <button className="btn">Place Order</button>
        </div>
      )}
      <div className="copywrite">
        © {new Date().getFullYear()} Fast React Pizza Co.
      </div>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
