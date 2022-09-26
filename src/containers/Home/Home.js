import React from "react";
import "./home.css";
import CommonHeader from "../../components/Header/CommonHeader";
// import StartupBreeders from "../../components/StartupBreeders";
import IntroCategory from "../../containers/IntroCategory";
import { Col, Container, Row } from "react-bootstrap";
import MainFooter from "../mainFooter/MainFooter";
import WelcomeVeraut from "../../containers/WelcomeVeraut";
import SkeletonLeft from "../../assets/img/skeleton.png";
import SkeletonRight from "../../assets/img/skeleton1.png";
import Fade from "react-awesome-reveal";
import SponsoredHeadlines from "./sponsoredHeadlines";
import CompanyFeedback from "../../containers/CompanyFeedback";
import ContactForm from "../../containers/ContactForm";
import ContactAddress from "../../containers/ContactAddress";
import BackEquipment from "../../containers/BackEquipment"

const colors = ["actemiumPortugal", "camuzzi", "Diehl", "diewerkeschweiz", "EMT", "Energie_AG", "Energie360", "EnergieBGLDBegas", "EnergieStmk", "eON-Hungary", "eww", "gasNatural", "Giwog", "imbema", "LinzAG", "MetroGas", "micromax_australia", "microsegur", "NetzOOE", "SensoNetHU", "Soxis", "stgallenstadtwerke", "VIWA", "waternsw", "wgetechCroatia", "WienerNetze"];
const dotcolors = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"];
const delay = 2500;
const Home = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 2 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <React.Fragment>
      <CommonHeader />
      <BackEquipment />
      {/* <h1>sdfsdfsd</h1> */}
      <div className="gap_set"></div>
      <div className="main pb-4 mt-4">
        <img src={SkeletonLeft} className="skeletonleft" alt="skeleton-left" />
        <img src={SkeletonRight} className="skeletonright" alt="skeleton-right" />
        <IntroCategory />
        <div className="gap_bt"></div>
        <WelcomeVeraut />
        <Container style={{ width: "1550px!important" }}>
          <SponsoredHeadlines />
        </Container>
        <Container fluid>
          <Row className="mx-0 mb-5">
            <Col>
              <div className="find-partner">
                <div className="spring-flex-aspiring">
                  <Fade direction="up">
                    <div className="spring-sponsored-role">
                      <h2 className="section-title">
                        Some of Our Product Users
                      </h2>
                    </div>
                  </Fade>
                </div>
                <div className="slideshow">
                  <div
                    className="slideshowSlider"
                    style={{ transform: `translate3d(${-index * 500}px, 0, 0)` }}
                  >
                    {colors.map((backgroundColor, index) => (
                      <div
                        className="slide"
                        key={index}
                      >
                        <img src={`./assets/${backgroundColor}.png`} alt={backgroundColor}/>
                      </div>
                    ))}
                  </div>

                  <div className="slideshowDots">
                    {dotcolors.map((_, idx) => (
                      <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                          setIndex(idx);
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <CompanyFeedback />
        <div className="gap_bt"></div>
        <ContactForm />
        <div className="gap_bt"></div>
        <ContactAddress />
        {/* <StartupBreeders /> */}
      </div>
      <MainFooter />
    </React.Fragment>
  );
};
export default Home;
