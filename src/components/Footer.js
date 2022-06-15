import React from "react";
import pdf from "./resume/Jeremy.Stegall.Resume.pdf";

function Footer() {
  return (
    <div className="button">
      <a href={pdf} download="./resume/Jeremy.Stegall.Resume.pdf">
        <button className="btn btn-primary">
          <i className="fa fa-download"></i> Download Resume
        </button>
      </a>
    </div>
  );
}

export default Footer;
