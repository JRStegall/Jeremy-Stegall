import React from 'react';
import pdf from '../resume/resume.pdf';
import html from '../Images/html.jpeg';
import bootstrap from '../Images/bootstrap.jpeg';
import css from '../Images/css.jpeg';
import javascript from '../Images/javascript.jpeg';
import node from '../Images/node.jpeg';
import react from '../Images/react.jpeg';
import post from '../Images/post.jpeg';
import sqlz from '../Images/sqlz.jpeg';

function Second() {
    return (
        <div className="container-flex">
            <br />

            <div className="row skills">

                <div className="col-lg-4 col-4"><img src={html} alt="" /></div>
                <div className="col-lg-4 col-4"><img src={css} alt="" /></div>
                <div className="col-lg-4 col-4"><img src={bootstrap} alt="" /></div>
            </div>
            <div className="row skills">
                <div className="col-lg-4 col-4"><img src={javascript} alt="" /></div>
                <div className="col-lg-4 col-4"><img src={node} alt="" /></div>
                <div className="col-lg-4 col-4"><img src={react} alt="" /></div>
            </div>
            <div className="row skills">
                <div className="col-lg-4 col-4"><img src={post} alt="" /></div>
            </div>

            <a href={pdf} download="./public/resume/resume.pdf" ><button className="btn btn-primary"><i className="fa fa-download"></i> Download Resume</button></a>

            <div className="container">
                <div className="row">

                    <div className="col-sm-12 col-lg-6 seeit">
                        <h3>Projects</h3>
                        <p>Find recording, rehearsal, production and dance studios to fit your needs and budget with:
                        <a href="http://mystudiosearch.com" target="_blank" rel="noreferrer">Sessions</a></p>
                        <br/>
                        <p>Search for any movie you can think of on:
                        <a href="https://gifted-kepler-e3c935.netlify.app" target="_blank" rel="noreferrer">Movie Search</a></p>
                        <br/>
                        <p>Keep up with the latest trends in cryptocurrency with:
                        <a href="https://cyptoappp.netlify.app/" target="_blank" rel="noreferrer">CryptoApp</a></p>
                    </div>
                        
                    <div className="col-sm-12 col-lg-6 seeit">


                        <h3>Coding Education</h3>

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