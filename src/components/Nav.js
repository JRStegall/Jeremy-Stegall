import React from 'react';




function Nav() {
    return(
<nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" id="siteName">Jeremy Stegall </a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href = "mailto:jeremy.stegall77@gmail.com?subject = Feedback&body = Message">Contact <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.linkedin.com/in/jeremy-stegall-6a0a90b3/" target="_blank">LinkedIn</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/JRStegall" target="_blank">GitHub</a>
            </li>
          </ul>
        </div>
      </nav>
    )
}


export default Nav;