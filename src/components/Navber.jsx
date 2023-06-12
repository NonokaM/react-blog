import React from 'react';
import { Link } from "react-router-dom";
import "./Navber.css";

const Navber = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/createpost">CreateBlog</Link>
        <Link to="/login">Login</Link>
    </nav>
  )
}

export default Navber
