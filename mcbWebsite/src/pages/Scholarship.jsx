import React, { Component } from "react";
import "./css/Members.css";
import { membersList } from "./membersData";

export default class Scholarship extends Component {
  render() {
    return (
      <div className="main-content">
        <h1>Scholarship Program</h1>
        <div className="bodyText">
          The Madison Community Band honors the contributions of its youngest
          members through a scholarship program. The $500 scholarship is awarded
          annually to a junior or senior student.
        </div>
        <br></br>
        <div className="button-group">
          <a href="./src/resources/MCB-Scholarship-Program-Requirements-20230201.pdf">
            <button>Click For More Information</button>
          </a>
        </div>
      </div>
    );
  }
}
