import { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";

import { useAuth } from "../../../Context/AuthContext";


function Bookings() {


   const { user } = useAuth();

   console.log(user);
   

const [bookings, setBookings] = useState([]);

useEffect(()=>{
  fetch("/src/Data/bookings.json")
  .then(res => res.json())
  .then(data => setBookings(data))
},[])


  const statusColor = {
    active: "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
    completed: "bg-blue-100 text-blue-700",
    cancelled: "bg-red-100 text-red-700"
  }

  return (
    <div className="overflow-hidden md:flex md:flex-1 md:gap-8">
    <Sidebar />
    <main className="p-2 md:min-w-2/3 md:flex md:flex-col md:items-center md:justify-center ">
    <div className="flex flex-1 items-center justify-between w-full my-4">
      <h1 className="text-3xl font-bold">Bookings</h1>  
      <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-400 duration-500">New Booking</button>
    </div>
    <input type="search" placeholder="Search..." className=" p-2 rounded border w-full"/>
    {bookings.length === 0 ? ( // for now...
      <p>No bookings yet</p>
    ) : (
      <div className="overflow-x-auto w-full">
        <table className="w-full">
        <thead>
         <tr className="p-4 text-sm">
          <th className="p-2">ID</th>
           <th className="p-2">Property</th>
           <th className="p-2">Location</th>
           <th className="p-2">Type</th>
           <th className="p-2">Status</th>
           <th className="p-2">Action</th>
         </tr>
        </thead>
        <tbody>
          { bookings.map((b, userId) => {
            const key = userId
            return(
              <tr key={key} className="border text-center">
                 <td className="p-2 text-sm">{b.id}</td>
                <td className="p-2 text-sm">{b.propertyName}</td>
                 <td className="p-2 text-sm">{b.location}</td>
                  <td className="p-2 text-sm">{b.type}</td>
                 <td className={`p-2 rounded ${statusColor[b.status]} || bg-gray-100 text-gray-600`}>{b.status}</td>
                <td className="p-2 text-sm"><button className="bg-gray-200 p-2 rounded">View</button></td>
              </tr >
            )
          })}
        </tbody>
      </table>
      </div>
    )}
    </main>
    </div>
    
  )
}

export default Bookings
