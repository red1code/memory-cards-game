import Header from './components/header'
import Game from './components/game'
import { useState } from 'react'
import { GAME_STATUS } from './utils/game-status';
import Footer from './components/footer';

export default function App() {
  const [score, setScore] = useState({ current: 0, best: 0 });

  const handleScoreChange = (gameStatus) => {
    if (gameStatus === GAME_STATUS.WIN) {
      alert('Congratulations! You won the game. Your "Best Score" is 54');
      setScore({ current: 0, best: 54 });
      return
    }
    if (gameStatus === GAME_STATUS.LOST) {
      alert('You lost! You clicked on a card twice.\n Your "Current Score" will be reseted.');
      setScore({ ...score, current: 0 });
      return
    }
    const increasedScore = score.current + 1;
    setScore({
      current: increasedScore,
      best: increasedScore > score.best ? increasedScore : score.best
    })
  }

  return (
    <>
      <Header
        currentScore={score.current}
        bestScore={score.best}
      />
      <Game handleScore={handleScoreChange} />
      <Footer />
    </>
  )
}
