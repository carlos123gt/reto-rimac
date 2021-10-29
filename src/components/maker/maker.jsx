import React from "react";
import "./maker.scss";
import MenuMaker from "./menu-maker";
import DetailMaker from "./detail-maker";
const Maker = () => {
  return (
    <>
      <div className="maker">
        <div className="contain-menu">
          <MenuMaker />
        </div>
        <div className="detail">
          <DetailMaker />
        </div>
      </div>
    </>
  );
};

export default Maker;
