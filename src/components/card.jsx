export default function Card({ imgUrl, handleClick }) {
  return (
    <button className="card" onClick={(evt) => handleClick(imgUrl)}>
      <img src={imgUrl} alt="Poker card" width="100px" height="100%" />
    </button>
  )
}
