import React, { Component } from "react";
import "./css/Home.css";
import { rehearsalData } from "./rehearsalData";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="image-container">
          <img
            src="./src/assets/flagPicCrop.jpg"
            alt="Madison Community Band"
          />
        </div>
        <br></br>
        <br></br>
        <div className="main-content">
          <div className="bodyText">
            The Madison Community Band, a 501(c)(3) Nonprofit Public Charity,
            based in North Alabama, follows a long tradition of community bands.
            An all-volunteer organization, the band is comprised of musicians of
            all ages and backgrounds. The Madison Community Band performs
            annually for various events throughout the Tennessee Valley,
            including Huntsville’s Panoply of the Arts, Madison’s Gazebo
            Concerts, Decatur’s Concerts by the River, and the Host of Christmas
            Past Festival in Fayetteville , TN. We have also been honored to
            perform at the US Space and Rocket Center, the Lakeside Summer
            Concert Series in Guntersville and at Guntersville State Park.
          </div>
          <br></br>
          <br></br>
          <h1>See MCB In Concert!</h1>
          <div className="columnList-container">
            <div className="columnList-item">
              <div className="columnList-date">July 29, 2025</div>
              <div className="columnList-location">
                Grace United Methodist Church
              </div>
              <div className="columnList-location">Huntsville, AL</div>
              <div className="columnList-location">Call time – 6:30PM</div>
              <div className="columnList-location">
                Performance time – 7:00PM
              </div>
            </div>
            <div className="columnList-item">
              <div className="columnList-date">July 29, 2025</div>
              <div className="columnList-location">
                Grace United Methodist Church
              </div>
              <div className="columnList-location">Huntsville, AL</div>
              <div className="columnList-location">Call time – 6:30PM</div>
              <div className="columnList-location">
                Performance time – 7:00PM
              </div>
            </div>
            <div className="columnList-item">
              <div className="columnList-date">July 29, 2025</div>
              <div className="columnList-location">
                Grace United Methodist Church
              </div>
              <div className="columnList-location">Huntsville, AL</div>
              <div className="columnList-location">Call time – 6:30PM</div>
              <div className="columnList-location">
                Performance time – 7:00PM
              </div>
            </div>
          </div>
          {/* Rehearsals Section */}
          <h1>Come Rehearse With Us!</h1>
          <div className="columnList-container">
            {Object.keys(rehearsalData).map((month) => (
              <div key={month}>
                <h3>{month}</h3>
                {rehearsalData[month].map((rehearsal, index) => (
                  <div key={index} className="columnList-item">
                    <div className="columnList-date">{rehearsal.date}</div>
                    <div className="columnList-location">{rehearsal.type}</div>
                    <div className="columnList-location">
                      {rehearsal.location}
                    </div>
                    <div className="columnList-location">{rehearsal.time}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
