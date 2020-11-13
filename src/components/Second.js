import React from 'react';

function Second(){
    return (
<div class="container-flex">
    <br />

    <div class="row skills">

        <div class="col-lg-4 col-4"><img src="./html.jpeg" alt="" className="img-responsive"/></div>
        <div class="col-lg-4 col-4"><img src="./Images/css.jpeg" alt="" /></div>
        <div class="col-lg-4 col-4"><img src="./Images/bootstrap.jpeg" alt="" /></div>
    </div>
    <div class="row skills">
        <div class="col-lg-4 col-4"><img src="./images/javascript.jpeg" alt="" /></div>
        <div class="col-lg-4 col-4"><img src="./images/node.jpeg" alt="" /></div>
        <div class="col-lg-4 col-4"><img src="./images/react.jpeg" alt="" /></div>
    </div>
    <div class="col-sm-12 col-lg-6 seeit">
       
<button class="btn"><i class="fa fa-download"></i> Download Resume</button>
        <h3>Education</h3>

        <ul>
            <li>DigitalCrafts- Atlanta, GA</li>
            <p>DigitalCrafts is Atlanta's premiere software development bootcamp and has been educating coders since 2015. </p>
                <ul>
                    <li>UI/UX</li>
                    <li>Full-stack Engineering</li>
                    <ul>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>JavaScript</li>
                    <li>Express</li>
                    <li>Node.js</li>
                </ul>
                    <li>Project Management</li>
                </ul>
            <li>Codecademy.com</li>
                <ul>
                    
                </ul>
            <li>FreeCodeCamp.org</li>
               
            <li>W3schools.com</li>
            <li>WDN Web Docs</li>
            <li>Learn-js.org</li>

            <li>Udemy.com</li>
            <li>Lynda.com</li>
        </ul>



    </div>

        <div class="col-sm-12 col-lg-6 seeit">

      <h3>Experience</h3>

        <p>Jeremy has successfully built several small web pages but is hungry for a more solid education and real world experience to take his skills to the next level.</p>

        <a href="../RBS.html" target="_blank">Regenerative Building Solutions</a>
        <br />
        <a href="../DDLC/ddlc5.html" target="_blank">DDLC</a>
        <br />
        <a href="../thebeergrowlerwinston.html" target="_blank">The Beer Growler, Winston Salem</a>
        <br />
        <a href="../Doggie_By_Nature/dbn.html" target="_blank">Doggie By Nature</a>
        <br />
        <a href="../ASW/songlist.html" target="_blank">A Southern Wind</a>
        <br />

        </div>
    </div>
    )
}

export default Second;