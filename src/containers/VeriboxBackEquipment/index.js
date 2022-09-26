import React from "react";
import VeriBoxImage from "../../assets/elements/VERIBOX-MINI-1024x175.png";
import "./style.scss";

const VeriboxBackEquipment = () => {
  return (
    <>
      <div
        style={{ backgroundImage: "url(./assets/thumbnail_IMG_0309-1.jpg)" }}
        className="backequip"
      >
        <div className="slideshow_page">
          <div className="slideshowSlider_page">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100vh",
                backgroundColor: "#141414a6"
              }}
            >
              <div className="veribox_st">
                <img src={VeriBoxImage} alt="veribox" className="veriboxMini_image"/>
                <div className="ATex">ATEX data logger for remote reading (ZFA)</div>
              </div>
              <video
                className="elementor-video"
                src="http://www.veraut.com/wordpress/wp-content/uploads/2021/03/VERIBOX_Explainer_Video.mp4"
                autoPlay={"autoplay"}
                controls
                muted
                preLoad="auto" loop
              ></video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default VeriboxBackEquipment;
