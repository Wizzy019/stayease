import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faHome, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faBriefcase, faTimes } from '@fortawesome/free-solid-svg-icons';

import Logo from '../assets/logo.png'



function Sidebar() {

    const { user, logout } = useAuth();
     const navigate = useNavigate()

    const handleLogout = () =>{
    logout();
    navigate("/login", {replace: true})
  }

  const [open, setOpen] = useState(false);

    const navItems = {
        user:[
            {name: "Dashboard", path:"/dashboard/user", icon: <FontAwesomeIcon icon={faHome}/>},
            {name: "Bookings", path:"/dashboard/user/bookings", icon: <FontAwesomeIcon icon={faBriefcase}/>},
            {name: "Payments", path:"/dashboard/user/payments", icon: <FontAwesomeIcon icon={faCreditCard}/>},
            {name: "Profile", path:"/dashboard/user/profile", icon: <FontAwesomeIcon icon={faUser}/>},
        ],
         provider:[
            {name: "Dashboard", path:"/dashboard/provider"},
            {name: "My Services", path:"/dashboard/provider/services"},
            {name: "Requests", path:"/dashboard/provider/requests"},
            {name: "Earning", path:"/dashboard/provider/earning"},
            {name: "Profile", path:"/dashboard/provider/pfrofile"},
        ],
         admin:[
            {name: "Dashboard", path:"/dashboard/admin"},
            {name: "Users", path:"/dashboard/admin/users"},
            {name: "Listings", path:"/dashboard/admin/listings"},
            {name: "Transactions", path:"/dashboard/admin/transactions"},
            {name: "Reports", path:"/dashboard/admin/reports"},
        ],
    };

    const items = navItems[user?.role] || []

  return (
    <aside className='flex flex-col md:w-1/4 py-4 px-4 relative md:bg-gray-100'>
        <div className='flex w-full items-center justify-between'>
           <div className='flex items-center justify-start gap-1'> 
            <img src={Logo} alt="App Logo" className='size-15'/>
            <h2 className='text-3xl font-bold text-blue-900'>StayEase</h2>
            </div>
           <div className='md:hidden'> <FontAwesomeIcon icon={faBars} onClick={() => setOpen(true)} className='text-2xl'/></div>
        </div>
        <nav className={`fixed flex flex-col h-screen bg-gray-100 top-0 right-0 p-4
        text-2xl font-medium transition-transform duration-700 ease-in-out md:left-0 md:top-20 md:w-1/4 md:translate-x-0 md:opacity-100
        ${open ? "opacity-100 translate-x-0 overflow-hidden" : "opacity-0 translate-x-full" }`}>
    <div className='md:hidden'><FontAwesomeIcon icon={faTimes} onClick={() => setOpen(false)}/></div>
        {items.map((item) => (
            <NavLink
        key={item.name}
        to={item.path}
        end={item.name === "Dashboard"}
        onClick={() => setOpen(false)}
        className={({ isActive }) => isActive ?
         "flex items-center justify-start gap-1 p-4 m-2 bg-[#d4f2ff] rounded": 
         "flex items-center justify-start gap-1 p-4 m-2 bg-inherit"}
        > 
        {item.icon}
        {item.name}
        </NavLink>
            ))}
            <button
    onClick={handleLogout}
    className='text-start'
    >
    Logout
    </button>
    </nav>
    </aside>
  )
}

export default Sidebar
 