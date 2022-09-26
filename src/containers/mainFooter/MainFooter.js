import React from "react";
import footerLogo from "../../assets/companylogo/cropped-VERAUT-LOGO.png";
import "./MainFooter.scss";
import {
  Col,
  Container,
  Row,
} from "react-bootstrap";

const MainFooter = () => {
  return (
    <React.Fragment>
      <footer className="footer py-5 bg-dark text-white foot-pos">
        <Container>
          <div style={{ display: 'flex' }}>
            <hr className="bg-gray footer-line" />
            <div className="footeravatar"><img src={footerLogo} /></div>
            <hr className="bg-gray footer-line" />
          </div>
          <Row>
            <Col className="mb-md-2">
              <div
                className="d-flex text-center justify-content-center align-items-center"
                role="contentinfo"
              >
                <p className="font-weight-normal font-small mb-0 copyrightfont">
                  Copyright © www.veraut.com 2021-
                  <span className="current-year">2022</span>. <br></br> All rights
                  reserved.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default MainFooter;
