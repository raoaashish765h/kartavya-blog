import React from 'react';
import "./style.css";

function Footer() {
  return (
    <section id='footer'>
    <div className="foot">
      <div className="float">
        <a href="">  home  </a>
        <span>
          Visit <span id="blue">meity.gov.in</span> to know more
        </span>
        <span></span>
      </div>
      <div className="er">
        <div className="govt">
          <img src="images/g830.png" />
        </div>
        <div className="links">
          <span>IMPORTANT LINKS</span>
          <ul>
            <li>
              <a href="">
                <img src="images/group_12.png" alt="" />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="">
                <img src="images/group_12.png" alt="" />
                <span>About us</span>
              </a>
            </li>
            <li>
              <a href="">
                <img src="images/group_12.png" alt="" />
                <span>Verticals</span>
              </a>
            </li>
            <li>
              <a href="">
                <img src="images/group_12.png" alt="" />
                <span>Quiz</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <span>CONTACT US</span>
          <ul>
            <li>
              <a href="https://goo.gl/maps/7T4suYrShDzS6ckY9?coh=178573&entry=tt">
                <img src="images/group_12.png" alt="" />
                <span>Electronics Niketan, 6, CGO Complex, Lodhi Road, New Delhi-110003</span>
              </a>
            </li>
            <li>
              <a href="tel:+911124361756">
                <img src="images/group_12.png" alt="" />
                <span>+91-11-24361756</span>
              </a>
            </li>
            <li>
              <a href="mailto:webmaster@meity.gov.in">
                <img src="images/group_12.png" alt="" />
                <span>webmaster@meity.gov.in</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="counter">
          <span>Visitor Count</span>
          <div className="counts">
            <ul>
              <li><span>5</span></li>
              <li><span>9</span></li>
              <li><span>1</span></li>
              <li><span>2</span></li>
              <li><span>7</span></li>
            </ul>
          </div>
          <div className="socials">
            <ul>
              <li><a href=""><i className="fa fa-facebook"></i></a></li><div className="soci-vi"></div><li><a href=""><i className="fa fa-twitter"></i></a></li><div className="soci-vi"></div><li><a href=""><i className="fa fa-linkedin"></i></a></li><div className="soci-vi"></div><li><a href=""><i className="fa fa-instagram"></i></a></li><div className="soci-vi"></div><li><a href=""><i className="fa fa-youtube"></i></a></li></ul></div></div></div></div>
              </section>
              );
}

export default Footer;
