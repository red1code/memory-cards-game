import { useState } from 'react';
import { pokerCards } from '../utils/poker-cards';
import { GAME_STATUS } from '../utils/game-status';
import Card from './card';
import shuffle from '../utils/shuffle-array';

export default function Game({ handleScore }) {
  const [cardsList, setCardsList] = useState(pokerCards)
  const [clickedCards, setClickedCards] = useState([]);

  const handleCardClick = (img) => {
    if (clickedCards.length === cardsList.length) {
      handleScore(GAME_STATUS.WIN);
      setClickedCards([]);
      return
    }
    if (clickedCards.includes(img)) {
      handleScore(GAME_STATUS.LOST);
      setClickedCards([]);
      return
    }
    clickedCards.push(img);
    setClickedCards(clickedCards);
    handleScore(GAME_STATUS.CAN_PLAY);
    const newCardsList = shuffle(cardsList);
    setCardsList([...newCardsList]);
  }

  return (
    <main className='game-container'>
      <div className="cards-container">
        {cardsList.map(card => (
          <Card key={card} imgUrl={card} handleClick={handleCardClick} />
        ))}
      </div>
    </main>
  )
}
