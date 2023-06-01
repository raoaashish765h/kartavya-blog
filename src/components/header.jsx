import React, { useState } from "react";
import "./style.css"; 

function Header() {
  const [open, setOpen] = useState(false); // state for menu toggle

  // function to handle menu click
  const handleMenuClick = () => {
    setOpen(!open); // toggle open state
  };

  return (
    <section id="header">
      <nav>
        <div class="logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/D.E.M.O._Logo_2006.svg" />
        </div>
        <div class="search">
          <form>
            <input type="text" placeholder="Search" />
            <button type="submit">
              <i class="fa fa-search"></i>
            </button>
          </form>
        </div>
      </nav>
      <div class="menu">
        <ul class={`main-menu ${open ? "open" : ""}`}>
          <li>
            <a href="/">HOME</a>
          </li>
          <div class="vl"></div>
          <li>
            <a href="/about">ABOUT US</a>
          </li>
          <div class="vl"></div>
          <li>
            <a href="/themes">THEMES</a>
          </li>
          <div class="vl"></div>
          <li>
            <a href="#">PAGES</a>
          </li>
          <div class="vl"></div>
          <li>
            <a href="#footer">CONTACT US</a>
          </li>
        </ul>
        <span class="open-menu" onClick={handleMenuClick}>
          <i class="fa fa-bars"></i>
        </span>
      </div>
    </section>
  );
}

export default Header; // export the component