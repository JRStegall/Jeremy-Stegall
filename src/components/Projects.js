import React from "react";
import { Route } from "react-router";

function Second() {
  return (
    <div className="container-flex main">
      <br />

      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h3>Current Projects</h3>
            <div className="row">
              <div className="col-12 proj1">
                <div className="p">
                  <p>
                    Band Website: <br />
                    <a
                      href="https://sweetmelissaband.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Sweet Melissa and the Ramblin' Men{" "}
                    </a>
                    <br />
                    <sub>Built with React.</sub>
                  </p>
                  <p>
                    <a href="https://github.com/JRStegall/SweetMelissa">
                      github Repository
                    </a>
                  </p>
                </div>
              </div>
              <br />
              <div className="col-12 proj2">
                <div className="p">
                  <p>
                    Find recording, rehearsal, production and dance studios to
                    fit your needs and budget with:&nbsp;
                    <br />
                    <a
                      href="http://mystudiosearch.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Sessions
                    </a>
                    <br />
                    <sub>
                      Built with HTML5, CSS, Bootstrap, React, JavaScript and
                      Postgres.
                    </sub>
                  </p>
                  <p>
                    <a href="https://github.com/JRStegall/Studio_Search">
                      github (front end repository)
                    </a>
                  </p>
                  <p>
                    <a href="https://github.com/JRStegall/Studio_Search_backend">
                      github (back end repository
                    </a>
                  </p>
                </div>
              </div>
              <br />
              <div className="col-12 proj3">
                <div className="p">
                  <p>
                    React Admin Page Prototype: <br />
                    <a
                      href="https://eloquent-nobel-d2ebde.netlify.app/#/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Admin Page
                    </a>
                    <br />
                    <sub>Built with React.</sub>
                  </p>
                  <p>
                    <a href="https://github.com/JRStegall/ReactAdmin">
                      github Repository
                    </a>
                  </p>
                </div>
              </div>
              <br />

              <div className="col-12 proj4">
                <div className="p">
                  <p>
                    Search for any movie you can think of on: &nbsp;
                    <br />
                    <a
                      href="https://gifted-kepler-e3c935.netlify.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Movie Search
                    </a>
                    <br />
                    <sub>Built with React.</sub>
                  </p>
                  <p>
                    <a href="https://github.com/JRStegall/React-Movie-Search">
                      github Repository
                    </a>
                  </p>
                </div>
              </div>
              <br />

              <div className="col-12 proj5">
                <div className="p">
                  <p>
                    Keep up with the latest trends in cryptocurrency with:&nbsp;
                    <br />
                    <a
                      href="https://cyptoappp.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      CryptoApp
                    </a>
                    <br />
                    <sub>
                      Built with HTML5, CSS, Bootstrap and JavaScript API's.
                    </sub>
                  </p>
                  <p>
                    <a href="https://github.com/JRStegall/cryptoAppp">
                      github Repository
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

let Projects = () => (
  <div>
    <Route path="/proj" component={Second} />
  </div>
);
export default Projects;
