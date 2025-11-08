
const StarRating = ({ rating }) => {

    const stars = Array.from({ length:5 }, (_, i) =>
      i < Number(rating) ? "⭐" : "☆");

  return (
    <div className="text-yellow-500 text-lg">{stars.join("")}</div>
  )

 }
export default StarRating
