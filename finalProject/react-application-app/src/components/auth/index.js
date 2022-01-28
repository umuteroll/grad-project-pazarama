import {Navigate, Outlet} from "react-router-dom";

function RequireAuth() {

    const isAdmin = window.localStorage.getItem('isAdmin');  
    if (!isAdmin) {
      return <Navigate to="/admin" />;
    }
    return <Outlet />;
  }
  export default RequireAuth;