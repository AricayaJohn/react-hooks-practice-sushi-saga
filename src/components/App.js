import React, {useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import Wallet from "./Wallet";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [budget, setBudget] = useState(100)
  const [eatenSushis, setEatenSushis] = useState([]);

  useEffect(() => {
    fetch(API)
    .then((r) => r.json())
    .then((data) => setSushis(data))
  }, []);

  const eatSushi = (sushi) => {
    if (budget >= sushi.price && !eatenSushis.includes(sushi.id)) {
      setBudget(budget - sushi.price);
      setEatenSushis([...eatenSushis, sushi.id]);
    }
  }
  const addMoney = (amount) => {
    setBudget(budget +parseInt(amount));
  }

  return (
    <div className="app">
      <SushiContainer sushis = {sushis} eatenSushis = {eatenSushis} eatSushi = {eatSushi}/>
      <Table budget = {budget} eatenSushis = {eatenSushis}/>
      <Wallet addMoney = {addMoney} /> 
    </div>
  );
}

export default App;
