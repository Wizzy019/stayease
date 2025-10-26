import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext"


function ProtectedRoute({ children, allowedRoles }) {

    const { user } = useAuth();

    if(!user){
        return <Navigate to="/login" replace /> // Go back to login page -- not logged in
    }

    if (allowedRoles && !allowedRoles.includes(user.role)){
        return <Navigate to={`/dashboard/${user.role}`} replace />
    }

  return children
}

export default ProtectedRoute
