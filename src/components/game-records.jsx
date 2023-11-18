export default function GameRecords({ currentScore, bestScore }) {
  const formatNumber = (num) => num < 10 ? `0${num}` : num;
  return (
    <div className='score-container' id='score'>
      <div className="score current-score">
        Current Score:
        <span>{formatNumber(currentScore)}</span>
      </div>
      <div className="score best-score">
        Best Score:
        <span>{formatNumber(bestScore)}</span>
      </div>
    </div>
  )
}
