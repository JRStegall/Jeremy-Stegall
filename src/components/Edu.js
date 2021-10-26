import React from "react";
import { Route } from "react-router";

function Education() {
  return (
    <div className="col-sm-12 col-lg-6 main">
      <div className="container">
        <h3>Coding Education</h3>
        <br />
        <h4>DigitalCrafts- Atlanta, GA</h4>

        <div className="row">
          <div className="col-12">
            <em>
              DigitalCrafts is Atlanta's premiere software development bootcamp
              and has been educating coders since 2015.
            </em>{" "}
          </div>
        </div>
        <br />
        <hr />

        <div className="row">
          <div className="col-4">HTML5</div>
          <div className="col-4">CSS3</div>
          <div className="col-4">JavaScript</div>
        </div>

        <div className="row">
          <div className="col-4">React</div>
          <div className="col-4">Express</div>
          <div className="col-4">Node.js</div>
        </div>

        <div className="row">
          <div className="col-4">PostgreSQL</div>
          <div className="col-4">UI/UX</div>
          <div className="col-4">Full-Stack Engineering</div>
        </div>
        <br />
        <hr />

        <h4>Other Educational Avenues</h4>

        <div className="row">
          <div className="col-sm-12 col-lg-4">LinkedIn Learning</div>
          <div className="col-sm-12 col-lg-4">Codecademy</div>
          <div className="col-sm-12 col-lg-4">FreeCodeCamp.org</div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-4">W3schools.com</div>
          <div className="col-sm-12 col-lg-4">WDN Web Docs</div>
          <div className="col-sm-12 col-lg-4">Learn-js.org</div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-6">Udemy.com</div>
          <div className="col-sm-12 col-lg-6">Lynda.com</div>
        </div>
      </div>
    </div>
  );
}

let Edu = () => (
  <div>
    <Route path="/edu" component={Education} />
  </div>
);

export default Edu;
