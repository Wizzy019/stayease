

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth } from '../../../Context/AuthContext';
import { useData } from '../../../Context/DataContext';
import { faKey, faQuestion, faShield, faUser } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';
import Avater from '../../../components/Avater';
import InViewAnimator from '../../../components/InViewAnimator';

function UserProfile() {

   const { bookings, payments} = useData();
   const { user, logout} = useAuth();
   const navigate = useNavigate();

   const handleLogout = () =>{
    logout();
    navigate("/login", {replace: true})
  }


  const userName = user?.name

  const userBookings = bookings.filter(b => b.userId === user.id) // for now 
  const userPayments = payments.filter(p => p.userId === user.id) // for now

 const activeBookings = userBookings.filter(b => b.status === "active");
  const totalUserPayments = userPayments.length

  const totalSpent = userPayments.reduce((sum, p) => sum + p.amount, 0)

  const StatsCard = ( {label, value }) => (
    <div className='p-2 w-max bg-white rounded shadow-lg text-pretty text-center mx-2'>
          <p className='text-sm'>{label}</p>
          <p className='text-2xl font-semibold'>{value}</p>
        </div>
  );

  const SettingItem = ( { icon, label }) => (
    <ul>
      <li className='flex items-center justify-between p-2'>
        <FontAwesomeIcon icon={icon}/>
        <p className='mx-2'>{label}</p>
        <button className='ml-auto text-2xl font-light'>&gt;</button>
      </li>
    </ul>
  );
  
  return (
    <main className='flex flex-col p-2 text-pretty'>
      <InViewAnimator>
      <div className='w-full flex flex-col md:flex-row items-center my-4 rounded p-2 bg-blue-500'>
        <Avater name={user.name}/>
        <span className='mx-4 text-center md:text-start'>
          <p className='p-2 text-3xl font-bold text-white'>{userName}</p>
        <p className='p-2 text-white/70 font-semibold'>{user?.role}</p>
        </span>
      </div>
      </InViewAnimator>

      <InViewAnimator>
      <div className='w-full md:w-2/3 grid grid-cols-3 md:grid-cols-3 
      place-items-center gap-4 md:gap-1 py-2 px-4 '>
        <StatsCard label="Active Bookings" value={activeBookings.length}/>
        <StatsCard label="Total Payments" value={totalUserPayments}/>
        <StatsCard label="Total Spent" value={totalSpent.toLocaleString()}/>
      </div>
      </InViewAnimator>

      <InViewAnimator>
        <div className='w-full bg-white my-2 p-2 rounded shadow-lg'>
      <h2>Account Settings</h2>
      <SettingItem icon={faUser} label="Edit Profile" />
      <SettingItem icon={faKey} label="Change Password" />
      <SettingItem icon={faBell} label="Notifications" />
      <SettingItem icon={faShield} label="Securit & Privacy" />
      <SettingItem icon={faQuestion} label="Help Center" />
      </div>
      </InViewAnimator>
      
     <InViewAnimator>
      <button
    onClick={handleLogout}
    className='bg-red-500 text-2xl text-white p-2 w-full md:w-1/2 my-3 md:mx-auto rounded'
    >
    Logout
    </button>
     </InViewAnimator>
    </main>
  )
}

export default UserProfile
