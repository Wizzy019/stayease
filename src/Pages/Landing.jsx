import { Link } from "react-router-dom"

function Landing() {
  return (
    <div className='flex flex-col items-center justify-center gap-2 h-screen text-2xl text-pretty font-bold'>
        Welcome to StayEase
        <Link to="/register" className="bg-blue-500 text-white p-3 rounded">Get Started</Link>
    </div>
  )
}

export default Landing
