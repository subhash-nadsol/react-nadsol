import React, {Component, Fragment} from 'react';



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
                <div class="container-fluid footer mt-5">
          <div class="container">
            <div class="row">
              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-xs-12 col-12 footer-list">
                <div class="pos-f-t">
                  <nav class="navbar navbar-dark footer-navbar">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleFooterContent" aria-controls="navbarToggleFooterContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon black-navbar-toggler-icon"></span> &nbsp; <span class="foot-menu">MENU</span>
                    </button>
                    <li class="p-0 footer-lidt">© Copyright 2020. NADSOL Techno Labs Pvt Ltd  |  All Rights Reserved.</li>
                  </nav>
                  <div class="collapse footer-collapse" id="navbarToggleFooterContent">
                    <div class="footer-bg p-4 d-flex rspnsv-footer-bg">
                        <div class="footer-navigation">
                          <ul class="navbar-nav">
                            <li class="nav-item active">
                              <a class="nav-link" href="vision.html">Our Values</a>
                            </li>
                            <li class="nav-item active">
                              <a class="nav-link" href="industry.html">Industries</a>
                            </li>
                            <li class="nav-item active">
                              <a class="nav-link" href="products.html">Products</a>
                            </li>
                            <li class="nav-item active">
                              <a class="nav-link" href="clients.html">Clients</a>
                            </li>
                          </ul>

                          <ul class="navbar-nav manual-navbar-nav">
                            <li class="nav-item active">
                              <a class="nav-link" href="team.html">Our Team</a>
                            </li>
                            <li class="nav-item active">
                              <a class="nav-link" href="about.html">Company</a>
                            </li>
                            <li class="nav-item active">
                              <a class="nav-link" href="careers.html">Careers</a>
                            </li>
                            <li class="nav-item active">
                              <a class="nav-link" href="contact.php">Contact</a>
                            </li>
                          </ul>
                        </div>
                      
                        <div class="footer-adres">
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
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12 col-12 d-flex footer-social">
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin"></i>
                <i class="fab fa-youtube"></i>
                <i class="fab fa-facebook"></i>
              </div>
            </div>
          </div>
          <div class="responsive-footer-list">
            <li class="p-0">© Copyright 2020. NADSOL Techno Labs Pvt Ltd  |  All Rights Reserved.</li>
          </div>
        </div>
            </Fragment>
        );
    }
}

export default Footer;