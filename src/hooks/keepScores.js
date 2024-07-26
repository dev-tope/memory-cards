import { useState } from "react";

const keepScores = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [currentHighScore, setCurrentHighscore] = useState(0);


  const updateScore = () => {
    setCurrentScore(prevScore => prevScore + 1)
  }

  const resetScore = () => {
    setCurrentScore(0)
  }

  const updateHighScore = () => {
    setCurrentHighscore(currentScore > currentHighScore ? currentScore : currentHighScore);
  }

  const resetHighScore = () => {
    setCurrentHighscore(0);
  }

  return {currentScore, currentHighScore, updateScore, resetScore, updateHighScore, resetHighScore }
}

export default keepScores;