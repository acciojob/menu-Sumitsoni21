import { useState } from "react";
import "./styles.css";
import Menu from "./Menu";

function App() {
  const menuData = [
    {
      id: 1,
      title: "Buttermilk Pancakes",
      category: "breakfast",
      price: 15.99,
      img: "https://plus.unsplash.com/premium_photo-1672846027109-e2c91500afef?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFuY2FrZXxlbnwwfHwwfHx8MA%3D%3D",
      desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle...",
    },
    {
      id: 2,
      title: "Diner Double",
      category: "lunch",
      price: 13.99,
      img: "https://plus.unsplash.com/premium_photo-1663840278173-d4458545ac8f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Vaporware iPhone mumblecore selvage raw denim...",
    },
    {
      id: 3,
      title: "Godzilla Milkshake",
      category: "shakes",
      price: 6.99,
      img: "https://images.unsplash.com/photo-1611928237590-087afc90c6fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNoYWtlfGVufDB8fDB8fHww",
      desc: "Ombucha chillwave fanny pack 3 wolf moon...",
    },
    {
      id: 4,
      title: "Country Delight",
      category: "breakfast",
      price: 20.99,
      img: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFuY2FrZXxlbnwwfHwwfHx8MA%3D%3D",
      desc: "Shabby chic keffiyeh neutra snackwave pork belly...",
    },
    {
      id: 5,
      title: "Egg Attack",
      category: "lunch",
      price: 22.99,
      img: "https://plus.unsplash.com/premium_photo-1663854478296-dd00b6257021?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBhbmNha2V8ZW58MHx8MHx8fDA%3D",
      desc: "Franzen vegan pabst bicycle rights kickstarter...",
    },
    {
      id: 6,
      title: "Oreo Dream",
      category: "shakes",
      price: 18.99,
      img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hha2V8ZW58MHx8MHx8fDA%3D",
      desc: "Portland chicharrones ethical edison bulb...",
    },
  ];

  const [items, setItems] = useState(menuData);
  const [category, setCategory] = useState("all");

  const handleCategory = (type) => {
    setCategory(type);
    if (type === "all") {
      setItems(menuData);
    } else {
      const filteredItems = menuData.filter((item) => item.category === type);
      setItems(filteredItems);
    }
  };

  return (
    <main id="main">
      <section className="menu-container">
        <div className="title">
          <h1>Our Menu</h1>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <button
            id="#filter-btn-1"
            className="filter-btn"
            onClick={() => handleCategory("breakfast")}
          >
            Breakfast
          </button>
          <button
            id="#filter-btn-2"
            className="filter-btn"
            onClick={() => handleCategory("lunch")}
          >
            Lunch
          </button>
          <button
            id="#filter-btn-3"
            className="filter-btn"
            onClick={() => handleCategory("shakes")}
          >
            Shakes
          </button>
          <button className="filter-btn" onClick={() => handleCategory("all")}>
            All
          </button>
        </div>
      </section>
      <Menu items={items} />
    </main>
  );
}

export default App;
