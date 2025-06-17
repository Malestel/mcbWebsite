import React, { Component } from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import About from "../pages/About";
import Home from "../pages/Home";
import JoinMCB from "../pages/JoinMCB";
import Members from "../pages/Members";
import Scholarship from "../pages/Scholarship";

export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="dark" fixed="top" variant="dark" expand="lg">
            <div className="container-fluid">
              <Navbar.Brand href="/home">Madison Community Band</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
                  <Nav.Link as={Link} to="/home">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about">
                    About Us
                  </Nav.Link>
                  <Nav.Link as={Link} to="/joinMCB">
                    Join MCB
                  </Nav.Link>
                  <Nav.Link as={Link} to="/members">
                    Members
                  </Nav.Link>
                  {/* Dropdown for Members */}
                  <Dropdown align="end">
                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                      Member Resources
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        href="/src/resources/mcbbylaws_20230201.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        By-Laws
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="/src/resources/mcb_irs_determination_letter.jpg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        IRS Determination Letter
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/scholarship">
                        MCB Scholarship Program
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/joinMCB" element={<JoinMCB />} />
            <Route path="/members" element={<Members />} />
            <Route path="/scholarship" element={<Scholarship />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
