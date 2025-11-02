import { useEffect, useState } from "react";
import { useAuth } from "../../../Context/AuthContext"
import DashboardLayout from "../../../layouts/DashboardLayout"
import Topbar from "../../../components/Topbar";



function DashboardHome() {

  const { user } = useAuth();

  const [bookings, setBookings] = useState([]);
  
  useEffect(()=>{
  fetch("/src/Data/bookings.json")
  .then(res => res.json())
  .then(data => setBookings(data))
  },[])

  const userBookings = bookings.filter(b => b.userId);// for now

  const activeBookings = userBookings.filter(b => b.status === "active");
  const activeBookingsCount = activeBookings.length

  const sortedBookings = userBookings.sort((a,b) => new Date(b.bookedAt) - new Date(a.bookedAt));
  const recentBookings = sortedBookings.slice(0, 3);

  
  
  

  return (
    <>
    <Topbar />
    <main className="bg-blue-200 p-2 h-screen w-full text-pretty">
      <div className="grid grid-cols-2 bg-white rounded p-4 
      items-center justify-evenly gap-2 md:grid-cols-3">
        <div className="bg-blue-200 rounded p-4 md:text-2xl">
          Active Bookings: <br />
          {activeBookingsCount}
        </div>
        <div className="bg-blue-200 rounded p-4 md:text-2xl">
          Active Bookings: <br />
          {activeBookingsCount}
        </div>
         <div className="bg-blue-200 rounded p-4 md:text-2xl">
          Active Bookings: <br />
          {activeBookingsCount}
        </div>
      </div>
      <div className=" bg-white my-4 rounded">
        <h2 className="text-2xl font-bold p-2">Recent Bookings</h2>
       <div className="flex flex-col md:flex-row p-2 gap-2">
        {recentBookings.map((r, userId) => {
       const key = userId
      return(
         <div key={key} className="bg-blue-200 font-semibold rounded my-2 p-2">
          <p>{r.propertyName}</p>
          <p>{r.status}</p>
         </div>)
        })}
       </div>
      </div>
    </main>
    </>
    
  )
}

export default DashboardHome
