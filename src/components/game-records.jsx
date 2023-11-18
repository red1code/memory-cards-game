import { useEffect } from 'react'

export default function GameRecords({ currentScore, bestScore }) {
  const formatNumber = (num) => num < 10 ? `0${num}` : num;

  useEffect(() => {
    fixScoreBoardOnScroll();
  });

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

function fixScoreBoardOnScroll() {
  const hdrPosition = document.getElementById('header').getBoundingClientRect();
  const score = document.getElementById('score');
  window.onscroll = () => {
    if (window.scrollY >= hdrPosition.height) {
      score.style.position = 'fixed';
      score.style.top = '16px';
      score.style.left = '50%';
      score.style.transform = 'translateX(-50%)';
      score.style.boxShadow = '0 0 7px 0 rgba(0, 0, 0, 0.75)'
    } else {
      score.style.position = 'static';
      score.style.transform = '';
      score.style.boxShadow = '0 0 3px 0 rgba(0, 0, 0, 0.5)'
    }
  }
}
