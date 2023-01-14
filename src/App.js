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
    // console.log(guess);
    if(guess.toLowerCase() === data.name) {
      setCorrect(true);
    } else {
      setCorrect(false);
      console.log(data.name)
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
        <InputField guess={guess} handleChange={handleChange} correct={correct}/>
        <SearchButton handleSubmit={handleSubmit} guess={guess} />
      </form>
    </div>
  );
}

export default App;
