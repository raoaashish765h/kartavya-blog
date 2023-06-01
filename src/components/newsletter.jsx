import React from 'react';
import "./style.css";

function Newsletter() {
  return (
    <section id='footer'>
    <div className="newsletter">
      <div className="head">
        <span></span>
        <span>Join Our<br />Newsletter</span>
      </div>
      <div className="form">
        <form>
          <div className="name">
            <input type="text" id="fname" name="fname" placeholder="First Name" />
            <input type="text" id="lname" name="lname" placeholder="Last Name" />
          </div>
          <input type="email" id="email" name="email" placeholder="Email Address" />
          <label htmlFor="checkbox">Can we email you?</label>
          <div className="check">
            <input type="checkbox" id="checkbox" name="checkbox" />
            <span>Yes I'd like to recieve marketing email is from the future</span>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </section>
  );
}

export default Newsletter;
