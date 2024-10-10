import React from "react";
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <nav>
        <div class="company">
            <p>Penta<span class="colorSpan">ligence</span></p>
        </div>
      <ul>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/userProfile">User Profile</a>
      </ul>
    </nav>
  );
}

export default NavBar;
