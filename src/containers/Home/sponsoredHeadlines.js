import React, { useEffect, useState } from "react";
import "../../assets/sass/theme.scss";
import "../../assets/sass/responsive.scss";
import "../../assets/sass/bootstrap.min.css";
import "../../assets/sass/range.scss";
// import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
// import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
import VeriBox from "../../assets/elements/VERIBOXMINI.png";
import IoTPanel from "../../assets/elements/Narrowband-IoT-small-ot4x7bkubkllbcsxo4jo2xt59av89myw5hup3iu6ds.png";
import TownCom from "../../assets/elements/town.png";
import VERIBOX_MINI from "../../assets/elements/VERIBOX-MINI-1024x175.png";
import NB_IOT from "../../assets/elements/VERIBOX-NBiOT-1024x200.png";
import VERI_COM from "../../assets/elements/VERICOM-2-1024x264.png";
import {
  Card,
  Col,
  Row,
} from "react-bootstrap";

const SponsoredHeadlines = () => {
  return (
    <React.Fragment>
      <Row className="mt-4 pt-4 mb-4 homepagesponsored-headlines with-changed-view justify-content-md-center">
        <Col lg={4} xs={12} style={{ padding: "30px" }}>
          <div className="gap-space"></div>
          <Card border="light" className="shadow-sm  custom-card">
            <img src={VeriBox} alt="veribox"></img>
            <img src={VERIBOX_MINI} alt="veri_mini"></img>
            <div className="veribox">VERIBOX-MINI is a battery-operated,<br /> ATEX ExZone 1-certified data logger with<br /> integrated 4G-LTE communication for<br /> remote meter reading of measuring<br /> devices and electronic volume correctors.<br /> (AMR).</div>
          </Card>
        </Col>
        <Col lg={4} xs={12} className="col-gap" style={{ padding: "30px" }}>
          <div className="gap-space"></div>
          <Card border="light" className="shadow-sm  custom-card">
            <img src={IoTPanel} alt="veribox"></img>
            <img src={NB_IOT} alt="nb-iot"></img>
            <div className="veribox">
              NB-IoT-Box is a sophisticated data<br /> collection device ideal for smart metering<br /> applications in almost any situation<br /> imaginable.
            </div>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default SponsoredHeadlines;
