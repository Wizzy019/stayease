import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

function DashboardLayout({ children }) {
  return (
    <div className='flex h-screen'>
      <Sidebar />
      <div className='flex flex-col flex-1 overflow-hidden'>
          <Topbar />
          <main>{children}</main>
      </div>
    </div>
  )
}

export default DashboardLayout
