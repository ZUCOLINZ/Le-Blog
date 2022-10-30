import "./single.css";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import React, { useState } from "react";


const Single = () => {
  return (
    <div className="single">
      {/* post    */}
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default Single;
