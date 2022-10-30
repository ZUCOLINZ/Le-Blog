import "./sidebar.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProfilePic from "../../assets/images/person3.jpg";

const Sidebar = () => {
  const [cats, setCats] = useState([]);
  const getCats = async () => {
    const res = await axios.get("/categories");
    setCats(res.data);
  };

  useEffect(() => {
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        {/* {post.photo && <img src={post.photo} alt="" />} */}
        <img src={ProfilePic} alt="" />
        <p>
          Onyeocha is passionate about Computer Science. He is a hard worker and
          a rational thinker who loves to logically deconstruct a problem to
          find innovative solutions. With a multi disciplinary approach in life,
          he always gives emphasis on being a team player and recognises how
          reliability can lead to success.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c, i) => (
            <Link key={i} to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-linkedin"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
