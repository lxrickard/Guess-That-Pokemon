  // need to write state for the correct/incorrect state. 
  // I belive setting it equal to null and then running the evaluation to either be true or false. 
  // Setting css according to the true and false will be good. 
  // Using a class of .true and .false will be sufficient in the rendering with logic functions. 
  // Need app to manage this and have props passed down to SearchButton


import React, { useEffect, useState } from 'react';
import './App.css';
import Pokemon from './Components/Pokemon';
import InputField from './Components/InputField';
import SearchButton from './Components/SearchButton';

function App() {
  const [data, setData] = useState(null);
  const [guess, setGuess] = useState('');
  const [correct, setCorrect] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(guess.toLowerCase() === data.name) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
    setGuess('')
  }

  const handleChange = (event) => {
    setGuess(event.target.value.toLowerCase());
  };
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
        <Pokemon data={data} correct={correct}/>
     <form onSubmit={handleSubmit} className="InputComponent">
        <InputField guess={guess} handleChange={handleChange}/>
        <SearchButton handleSubmit={handleSubmit} guess={guess} />
      </form>
    </div>
  );
}

export default App;
