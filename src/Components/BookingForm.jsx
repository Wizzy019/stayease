import { useState, } from "react"
import InViewAnimator from "./InViewAnimator";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function BookingForm() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [guests, setGuests] = useState(1);
    const [roomType, setRoomType] = useState("");
    const [specialRequest, setSpecialRequest] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("")

    const handleBooking = (e) =>{
        e.preventDefault();

    if(!name || !email || !checkIn || !checkOut || !roomType) {
        setError("Please fill all repuired fields");
        return false;
    };


    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut)
   
    if(inDate >= outDate){
        setError("check in date must be befor check out date");
        return false;
    }
   
    if(!email.includes("@")){
        setError("Invalid email");
        return false;
    };

    const bookingData = {
        name,
        email,
        checkIn,
        checkOut,
        guests,
        roomType,
        specialRequest,
    }
    
    setSuccess("Booking order submited ✅")

    setName("");
    setEmail("");
    setCheckIn("");
    setCheckOut("");
    setRoomType("");
    setSpecialRequest("")
    setError("");

    console.log(bookingData);
    
    
    };



  return (
    <div>
        
     <FontAwesomeIcon icon={faArrowAltCircleLeft} className="fixed left-0 m-3 text-2xl" onClick={() => navigate('/accommodations/')} />
        <form 
            onSubmit={handleBooking}
            className='flex flex-col py-30 px-2 items-center'>
            <h2 className='text-pretty text-3xl font-semibold mb-3'>Book Now</h2> 

            {error && <p className='text-red-500 text-sm'>{error}</p>}
            <input
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border border-blue-300 p-2 w-full mb-3 rounded'
            required
            />
            <input
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border border-blue-300 p-2 w-full mb-3 rounded'
            required
            />
            <input
            type="date"
            placeholder='Check-in Date'
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className='border border-blue-300 p-2 w-full mb-3 rounded'
            required
            />
            <input
            type="date"
            placeholder='Check-out Date'
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className='border border-blue-300 p-2 w-full mb-3 rounded'
            required
            />
            <input
            placeholder={`number of guests? (${guests})`}
            // value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className='border border-blue-300 p-2 w-full mb-3 rounded'
            />
            <input
            placeholder='Room type'
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className='border border-blue-300 p-2 w-full mb-3 rounded'
            required
            />
            <input
            placeholder='Any special requests?'
            value={specialRequest}
            onChange={(e) => setSpecialRequest(e.target.value)}
            className='border border-blue-300 p-2 w-full mb-3 rounded'
            />
            <button 
             className='rounded-xl p-3 bg-blue-500 w-3/4
             m-auto text-white'
             >Complete Booking</button> 

             <InViewAnimator>
            {success && <p className='text-green-500 text-sm'>{success}</p>}
            </InViewAnimator>
            </form>

            
    </div>
  )
}

export default BookingForm
