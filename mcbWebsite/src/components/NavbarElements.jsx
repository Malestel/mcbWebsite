import React, { Component } from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./css/NavBarElements.css";

import About from "../pages/About";
import Home from "../pages/Home";
import JoinMCB from "../pages/JoinMCB";
import Members from "../pages/Members";
import Scholarship from "../pages/Scholarship";
import DressCode from "../pages/DressCode";
import SupportMCB from "../pages/SupportMCB";

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
                      <Dropdown.Item as={Link} to="/DressCode">
                        Dress Code
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
                  <Dropdown align="end">
                    <Dropdown.Toggle
                      className="bg-dark text-light border-0"
                      id="dropdown-basic"
                    >
                      Archive
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        href="/src/resources/mcbbylaws_20230201.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Past Performances
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/DressCode">
                        News Archive
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="/src/resources/mcb_irs_determination_letter.jpg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Photo Archive
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Nav.Link as={Link} to="/supportMCB">
                    Support MCB
                  </Nav.Link>
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
            <Route path="/dresscode" element={<DressCode />} />
            <Route path="/supportMCB" element={<SupportMCB />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
