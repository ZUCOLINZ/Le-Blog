import Heropic from "../../assets/images/everst.jpg";

import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src={Heropic} alt="" />
    </div>
  );
};

export default Header;
