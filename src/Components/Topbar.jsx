import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext'


function Topbar() {

    const { user, logout} = useAuth();
  const navigate = useNavigate();

  const handleLogout = () =>{
    logout();
    navigate("/login", {replace: true})
  }


  return (
    <div>
       <div className='flex justify-between mb-6'>
      <h1 className='flex-2xl font-semibold'>
        Welcome, <br />
        {user?.email || "Guest"}
      </h1>
      <button
      onClick={handleLogout}
      className='bg-blue-500 text-white px-4 py-2 rounded'
      >
        Logout
      </button>
     </div>
    </div>
  )
}

export default Topbar
