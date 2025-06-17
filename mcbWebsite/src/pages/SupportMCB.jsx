import React, { Component } from "react";
import "./css/standardStyle.css";

export default class SupportMCB extends Component {
  render() {
    return (
      <div className="main-content">
        <h1>How Can You Support Us?</h1>
        <br></br>
        <br></br>
        <div className="bodyText">
          The Madison Community Band is a{" "}
          <a href="./src/resources/mcb_irs_determination_letter.jpg">
            501(c)(3) Nonprofit Public Charity
          </a>{" "}
          . As a tradition, the band does not typically charge admission to
          concerts. The band is funded in part by donations from organizations
          and individuals. This funding allows the band to purchase new music,
          stands, instruments, and other necessary items. It also allows the
          band to provide additional free concerts for the community, to host
          guest musician visits to local schools, and to provide scholarships to
          high school students who are members of the band. If you have enjoyed
          the music of the Madison Community Band, we invite you to become a
          supporter of the band.
        </div>
        <br></br>
        <br></br>
        <h2>Federal Tax ID: 63-1103823</h2>
        <br></br>
        <br></br>
        <div className="bodyText">
          To make a donation to the band, please make your check to the payment
          of “Madison Community Band” and send it to:
        </div>
        <br></br>
        <h2>Madison Community Band</h2>
        <h2>P.O. Box 1214</h2>
        <h2>Madison, AL 35758</h2>
      </div>
    );
  }
}
