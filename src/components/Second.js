import React from 'react';

function Second() {
    return (
        <div className="container-flex">
            <br />

            <div className="row skills">

                <div className="col-lg-4 col-4"><img src="./Images/html.jpeg" alt="" /></div>
                <div className="col-lg-4 col-4"><img src="./Images/css.jpeg" alt="" /></div>
                <div className="col-lg-4 col-4"><img src="./Images/bootstrap.jpeg" alt="" /></div>
            </div>
            <div className="row skills">
                <div className="col-lg-4 col-4"><img src="./images/javascript.jpeg" alt="" /></div>
                <div className="col-lg-4 col-4"><img src="./images/node.jpeg" alt="" /></div>
                <div className="col-lg-4 col-4"><img src="./images/react.jpeg" alt="" /></div>
            </div>

            <a href="../resume.pdf" download="../resume.pdf" ><button className="btn btn-primary"><i className="fa fa-download"></i> Download Resume</button></a>

            <div className="container">
                <div className="row">

                    <div className="col-sm-12 col-lg-6 seeit">
                        <h3>Projects</h3>
                        
                    </div>
                        
                    <div className="col-sm-12 col-lg-6 seeit">


                        <h3>Education</h3>

                        <ul>
                            <li><h4>DigitalCrafts- Atlanta, GA</h4></li>
                            <p>DigitalCrafts is Atlanta's premiere software development bootcamp and has been educating coders since 2015. </p>
                            <ul>
                                <li><p>UI/UX, Full-stack Engineering, HTML5, CSS, Bootstrap, JavaScript, REACT, Express, Node.js, PostreSQL</p>
                                </li>

                            </ul>
                            <li><h4>Other Educational Avenues</h4></li>
                            <p>Linkedin Learning, Codecademy, FreeCodeCamp.org, W3schools.com, WDN Web Docs, Learn-js.org, Udemy.com, Lynda.com</p>
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Second;