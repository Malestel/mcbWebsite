import React, { Component } from "react";
import "./css/standardStyle.css";

export default class DressCode extends Component {
  render() {
    return (
      <div className="main-content">
        <h1>MCB Dress Code</h1>
        <h3>Attire Definitions</h3>
        <div className="list">
          <ul className="list-container">
            <li>
              Formal – Ladies: Black modest dress or top pants, black dress
              shoes / Men: Black pants dress shoes, black shirt
            </li>
            <li>Summer – band polo, khaki pant or Capris, closed shoe</li>
            <li>
              Christmas – Ladies: Black modest dress or top & pants, black dress
              shoes / Men: Black shirt, pants and dress shoes. A top or sweater
              of seasonal color may be worn if desired. Santa hat is optional.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
