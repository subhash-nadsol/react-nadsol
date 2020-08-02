import React, {Component, Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = 
        {

        }
    }

    render() {
        return (
            <Fragment >
                <div className="container-fluid footer mt-5">
          <div className="container">
            <div className="row">
              <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-xs-12 col-12 footer-list">
                <div className="pos-f-t">
                  <nav className="navbar navbar-dark footer-navbar">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleFooterContent" aria-controls="navbarToggleFooterContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon black-navbar-toggler-icon"></span> &nbsp; <span className="foot-menu">MENU</span>
                    </button>
                    <li className="p-0 footer-lidt">© Copyright 2020. NADSOL Techno Labs Pvt Ltd  |  All Rights Reserved.</li>
                  </nav>
                  <div className="collapse footer-collapse" id="navbarToggleFooterContent">
                    <div className="footer-bg p-4 d-flex rspnsv-footer-bg">
                        <div className="footer-navigation">
                          <ul className="navbar-nav">
                            <li className="nav-item active">
                              <a className="nav-link" href="vision.html">Our Values</a>
                            </li>
                            <li className="nav-item active">
                              <a className="nav-link" href="industry.html">Industries</a>
                            </li>
                            <li className="nav-item active">
                              <a className="nav-link" href="products.html">Products</a>
                            </li>
                            <li className="nav-item active">
                              <a className="nav-link" href="clients.html">Clients</a>
                            </li>
                          </ul>

                          <ul className="navbar-nav manual-navbar-nav">
                            <li className="nav-item active">
                              <a className="nav-link" href="team.html">Our Team</a>
                            </li>
                            <li className="nav-item active">
                              <a className="nav-link" href="about.html">Company</a>
                            </li>
                            <li className="nav-item active">
                              <a className="nav-link" href="careers.html">Careers</a>
                            </li>
                            <li className="nav-item active">
                              <a className="nav-link" href="contact.php">Contact</a>
                            </li>
                          </ul>
                        </div>
                      
                        <div className="footer-adres">
                          <h5>Our Office</h5>
                          <p>
                            <b>NADSOL TECHNO LABS PVT. LTD.,</b><br />
                            Sri Balaji Towers, #402 <br />
                            Near Trishul Grand Hotel, <br />
                            Hi-Tech City, Madhapur, Hyderabad, <br />
                            Telangana State, INDIA. Pin Code:500081 <br />
                            Contact: 040-49525958, +91-9849120930, <br />
                            Email: haranath@nadsol.com, info@nadsol.com
                          </p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12 col-12 d-flex footer-social">
                <FontAwesomeIcon icon={faTwitter} className="ftr-socl-icons" />
                <FontAwesomeIcon icon={faLinkedinIn} className="ftr-socl-icons" />
                <FontAwesomeIcon icon={faYoutube} className="ftr-socl-icons" />
                <FontAwesomeIcon icon={faFacebookF} className="ftr-socl-icons" />
              </div>
            </div>
          </div>
          <div className="responsive-footer-list">
            <li className="p-0">© Copyright 2020. NADSOL Techno Labs Pvt Ltd  |  All Rights Reserved.</li>
          </div>
        </div>
            </Fragment>
        );
    }
}

export default Footer;