import "./style.scss";
import {
  Card,
  Col,
  Row,
  Container
} from "react-bootstrap";
const CompanyFeedback = () => {
  return (
    <div>
      <div className="titlefeedback">
        Our feedback
      </div>
      <div className="feedback_col">
        <Container>
          <Row className="justify-content-md-center">
            <Col md={3} xs style={{ padding: "10px" }}>
              <Card border="light" className="shadow-sm  custom-card">
                <div className="feedcol">

                  The VERIBOX-MINI ATEX data logger has been installed at the Wiener Gasnetzes since 1996 for the remote reading of large gas customers and we are completely enthusiastic about the remote meter reading solution from VERAUT. Right from the start, there were no problems with the transmission or reading of the external meters or volume correctors.

                </div>
                <div className="review_product">
                  Mr. Schwaab
                </div>
                <div className="review_company">
                  Head of Gas Div.
                </div>
              </Card>
            </Col>
            <Col md={4} xs style={{ padding: "10px" }}>
              <Card border="light" className="shadow-sm  custom-card">
                <div className="feedcol">
                  VERIBOX-MINI is a working automatic meter reading solution. Once installed, the devices run without interference since time of installation. We only replace the batteries after 6 years of operation.VERIBOX-MINI is the best remote meter reading solution we have installed so far. Since the installation many years ago, the battery-powered devices have been running trouble-free in daily field use.
                </div>
                <div className="review_product_special">
                  Mr. Spitzer
                </div>
                <div className="review_company">
                  CEO
                </div>
              </Card>
            </Col>
            <Col md={3} xs style={{ padding: "10px" }}>
              <Card border="light" className="shadow-sm  custom-card"><div className="feedcol">
                VERICOM is an intelligent smart metering solution that is manufacturer-independent and runs absolutely stably in the field. Due to the meshed network, a reading of 100% of the meters or measuring devices can be implemented. Each radio node increases the range of the entire radio network.
              </div>
                <div className="review_product_special">
                  Mr Betz
                </div>
                <div className="review_company">
                  Manager
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
export default CompanyFeedback;