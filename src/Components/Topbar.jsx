import { useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";


function Topbar() {

    const { user, } = useAuth();

    const location = useLocation()
    const greet = location.pathname === "dashboard/user/bookings";

  return (
    <div>
       <div className='flex justify-between mx-3 mb-6 p-4'>
    {!greet && <h1 className='font-semibold text-2xl md:text-3xl'>
        Welcome, <br />
        {user?.email || "Guest"}
        👋
      </h1>}
     </div>
    </div>
  )
}

export default Topbar
