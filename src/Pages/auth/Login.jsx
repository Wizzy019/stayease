import React, { useState } from 'react'
import { useAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user");

    const handleSubmit = (e) => {
      e.preventDefault();
      login(email, role);

      if(role === "admin") navigate("/dashboard/admin", {replace: true});
      else if (role === "provider") navigate("/dashboard/provider", {replace: true});
      else navigate("/dashboard/user", {replace: true});
    }
    

  return (
     <div className='flex justify-center items-center '>
             <form 
            onSubmit={handleSubmit}
            className='flex flex-col py-30'>
            <h2 className='text-pretty text-3xl font-semibold mb-3'>Login</h2> 
            <input
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border border-blue-300 p-2 w-full mb-3 rounded'
            />
             <input
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border border-blue-300 p-2 w-full mb-3 rounded'
            />
            <select 
            value={role}
            onChange={(e) => setRole(e.target.value)}
             className='border border-blue-300 p-2 w-full mb-3 rounded'
            >
              <option value="user">User</option>
              <option value="provider">Provider</option>
              <option value="admin">Admin</option> 
            </select>
            <button 

             className='rounded-xl p-3 bg-blue-500 w-3/4
             m-auto text-[hsl(0,3%,85%)]'
             >Login</button> 
            </form>
    </div>
  )
}

export default Login