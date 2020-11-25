import React from 'react';
import js from '../Images/js.jpg';



function Main(){
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
                    <img className="img-circle" src={js} alt="" title="Mushroom Road"/>    
                </div>
                <div className="col-sm-12 col-lg-3">
                    <p>I am a life long musician and performer who thrives in collaborative environments that challenge my intellect and creativity.  
                    &nbsp;Looking for flexible career paths that incorporate both, I discovered web design & development 
                    and began teaching myself HTML, CSS, Bootstrap and JavaScript. &nbsp;I then decided to further my education by attending DigitalCrafts Full-Stack software development program. &nbsp;I am currently a GDOT constrcution project manager.</p>
                </div>
                <div className="col-sm-12 col-lg-3">
                    <p>In the past, computer programming and web design &amp; development were not possible career paths for anyone without 
                      a 4 year degree in graphic design or computer science, however; With the ever growing need for competent full-stack engineers, 
                      and with the advent of online tutorials and coding bootcamps, I began to see breaking into this ever growing industry to be more attainable.</p>
                </div>
                <div className="col-lg-3">
                    <p>Aside from the lucrative and near-limitless career prospects that the tech world has to offer, 
                      my main goal is to continue to learn and grow as I evolve into a well rounded full-stack developer while maintaining a healthy work/life balance.</p>
                </div>
        </div>
    </div>
    )
}

export default Main;