import React, { Component } from "react";
import "./css/standardStyle.css";
import "./css/Members.css";
import { membersList } from "./data/membersData";

export default class Members extends Component {
  render() {
    return (
      <div className="main-content">
        <div className="bodyText">
          The uniqueness of the Madison Community Band can be seen in the
          diversity of its membership. Members range from middle school students
          to retirees. This diversity gives the Madison Community Band a real
          “family” atmosphere. We believe that each member plays a significant
          role in the success of the group and all are treated accordingly.
        </div>
        <br></br>
        <br></br>
        <h1>Our Members</h1>

        {/* Dynamically Render Member Sections */}
        <div className="columnList-container">
          {membersList.map((section, index) => (
            <div key={index} className="columnList-item">
              <div className="columnList-date">{section.section}</div>
              {section.members.map((name, nameIndex) => (
                <div key={nameIndex} className="columnList-location">
                  {name}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
