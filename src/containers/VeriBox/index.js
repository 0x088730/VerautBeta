import CommonHeader from "../../components/Header/CommonHeader";
import VeriBoxBackEquipment from "../../containers/VeriboxBackEquipment";
import VeriBoxMiniPoster from "../VeriBoxMiniPoster";
import React, {useState, useEffect} from "react";
const VeriBox = () => {
  return (
    <>
      <CommonHeader />
      <VeriBoxBackEquipment />
      <VeriBoxMiniPoster />
    </>
  )
}
export default VeriBox;
