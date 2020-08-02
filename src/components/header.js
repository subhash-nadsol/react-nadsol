import React, {Component, Fragment} from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

class Header extends Component {
    render(){
        return(
            <Fragment>
                <div className="container-fluid menu">
                {/* Logo Section Starts */}
          <div className="logo">
            <Link to={`/home`}><img src="assets/images/logo/logo.png" alt="Logo" /></Link>
          </div>
           {/* Logo Section Ends  */}

           {/* Menu Section Starts  */}
            <div className="navigation">
              <ul className="nav top-nav custom-navigation">
                <li className="nav-item">
                  <Link className="nav-link active" to={`/home`}>
                  <FontAwesomeIcon icon={faFacebookF} className="font-icon" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to={`/home`}>
                  <FontAwesomeIcon icon={faLinkedinIn} className="font-icon" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to={`/home`}>
                  <FontAwesomeIcon icon={faTwitter} className="font-icon" />
                  </Link>
                </li>
              </ul>

              <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
                <button className="navbar-toggler respnsve-togle" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
               <div className="collapse navbar-collapse justify-content-end rspnsv-menu-clpse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
                      <div className="dropdown-menu dflex-drop" aria-labelledby="navbarDropdown">
                        <div className="first-drop">
                          <Link className="dropdown-item" to={`/application-development`}>Application Development</Link>
                          <Link className="dropdown-item" to={`/portal-design`}>Portal Design & Content Management System</Link>
                          <Link className="dropdown-item" to={`/mobile-application`}>Mobile Application Development</Link>
                          <Link className="dropdown-item" to={`/cloud-services`}>Cloud Services</Link>
                          <Link className="dropdown-item" to={`/iot`}>Internet of Things (IoT)</Link>
                          <Link className="dropdown-item" to={`/experiance-design`}>Experience Design  </Link>
                        </div>
                        <div className="second-drop">
                      <Link className="dropdown-item" to={`/architecture`}>Architecture</Link>
                      <Link className="dropdown-item" to={`/cyber-security`}>Cyber Security</Link>
                      <Link className="dropdown-item" to={`/enterprise-application`}>Enterprise Applications</Link>
                      <Link className="dropdown-item" to={`/digital-marketing`}>Digital Marketing Services</Link>
                      <Link className="dropdown-item" to={`/application-maintenance`}>Application Maintenance</Link>
                      </div>
                      </div>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={`/industry`}>Industries</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="products.html">Products</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={`/team`}>Our Team</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Company</Link>
                      <div className="dropdown-menu custom-dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to={`/about`}>About NADSOL</Link>
                        <Link className="dropdown-item" to={`/vision`}>Mission & Values</Link>
                        <Link className="dropdown-item" to={`/location`}>Locations</Link>
                      </div>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={`/careers`}>Careers</Link>
                    </li>
                  </ul>
                </div>
              </nav>
              <nav className="navbar navbar-dark justify-content-end second-nav">
              <div className="bg">
                <button className="navbar-toggler second-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="nav-toggler-btn"></span>
                </button>
              </div>
              </nav>
              <div className="collapse second-collapse" id="navbarToggleExternalContent">
                <div className="bg-wrapper p-4">
                  <div className="container">
                      <div className="row">
                            <li className="nav-item active">
                              <Link className="nav-link" href="index.html">Home</Link>
                            </li>
                            <li className="nav-item active">
                              <Link className="nav-link" href="clients.html">Clients</Link>
                            </li>
                            <li className="nav-item active">
                              <Link className="nav-link" href="process.html">Process</Link>
                            </li>
                            <li className="nav-item active">
                              <Link className="nav-link" href="location.html">Offices</Link>
                            </li>
                            <li className="nav-item active">
                              <Link className="nav-link" href="contact.php">Contact</Link>
                            </li>
                      </div>
                  </div>
                </div>
              </div>
            </div>

           {/* Menu Section Ends  */}
        </div>
            </Fragment>
        )
    }   
}

export default Header;