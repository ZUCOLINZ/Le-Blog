import React from "react";

const Write = () => {
  return (
    <div className="write">
      <form className="writeForm">
        <div className="writeformGroup">
          <label htmlFor=""></label>
          <input type="file" id="fileInput" />
          <input type="text" id="Title" />
        </div>
      </form>
    </div>
  );
};

export default Write;
