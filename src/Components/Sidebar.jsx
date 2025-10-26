import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'

function Sidebar() {

    const { user } = useAuth();

    const navItems = {
        user:[
            {name: "Dashboard", path:"/dashboard/user"},
            {name: "Bookings", path:"/dashboard/user/bookings"},
            {name: "Payments", path:"/dashboard/user/payments"},
            {name: "Profile", path:"/dashboard/user/profile"},
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
    <aside className='flex flex-col w-60 bg-gray-400 py-6 px-4 h-screen'>
        <div>
            <img src="" alt="logo" />
            <h2>StayEase</h2>
        </div>
        <nav>
            {items.map((item) => (
                <NavLink
            key={item.name}
            to={item.path}
            > 
            {item.name}
            </NavLink>
            ))}
        </nav>
    </aside>
  )
}

export default Sidebar
