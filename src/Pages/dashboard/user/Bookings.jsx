import { useData } from "../../../Context/DataContext";
import { useAuth } from "../../../Context/AuthContext";
import InViewAnimator from "../../../components/InViewAnimator";


function Bookings() {


const { user } = useAuth(); //filter function will be added later to use useAuth

const { bookings } = useData();

const userBookings = bookings.filter(b => b.userId === user.id);



  const statusColor = {
    active: "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
    completed: "bg-blue-100 text-blue-700",
    cancelled: "bg-red-100 text-red-700"
  }



  return (
    <div className="overflow-hidden md:flex md:flex-1 items-center justify-center md:gap-8">
    <main className="p-2 md:min-w-2/3 md:flex md:flex-col md:items-center md:justify-center ">
    <div className="flex flex-1 items-center justify-between w-full my-4">
      <h1 className="text-3xl font-bold">Bookings</h1>  
      <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-400 duration-500">New Booking</button>
    </div>
    <input type="search" placeholder="Search..." className=" p-2 rounded border w-full"/>
    {userBookings.length === 0 ? ( // for now...
      <p>No bookings yet</p>
    ) : (
      <>
      <InViewAnimator>
      <div className='md:hidden'>
        {userBookings.map((b) => {
        const key = b.id;
        return(
          <div key={key} className='p-2 bg-blue-200 mx-5 my-3 rounded'>
            <p>{b.id}</p>
            <p>{b.propertyName}</p>
            <p >{b.location}</p>
            <p className={`w-max p-2 ${statusColor[b.status]}`}>{b.status}</p>
            <p>{b.type}</p>
          </div>
        )
      })}
    </div>
      </InViewAnimator>
    <div className="overflow-x-auto w-full flex items-center justify-center">
        <table className="w-full hidden md:block">
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
          { userBookings.map((b) => {
            const key = b.id
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
      </>
    )}
    </main>
    </div>
    
  )
}

export default Bookings
