import React from "react";
import "./virtual.css";
import shade from "../../assets/shade.png";
import ReactCompareImage from "react-compare-image";
import Before from "../../assets/before.png";
import After from "../../assets/after.png";

const Virtual = () => {
  return (
    <div className="virtual">
      <div className="vLeft">
        <span>Virtual Try-On</span>
        <span>Never buy the wrong shade again</span>
        <span>Try Now!</span>
        <img src={shade} alt="shadeImage" />
      </div>
      <div className="vRight">
        <div className="vWrapper">
          <ReactCompareImage leftImage={Before} rightImage={After} />
        </div>
      </div>
    </div>
  );
};

export default Virtual;
