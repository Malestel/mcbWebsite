import React, { Component } from "react";
import "./css/standardStyle.css";
import "./css/JoinMCB.css";

export default class JoinMCB extends Component {
  render() {
    return (
      <div>
        <h2>Want To Join MCB?</h2>
        <br></br>
        <div className="bodyText">
          If you are interested in joining the “100 Acre Band” i.e. the Madison
          Community Band and have at least two years of playing experience or
          private lessons, we need YOU! All sections are open to new members.
          Students are always welcome and encouraged to join us! There are no
          audition requirements or dues to join MCB so what are you waiting for?
          Contact me today and let me know you are interested. Oh, and “thanks
          for noticing us!”
        </div>
        <br></br>
        <br></br>
        <h2>
          For more information about the band or for booking information,
          contact:
        </h2>
        <br></br>
        <div className="bodyText">
          <div>Dave Ryan Music Director and Conductor</div>
          <div>Phone: 256-617-9484</div>
          <div>Email: dsryan@knology.net </div>
        </div>
        <br></br>
        <br></br>
        <div className="button-group">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSf6ssBEUxhA6uNVBkeMdUtcD1DVGj7BDDOVE6ZlyiBHA3TZhg/viewform">
            <button>Join The Madison Community Band</button>
          </a>
          <a href="https://m-c-b.us15.list-manage.com/subscribe?u=c342db6d9f9b63557824cf001&id=4f83bf165a">
            <button>Join Our Mailing List</button>
          </a>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <h2>
          The Madison Community Band is a{" "}
          <a href="./src/resources/mcb_irs_determination_letter.jpg">
            501(c)(3) Nonprofit Public Charity
          </a>{" "}
        </h2>
      </div>
    );
  }
}
