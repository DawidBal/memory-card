import React, { useState } from 'react';
import styled from 'styled-components';
import CardList from './components/CardList';
import Header from './components/Header';
import Restart from './components/Restart';
import Scoreboard from './components/Scoreboard';

const Overlay = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    min-height: 100vh;
    min-width: 100vw;
    overflow: hidden;
    display: grid;
    place-content: center;
    background: #000;
    opacity: 0.6;
    z-index: 0;
`


function App() {

  const charactersData = [
    { id: 1, name: "Bigby Wolf", image: './images/bigby.webp', clicked: false },
    { id: 2, name: "Snow White", image: './images/snow-white.webp', clicked: false },
    { id: 3, name: "Bluebeard", image: './images/bluebeard.webp', clicked: false },
    { id: 4, name: "Bufkin", image: './images/bufkin.webp', clicked: false },
    { id: 5, name: "Colin", image: './images/colin.webp', clicked: false },
    { id: 6, name: "Ichabod Crane", image: './images/crane.webp', clicked: false },
    { id: 7, name: "Crooked Man", image: './images/Crooked_Man.webp', clicked: false },
    { id: 8, name: "Faith", image: './images/Faith.webp', clicked: false },
    { id: 9, name: "Flycatcher", image: './images/flycatcher.webp', clicked: false },
    { id: 10, name: "Aunty Greenleaf", image: './images/greenleaf.webp', clicked: false },
    { id: 11, name: "Holly", image: './images/holly.webp', clicked: false },
    { id: 12, name: "Jack Horner", image: './images/jack.webp', clicked: false },
    { id: 13, name: "Bloody Mary", image: './images/mary.webp', clicked: false },
    { id: 14, name: "Nerissa", image: './images/nerissa.webp', clicked: false },
    { id: 15, name: "Mr. Toad", image: './images/toad.webp', clicked: false },
  ];

  const [scoreBoard, setScoreBoard] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [gameLost, setGameLost] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [characters, setCharacters] = useState(charactersData);


  const reset = () => {
    const newCharacters = characters.map(character => {
      const clicked = character.clicked = false;
      return {...character, clicked};
    });
    setCharacters(newCharacters);
    setGameLost(false);
    setScoreBoard(0);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Scoreboard scoreBoard={scoreBoard} highestScore={highestScore} />
        <CardList scoreBoard={scoreBoard} setScoreBoard={setScoreBoard} 
        highestScore={highestScore} setHighestScore={setHighestScore} 
        setGameLost={setGameLost} characters={characters} setCharacters={setCharacters}/>
      </main>
      {gameLost ? <Restart reset={reset} /> : null}
      {gameLost ? <Overlay /> : null}

    </div>
  );
}

export default App;
