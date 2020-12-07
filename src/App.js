import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import logo from "./img/logodeliveroo.png";
import headerImg from "./img/headerImg.jpg";
import Header from "./components/Header";
import Category from "./components/Category";
import Cart from "./components/Cart";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
library.add(faStar, faMinus, faPlus);

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [listMeals, setListMeals] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://deliveroo-ines-backend.herokuapp.com/"
      );
      setData(response.data);
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>Charging...</span>
  ) : (
    <span>
      <Header logo={logo} headerImg={headerImg} data={data} />

      <main>
        <div className="container">
          <div className="list-container">
            <Category
              data={data}
              listMeals={listMeals}
              setListMeals={setListMeals}
            />
          </div>
          <div className="aside-container">
            <Cart listMeals={listMeals} setListMeals={setListMeals} />
          </div>
        </div>
      </main>
    </span>
  );
}

export default App;
