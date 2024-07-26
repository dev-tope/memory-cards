import { useState, useEffect } from "react";
import Card from "./Card";
import ScoreBoard from "./ScoreBoard";
import keepScores from "../hooks/keepScores";
import playMemoryCards from "../hooks/playMemoryCards";
import { url, headers } from "../hooks/getPlayerData";

import '../styles/Game.css'

const Game = () => {
  const { currentScore, currentHighScore, updateScore, resetScore, updateHighScore, resetHighScore } = keepScores();
  const { shuffle, checkPickedTwice } = playMemoryCards();

  
  const [playersData, setPlayersData] = useState([])
  
  useEffect(() => {
    
    async function getPlayersData() {
      try {
        const res = await fetch(url, headers);
        const data = await res.json();
        setPlayersData(data.filter(item => item.pid <= 12))
      } catch (error) {
        console.log('Fetching Error', error)
      }
    }

    getPlayersData()
  }, [])

  const [selectedCards, setSelectedCards] = useState([])

  const resetSelectedCards = () => {
    setSelectedCards([])
  }
  

  const [gameWon, setGameWon] = useState(false)

  const resetGameWon = () => {
    setGameWon(false)
  }

  const handleCardClick = (e) => {
    
    const playerId = e.currentTarget.id;

    const isPickedTwice = checkPickedTwice(playerId, selectedCards)

    if(gameWon) {
      resetGameWon()
    }

    if(isPickedTwice) {
      resetScore()
      resetSelectedCards()
      updateHighScore()
      resetGameWon()
      return
    }
   
    //place selected cards in an selectedCards arr
    setSelectedCards(prevState => {
      if(!prevState.includes(playerId)) {
        return [...prevState, playerId]
      }
      return prevState;
    })

    //shuffle

    shuffle(playersData);

    //updateScore
    updateScore()
  
    // console.log('Is Game Won', gameWon)
  };

  //check if game is won
  useEffect(() => {
    if(currentScore === playersData.length ) {
      setGameWon(prevState => !prevState);
      // console.log('Is Game Won (Effect)', gameWon)
      resetScore()
      resetHighScore()
      resetSelectedCards()
      // resetGameWon()
    } 
  }, [currentScore] )

  
   


  return (
    <div className="game">
      <div className="upper-app">
        <div>
          <h1>Players Memory Cards</h1>
        </div>
        <div>
          <ScoreBoard score={currentScore} highScore={currentHighScore} />
        </div>
      </div>

      <div className="cards">
        {playersData.map(player => {
          return (
            <Card 
              key={player.pid}
              id={player.pid} 
              name={player.name} 
              imgURL={player.logo} 
              handleClick={handleCardClick} 
            />
          )
        })}
      </div>

      <div className="instructions">
        { gameWon ? <div className="win"><span>🥳 YOU WWOOOONNNN 🥳 </span> <br /> <p>Click Anycard to Play Again</p></div> : <p>How To Play: Select all cards without clciking the same card twice</p>   } 
          
      </div>
    </div>
  )
}

export default Game;