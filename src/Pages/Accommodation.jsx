import { useParams, useNavigate } from "react-router-dom"
import { useData } from "../Context/DataContext";

import Image from "../../Aids/acc-image.jfif"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import StarRating from "../Utils/StarRating";

function AccommodationDetails() {
 
  const { id } = useParams();
  const { accommodations } = useData();
   const navigate = useNavigate();
  
  const accommodation = accommodations.find(acc => acc.id === Number(id));


  if(!accommodation) return <p>Not Found...</p>

  return(
    <>
     <FontAwesomeIcon icon={faArrowAltCircleLeft} className="fixed right-0 m-3 text-2xl" onClick={() => navigate('/accommodations/')} />
     <div className="w-full flex flex-1 flex-col md:flex-row items-center md:justify-evenly p-2 text-pretty absolute
      top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <img src={Image} alt={accommodation.name} className="size-75 md:h-[500px] md:w-1/2 rounded-lg"/>
     <div className="flex flex-col items-center md:justify-stretch max-h-[500px]:">
      <h2 className="text-3xl font-bold my-2">{accommodation.name}</h2>
      <p className="text-2xl font-semibold">{accommodation.location}</p>
      <p className="text-2xl font-semibold">₦{accommodation.price.toLocaleString()}/night</p>
      <StarRating rating={accommodation.rating}/>
      <p className="flex flex-wrap items-center justify-center">{accommodation.tags.map((tag, index) => (
        <span
         key={index}
         className="px-3 py-1 m-2 text-gray-700 font-semibold" 
        >{tag}</span>
      ))}</p>
      <button className="bg-blue-500 text-2xl text-white p-2 w-2/3 md:w-96 
      rounded-xl hover:bg-blue-300 duration-500"
      onClick={() => navigate('/book')}
      >Book Now</button>
     </div>
    </div>
    </>
   
  )
}

export default AccommodationDetails
