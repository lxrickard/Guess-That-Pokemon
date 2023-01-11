import React, { useEffect, useState } from 'react';
import './App.css';
import Pokemon from './Components/Pokemon';
import InputField from './Components/InputField';

function App() {
  const [data, setData] = useState(null);
  useEffect( () => {
    const random = Math.floor(Math.random() * 901 ) + 1;

    fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
      .then((response) => response.json() )
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
  
  return (
    <div className="App">
      <div className="PokemonContainer">
        <Pokemon data={data}/>
      </div>
      <div className="InputComponent">
        <InputField />
        <div className="SearchButton">?</div>
      </div>
    </div>
  );
}

export default App;
