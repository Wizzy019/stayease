import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Landing from './Pages/Landing'
import Login from './Pages/auth/Login'
import UserDashboard from './Pages/dashboard/user/UserDashboard'
import ProviderDashboard from './Pages/dashboard/provider/ProviderDashboard'
import AdminDashboard from './Pages/dashboard/admin/AdminDashboard'
import ProtectedRoute from './components/ProtectedRoute'



function App() {
  return (
        <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard/user' element={<ProtectedRoute allowedRoles={["user"]}><UserDashboard /></ProtectedRoute>}/>
        <Route path='/dashboard/provider' element={<ProtectedRoute allowedRoles={["provider"]}><ProviderDashboard /></ProtectedRoute>}/>
        <Route path='/dashboard/admin' element={<ProtectedRoute allowedRoles={["admin"]}><AdminDashboard /></ProtectedRoute>}/>
      </Routes>
  )
}

export default App