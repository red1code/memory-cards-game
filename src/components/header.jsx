import GameRecords from './game-records'

export default function Header({ currentScore, bestScore }) {
  return (
    <header id='header'>
      <div className='details-container'>
        <h1>Memory Cards Game</h1>
        <h3>A game to test your memory capacity</h3>
        <small>Get points by clicking on images, but don't click on any, more than once!</small>
      </div>
      <GameRecords
        currentScore={currentScore}
        bestScore={bestScore}
      />
    </header>
  )
}
