import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <header>
        <h1>Blogger's paradise</h1>
      </header>

      <ul>
        <li>
          <Link to="/"> New Post</Link>
        </li>
        <li>
          <Link to="/displaypost">View Post</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
