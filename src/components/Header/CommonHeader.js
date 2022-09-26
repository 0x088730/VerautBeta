import React from "react";
import LogoImage from "../../assets/companylogo/cropped-VERAUT-LOGO.png";
import UKimg from "../../assets/flag/uk.png";
import GRimg from '../../assets/flag/gr.png'
import { Link } from "react-router-dom";
import "./Header.css";
import {
  Badge,
  Container,
  Nav,
  Navbar,
  NavDropdown
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";


const CommonHeader = () => {
  const [show, setShow] = useState(false);
  const showDropdown = (e)=>{
      setShow(!show);
  }
  const hideDropdown = e => {
      setShow(false);
  }
    return (
      <React.Fragment>
        <section className="default-toggle">
          <div className="mobile_menu">
            <Link to="#" id="one">
              <i className="fa fa-bars" style={{ color: "white", padding: "10px" }}></i>
            </Link>
            <Link to="#" id="two">
              <i className="fa fa-times"></i>
            </Link>
          </div>
          <div className="nav_menu_content">
            <div id="mySidenav" className="sidenav">
              <ul id="main-menu" className="sm sm-clean">
                <>
                  <li>
                    <Link title="How it works?" to="/#">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link title="Build Your dream" to="/#">
                      Products
                    </Link>
                  </li>

                  <li>
                    <Link title="Contact" to="/#">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link title="Our Mission" to="/#">
                      Downloads
                    </Link>
                  </li>
                </>
              </ul>
            </div>
          </div>
        </section>

        {/* React nav  */}
        <Navbar bg="light" expand="lg" className="w-100" fixed="top">
          <Container fluid>
            <Link className="navbar-brand" to="/">
              <img src={LogoImage} alt="logo" className="logoImage" />
            </Link>
            {process.env.NODE_ENV === 'production' ? <Badge
              className="ms-4 px-3 custom-badge"
              bg="warning"
            >
              Beta Version
              <span className="animate-flicker">
                (No Trading &amp; Communication)
              </span>
            </Badge> : <></>}
            <>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <NavLink
                    exact
                    activeClassName="active"
                    title="How it works?"
                    className="nav-link "
                    to="#"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    exact
                    activeClassName="active"
                    title="How it works?"
                    className="nav-link "
                    to="/#"
                  >
                    Products
                  </NavLink>
                  <NavDropdown title="Product" id="basic-nav-dropdown" alignLeft
                    // eslint-disable-next-line react/jsx-no-duplicate-props
                    // id="collasible-nav-dropdown"
                    show={show}
                    onMouseEnter={showDropdown}
                    onMouseLeave={hideDropdown}
                  >
                    <NavDropdown.Item href="/veribox">VERIBOX – MINI Auhrefmatic Meter Reading (AMR)</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/smartsystem">NARROWBAND IoT – Smart Metering System</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/vericom">VERICOM – Smart Metering Solution via radio SubGhz Mesh-Network</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/verilog">VERILOG – Meter Data Management & Software Solution</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/verismart">VERISMART – Energy Facility Management</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/silomeasure">MOBILE SILO – Silo-Level-Measurement and Communication</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/trafficlight">AM.COM – Automatic Traffic Light „Green“ Switcher</NavDropdown.Item>
                  </NavDropdown>
                  <NavLink
                    activeClassName="active"
                    title="Contact"
                    className="nav-link "
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                  <NavLink
                    exact
                    activeClassName="active"
                    title=" Our Mission"
                    className="nav-link "
                    to="/#"
                  >
                    Downloads
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
              <div className="authbutton">
                <div className="form-inline my-2 my-lg-0 nav-btns">
                  <img src={UKimg} alt="uk"></img>
                </div>
                <div className="form-inline my-2 my-lg-0 nav-btns">
                  <img src={GRimg} alt='gr'></img>
                </div>
              </div>
            </>

          </Container>
        </Navbar>
      </React.Fragment>
    );

}

export default CommonHeader;
