import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

function DashboardLayout() {
  return (
    <div className='flex flex-col md:flex-row h-screen'>
      <Sidebar />
      <div className='flex flex-col flex-1 overflow-y-scroll'>
          <Topbar />
          <main>
            <Outlet />
          </main>
      </div>
    </div>
  )
}

export default DashboardLayout
