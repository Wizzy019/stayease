import { useNavigate } from "react-router-dom"
import InViewAnimator from "./InViewAnimator";

function AccommodationCard({ data }) {

  const navigate = useNavigate();
  const { id, name, image, location, price } = data;

  return (
    <InViewAnimator>
      <div className="flex flex-col items-center p-2 w-fit
       bg-white rounded shadow-lg hover:shadow-2xl duration-500 cursor-pointer"
       onClick={() => navigate(`/accommodation/${id}`)}
       >
      <img src={image} alt="accommodation-pic" className="h-50 w-65 m-2 rounded"/>
        <h3 className="text-xl font-semibold">{name}</h3>
      <p>{location}</p>
       <span className="flex flex-1 items-center justify-between">
      <p>₦{price.toLocaleString()}/night</p>
      </span>
    </div>
    </InViewAnimator>
  )
}

export default AccommodationCard
