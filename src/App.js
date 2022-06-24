import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main"
import CardModal from "./components/CardModal"
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=898')
      .then(res => res.json())
      .then(json => {
        /* console.log(json) */
        setPokemons(json.results)
        setSearch(json.results)
      });
  }, []);

  return (
    <>
      <div className="container">
        <Header pokemons={pokemons} setSearch={setSearch}></Header>
        <Main search={search} />
      </div>
      <CardModal/>
    </>
  );
}

export default App;
