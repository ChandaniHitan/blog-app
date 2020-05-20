import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <header>
        <h1 className="heading">Blogger's paradise</h1>
        <nav>
        <ul>
        <li>
          <Link to="/"> New Post</Link>
        </li>
        <li>
          <Link to="/displaypost">View Post</Link>
        </li>
      </ul>
        </nav>
      
      </header>

      
    </div>
  );
}

export default Header;
