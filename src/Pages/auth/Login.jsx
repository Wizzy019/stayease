import React, { useState } from 'react'
import { useAuth } from '../../Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      const result = login(email, password);

      if(!result.success){
        setError(result.message)
      }

      const userRole = result.user.role
      if(userRole === "admin") navigate("/dashboard/admin", {replace: true});
      else if (userRole === "provider") navigate("/dashboard/provider", {replace: true});
      else navigate("/dashboard/user", {replace: true});
    }
    

  return (
     <div className='flex justify-center items-center '>
             <form 
            onSubmit={handleSubmit}
            className='flex flex-col py-30'>
            <h2 className='text-pretty text-3xl font-semibold mb-3'>Login</h2> 

            {error && <p className='text-red-500 text-sm'>{error}</p>}
            <input
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border border-blue-300 p-2 w-full mb-3 rounded'
            required
            />
             <input
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border border-blue-300 p-2 w-full mb-3 rounded'
            required
            />
            <button 
             className='rounded-xl p-3 bg-blue-500 w-3/4
             m-auto text-[hsl(0,3%,85%)]'
             >Login</button> 
             <p className='text-sm text-center'>Don't have an account?{" "}
              <Link to="/register" className='text-blue-600 underline'>Register</Link></p>
            </form>
    </div>
  )
}

export default Login