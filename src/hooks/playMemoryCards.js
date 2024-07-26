// import keepScores from "./keepScores";

const playMemoryCards = () => {

  // const { updateScore, resetScore, updateHighScore, resetHighScore } = keepScores();
 
  const shuffle = (arr) => {
    for(let i = arr.length - 1; i > 0; i--){
      const randIndex = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[randIndex]] = [arr[randIndex], arr[i]]
    }
    return arr;
  }

  // const selectedPlayers = [];

  const checkPickedTwice = (newClickId, idArr) => {
    return idArr.includes(newClickId)
  }

  const isGameWon = (selectedCardsArr, playersArr) => {
    selectedCardsArr.length === playersArr.length ? true : false;
  }


  return { shuffle, checkPickedTwice, isGameWon }
}

export default playMemoryCards;