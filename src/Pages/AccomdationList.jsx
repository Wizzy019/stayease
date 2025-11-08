import { useNavigate } from 'react-router-dom';
import { useData } from '../Context/DataContext'

import Filters from '../components/Filters/Filters'
import AccommodationCard from '../components/AccommodationCard'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons'

function AccomdationsList() {

    const { accommodations } = useData();
     const navigate = useNavigate();
    


  return (
    <>
     <FontAwesomeIcon icon={faArrowAltCircleLeft} className="absolute right-0 my-1 text-2xl" onClick={() => navigate('/dashboard/user')} />
     <h1 className='text-2xl md:text-3xl font-bold m-2'>Available Accommodations</h1>
        <Filters />
     <div className='grid grid-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-3 p-2 text-pretty'>
        {accommodations.map(acc =>
        <AccommodationCard key={acc.id} data={acc} />
        )}
    </div>
    </>
   
  )
}

export default AccomdationsList
