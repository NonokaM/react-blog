import React from 'react';
import { Link } from "react-router-dom";
import "./Navber.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFilePen, faArrowRightToBracket, faUserAlt } from '@fortawesome/free-solid-svg-icons'



const Navber = ({ isAuth }) => {
  return (
    <nav>
        <Link to="/"><FontAwesomeIcon icon={faHouse} />Home</Link>
        {!isAuth ? (
          <Link to="/login"><FontAwesomeIcon icon={faArrowRightToBracket} />Login</Link>
        ) : (
          <>
            <Link to="/createpost"><FontAwesomeIcon icon={faFilePen} />CreateBlog</Link>
            <Link to="/mypage"><FontAwesomeIcon icon={faUserAlt} />MyPage</Link>
            <Link to="/logout"><FontAwesomeIcon icon={faArrowRightToBracket} />Logout</Link>
          </>
        )}
    </nav>
  )
}

export default Navber
