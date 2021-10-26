import React from "react";
import js from "../Images/js.jpg";
import pdf from "../resume/resume.pdf";
import html from "../Images/html.jpeg";
import bootstrap from "../Images/bootstrap.jpeg";
import css from "../Images/css.jpeg";
import javascript from "../Images/javascript.jpeg";
// import node from "../Images/node.jpeg";
import react from "../Images/react.jpeg";
// import post from "../Images/post.jpeg";
// import sqlz from '../Images/sqlz.jpeg';

function Main() {
  return (
    <div className="jumbotron text-center main">
      <div className="row">
        <h4 className="col-12 col-lg-3">Life Student</h4>
        <h4 className="col-12 col-lg-3">Musician</h4>
        <h4 className="col-12 col-lg-3">Coffee Enthusiast</h4>
        <h4 className="col-12 col-lg-3">Coder</h4>
      </div>
      <br />
      <br />
      <div className="row">
        <div className="col-12 col-lg-3 ">
          <img className="img-circle" src={js} alt="" title="Mushroom Road" />
        </div>
        <div className="col-sm-12 col-lg-3">
          <p>
            I am a life long musician and performer who thrives in collaborative
            environments that challenge my intellect and creativity.
            &nbsp;Looking for flexible career paths that incorporate both, I
            discovered web design & development and began teaching myself HTML,
            CSS, Bootstrap and JavaScript. &nbsp;I then decided to further my
            education by attending DigitalCrafts Full-Stack software development
            program. &nbsp;I am currently a GDOT constrcution project manager.
          </p>
        </div>
        <div className="col-sm-12 col-lg-3">
          <p>
            In the past, computer programming and web design &amp; development
            were not possible career paths for anyone without a 4 year degree in
            graphic design or computer science, however; With the ever growing
            need for competent full-stack engineers, and with the advent of
            online tutorials and coding bootcamps, I began to see breaking into
            this ever growing industry to be more attainable.
          </p>
        </div>
        <div className="col-lg-3">
          <p>
            Aside from the lucrative and near-limitless career prospects that
            the tech world has to offer, my main goal is to continue to learn
            and grow as I evolve into a well rounded full-stack developer while
            maintaining a healthy work/life balance.
          </p>
        </div>
      </div>
      <br />

      <div className="row skills">
        <div className="col-lg-4 col-4">
          <img src={html} alt="" />
        </div>
        <div className="col-lg-4 col-4">
          <img src={css} alt="" />
        </div>
        <div className="col-lg-4 col-4">
          <img src={bootstrap} alt="" />
        </div>
      </div>
      <div className="row skills">
        <div className="col-lg-4 col-4">
          <img src={javascript} alt="" />
        </div>
        {/* <div className="col-lg-4 col-4"><img src={node} alt="" /></div> */}
        <div className="col-lg-4 col-4 react">
          <img src={react} alt="" />
        </div>
      </div>
      <div className="row skills">
        {/* <div className="col-lg-4 col-4">
          <img src={post} alt="" />
        </div> */}
      </div>

      <a href={pdf} download="./public/resume/resume.pdf">
        <button className="btn btn-primary">
          <i className="fa fa-download"></i> Download Resume
        </button>
      </a>
    </div>
  );
}

export default Main;
