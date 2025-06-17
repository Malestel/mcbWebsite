import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import About from "../pages/About";
import Home from "../pages/Home";
import JoinMCB from "../pages/JoinMCB";
import Members from "../pages/Members";

export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="dark" fixed="top" variant={"dark"} expand="lg">
            <Navbar.Brand href="/home">Madison Community Band</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About Us
                </Nav.Link>
                <Nav.Link as={Link} to="/joinMCB">
                  Join MCB
                </Nav.Link>
                <Nav.Link as={Link} to="/Members">
                  Members
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Default route */}
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/joinMCB" element={<JoinMCB />} />
            <Route path="/members" element={<Members />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
