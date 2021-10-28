import { Route } from "react-router";
import Carousel from "react-bootstrap/Carousel";
import ListGroup from "react-bootstrap/ListGroup";
import FllStk from "../Images/fullstack.jpeg";
import UIUX from "../Images/uiux.jpeg";
import HTML from "../Images/html.jpeg";
import CSS from "../Images/css.jpeg";
import JScript from "../Images/javascript.jpeg";
import RCT from "../Images/react.jpeg";
import NDE from "../Images/node.png";
import EXP from "../Images/node.jpeg";
import PST from "../Images/post.jpeg";
import BTSTP from "../Images/bootstrap.jpeg";

function Education() {
  return (
    <div className="col-sm-12 col-lg-6 main">
      <div className="container edu-container">
        <h3>Coding Education</h3>
        <br />
        <h5>DigitalCrafts- Atlanta, GA</h5>
        <p>May 2020 - December 2020</p>

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

        <div>
          <div className="container-fluid ">
            <Carousel fade interval={5000} keyBoard={false} pauseOnHover={true}>
              <Carousel.Item>
                <img
                  className="d-block w-100 fllstk"
                  src={HTML}
                  alt="HTML"
                ></img>
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100 fllstk" src={CSS} alt="CSS"></img>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 fllstk"
                  src={BTSTP}
                  alt="Bootstrap"
                ></img>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 fllstk"
                  src={JScript}
                  alt="JScript"
                ></img>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 fllstk"
                  src={RCT}
                  alt="React"
                ></img>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 fllstk"
                  src={UIUX}
                  alt="UI/UX"
                ></img>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 fllstk"
                  src={NDE}
                  alt="Node"
                ></img>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 fllstk"
                  src={EXP}
                  alt="Express"
                ></img>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 fllstk"
                  src={PST}
                  alt="PostgreSQL"
                ></img>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 fllstk"
                  src={FllStk}
                  alt="Full Stack Engineering"
                ></img>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        <br />
        <hr />

        <h5>Other Educational Avenues</h5>
        <div className="edu container listgrp">
          <ListGroup variant="flush">
            <ListGroup.Item variant="dark">LinkedIn Learning</ListGroup.Item>
            <ListGroup.Item variant="dark">W3schools</ListGroup.Item>
            <ListGroup.Item variant="dark">WDN Web Docs</ListGroup.Item>
            <ListGroup.Item variant="dark">
              A Smarter Way to Learn JavaScript
            </ListGroup.Item>
            <ListGroup.Item variant="dark">Eloquent JavaScript</ListGroup.Item>
            <ListGroup.Item variant="dark">Codecademy</ListGroup.Item>
            <ListGroup.Item variant="dark">FreeCodeCamp</ListGroup.Item>
            <ListGroup.Item variant="dark">Learn-js</ListGroup.Item>
            <ListGroup.Item variant="dark">Udemy</ListGroup.Item>
            <ListGroup.Item variant="dark">Lynda</ListGroup.Item>
          </ListGroup>
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
