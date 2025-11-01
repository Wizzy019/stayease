import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Landing from './Pages/Landing'
import Login from './Pages/auth/Login'
import ProviderDashboard from './Pages/dashboard/provider/ProviderDashboard'
import AdminDashboard from './Pages/dashboard/admin/AdminDashboard'
import ProtectedRoute from './components/ProtectedRoute'
import DashboardLayout from './layouts/DashboardLayout'
import DashboardHome from './Pages/dashboard/user/DashboardHome'
import Bookings from './Pages/dashboard/user/Bookings'
import Payments from './Pages/dashboard/user/Payments'
import Profile from './Pages/dashboard/user/Profile'



function App() {
  return (
        <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard/user'
         element={<ProtectedRoute allowedRoles={["user"]}>
          <DashboardLayout/>
        </ProtectedRoute>}>
              <Route index element={<DashboardHome />} />
              <Route path='payments' element={<Payments />} />
              <Route path='profile' element={<Profile />} />
          </Route>
        <Route path='dashboard/user/bookings' element={<Bookings />} />
        <Route path='/dashboard/provider' element={<ProtectedRoute allowedRoles={["provider"]}><ProviderDashboard /></ProtectedRoute>}/>
        <Route path='/dashboard/admin' element={<ProtectedRoute allowedRoles={["admin"]}><AdminDashboard /></ProtectedRoute>}/>
      </Routes>
  )
}

export default App