import React, { useState } from 'react';
import CardList from './components/CardList';
import Header from './components/Header';
import Restart from './components/Restart';
import Scoreboard from './components/Scoreboard';


function App() {

  const [scoreBoard, setScoreBoard] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [gameLost, setGameLost] = useState(false)

  const restartGame = () => {
    setScoreBoard(0);
    setGameLost(false);
  }

  return (
    <div className="App">
      <Header />
      <Scoreboard scoreBoard={scoreBoard} highestScore={highestScore} />
      {gameLost ? <Restart /> : null}
      <CardList scoreBoard={scoreBoard} setScoreBoard={setScoreBoard}/>

    </div>
  );
}

export default App;
