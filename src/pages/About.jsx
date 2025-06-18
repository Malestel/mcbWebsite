import React, { Component } from "react";
import "./css/standardStyle.css";
import "./css/About.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <h1>Who Are We?</h1>
        <br></br>
        <div className="bodyText">
          Founded in 1993, the Madison Community Band continues a long tradition
          of community bands by providing musical performance opportunities for
          its members and promoting and encouraging the arts community in
          Madison county and surrounding communities.  The band, which has grown
          from fifteen members to sixty-plus members, performs annually at
          community-wide events in Huntsville, Decatur and Guntersville,
          Alabama, as well as Fayetteville, Tennessee. Aptly named, the Madison
          Community Band is truly a “community” band. The band’s members come
          from a variety of backgrounds and represent a wide-range of ages, from
          middle school students to retirees. Nearly all of the band’s members
          have had previous ensemble experience, whether in high school, college
          or even professional ensembles. For many of the members, the Madison
          Community Band allows them to continue playing their instruments in a
          band setting, an opportunity that they would not have without the
          community band. The Madison Community Band is an all-volunteer
          organization uniting individuals of different ages and backgrounds for
          a common passion – musical performance!
        </div>
        <br></br>
        <br></br>
        <h1>Our Repertoire Includes</h1>
        <br></br>
        <div className="list">
          <ul className="list-container">
            <li>Traditional Marches</li>
            <li>Patriotic Music</li>
            <li>American Favorites</li>
            <li>Classical Favorites</li>
            <li>Broadway Tunes</li>
            <li>TV/Movie Themes</li>
            <li>Big Band Sounds</li>
            <li>Christmas Favorites</li>
          </ul>
        </div>
        <br></br>
        <br></br>
        <h1>Officers and Board of Directors</h1>
        <br></br>
        <div className="bodyText">
          <div>President – Vacant</div>
          <div>Vice President – Sara Ann Emerson</div>
          <div>Secretary/Treasurer – Robert Schwartz</div>
          <div>Librarian – Samuel Strong</div>
          <div>Music Director and Conductor– Dave Ryan</div>
        </div>
        <br></br>
        <br></br>
        <h1>Advisors to the Board</h1>
        <br></br>
        <div className="bodyText">Student Representative- Vacant</div>
        <br></br>
        <br></br>
        <h1>Rehearsal Location</h1>
        <br></br>
        <div className="bodyText">
          <div>Grace United Methodist Church</div>
          <div>2113 Old Monrovia Rd NW, Huntsville, AL 35806</div>
        </div>
        <br></br>
        <br></br>
        <h1>Scholarship Program</h1>
        <br></br>
        <div className="bodyText">
          The Madison Community Band honors the contributions of its youngest
          members through a scholarship program. The $500{" "}
          <a href="./src/resources/MCB-Scholarship-Program-Requirements-20230201.pdf">
            scholarship
          </a>{" "}
          is awarded annually to a junior or senior student.
        </div>
        <br></br>
        <br></br>
      </div>
    );
  }
}
