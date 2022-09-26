import React from "react";
import "./style.scss";


const delay = 2500;

const BackEquipment = () => {
  return (
    <>
      <div style={{ backgroundImage: "url(./assets/thumbnail_IMG_0309-1.jpg)" }} className="backequip">
        <div className="slideshow_page">
          <div
            className="slideshowSlider_page"
          >
              <div
                className="slide1"
              >
                <h1 className="equip_advertise">You cannot CONTROL what you cannot MEASURE !</h1>
                {/* <img src={`./assets/${backgroundColor}.png`} alt={backgroundColor} /> */}
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default BackEquipment;