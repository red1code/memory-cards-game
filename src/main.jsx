import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/header'
import GameRecords from './components/game-records'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <div className='bottom-Header'>
      <div className='game-explanation'>
        <p>Get points by clicking on images, but if you click more than once you will lose, so you have to remember the images you have already clicked.</p>
      </div>
      <GameRecords currentScore={3} bestScore={7} />
    </div>
  </React.StrictMode>
)
