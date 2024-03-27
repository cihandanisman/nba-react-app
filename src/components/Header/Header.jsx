import React from "react";
import "./header.scss";




const Header = ({ data }) => {

  return (
    <div className="header">
      <div className="image">
        <img src="/assest/nba-logo.png" width={"200px"} alt="ss" />
      </div>
      <div className="legends">NBA Legends</div>
    </div>
  );
};

export default Header;
