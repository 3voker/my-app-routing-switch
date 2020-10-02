import React from "react";

import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/clock">Clock</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>
          <Link to="/something">Something </Link>
        </li>
      </ul>
    </div>
  );
}

//export default Navigation;
