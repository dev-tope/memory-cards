import "../styles/ScoreBoard.css"

const ScoreBoard = ({score, highScore}) => {
  return(
    <div>
      <p>Score: {score}</p>
      <p>Highscore: {highScore}</p>
    </div>
  )
}

export default ScoreBoard