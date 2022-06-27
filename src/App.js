import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main"
import CardModal from "./components/CardModal"
import Loader from "./components/Loader";
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    /* setLoader(true) */
    fetch('https://pokeapi.co/api/v2/pokemon?limit=898')
      .then(res => res.json())
      .then(json => {
        /* console.log(json) */
        setPokemons(json.results)
        setSearch(json.results)
        setLoader(false)
      });

  }, []);

  return (
    <>
      {loader && <Loader/>}
      <div className="container">
        <Header pokemons={pokemons} setSearch={setSearch}></Header>
        <Main search={search} />
      </div>
      <CardModal />
    </>
  );
}

export default App;
