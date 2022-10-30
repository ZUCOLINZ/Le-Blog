import Heropic from "../../assets/images/everst.jpg";

import "./header.css";
import React, { useState } from "react";


const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">ZucoBlog & ShowLife</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src={Heroic} alt="" />
    </div>
  );
};

export default Header;
