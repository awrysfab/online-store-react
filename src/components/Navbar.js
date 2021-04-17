import React from "react";
import { useHistory } from "react-router-dom";
import { deleteToken } from "../utils/Common";

function Navbar() {
  let history = useHistory();
  const handleLogout = () => {
    deleteToken();
    history.push('/login');
  };

  return (
    <div>
      <nav className="navbar bg-light justify-content-between">
        <h1>Online Store</h1>
        <button className="btn-danger" onClick={handleLogout}>Logout</button>
      </nav>
    </div>
  )
}

export default Navbar;