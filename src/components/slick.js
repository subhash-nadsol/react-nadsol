import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
class SlickSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true
      };
      return (
        <Fragment>
         {/* BANNER SECTION ENDED            */}
         <div class="wedo">
            <div class="wedo_title">
              <h2>What we do</h2>
              <p>Offering below are the services to the all the Industry</p>
            </div>


            <div class="container mt-5">
              <Slider {...settings}>
              <div class="col-md-3 wedo_col">
                <div class="card">
                <img src="assets/images/application.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Applications Development</h5>
                  <p class="card-text">We help create contextual user experience environments that enable interactions with your brand.</p>
                  <Link to={`/application-development`} class="btn btn-wedo">Read More</Link>
                </div>
                </div>
              </div>
              <div class="col-md-3 wedo_col">
                  <div class="card">
                  <img src="assets/images/mobile.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Mobile Applications Development</h5>
                    <p class="card-text">We are delivering Custom Mobile Application Development Services For Startups, Small Businesses</p>
                    <Link to={`/application-development`} class="btn btn-wedo">Read More</Link>
                  </div>
                  </div>
              </div>
              <div class="col-md-3 wedo_col">
                  <div class="card">
                  <img src="assets/images/iot.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Internet of things (IoT)</h5>
                    <p class="card-text">Our Internet of Things services enables organizations to transform business needs into </p>
                    <Link to={`/application-development`} class="btn btn-wedo">Read More</Link>
                  </div>
                  </div>
                </div>
                <div class="col-md-3 wedo_col">
                  <div class="card">
                    <img src="assets/images/architecture.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Architecture</h5>
                      <p class="card-text">Enterprise Architecture helps business management achieve its strategic goals. It supports the company in creating competitive advantage, reduces risks</p>
                      <Link to={`/application-development`} class="btn btn-wedo">Read More</Link>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 wedo_col">
                  <div class="card">
                    <img src="assets/images/cloud.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Cloud Services</h5>
                      <p class="card-text">Whether you are beginning to or have already started your cloud journey, a vendor-agnostic partner can accelerate</p>
                      <Link to={`/application-development`} class="btn btn-wedo">Read More</Link>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 wedo_col">
                  <div class="card">
                    <img src="assets/images/cyber.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Cyber Security</h5>
                      <p class="card-text">ISO/IEC 27001 is an Infosec Standard, NADSOL help you in state assessment, gap analysis and Certified. Our ISMS policies,</p>
                      <Link to={`/application-development`} class="btn btn-wedo">Read More</Link>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 wedo_col">
                  <div class="card">
                    <img src="assets/images/seo.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Digital Marketing</h5>
                      <p class="card-text">As a Digital Marketing company, NADSOL Technologies provides entire services in promotions of products and brands.</p>
                      <Link to={`/application-development`} class="btn btn-wedo">Read More</Link>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 wedo_col">
                  <div class="card">
                    <img src="assets/images/maintenance.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Application-Maintenance</h5>
                      <p class="card-text">NADSOL Techno Labs offshore maintenance Services provides reliable and timely support to your company.</p>
                      <Link to={`/application-development`} class="btn btn-wedo">Read More</Link>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 wedo_col">
                  <div class="card">
                    <img src="assets/images/ux.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Experience Design</h5>
                      <p class="card-text">Our User Experience (UXD) Practice designs thoughtful, engaging, user-centric websites that drive conversions.</p>
                      <Link to={`/application-development`} class="btn btn-wedo">Read More</Link>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 wedo_col">
                  <div class="card">
                    <img src="assets/images/cms.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Portal Design & CMS</h5>
                      <p class="card-text">Web Designing makes it possible to present your information the way you wish to exhibit your potential customer.</p>
                      <Link to={`/application-development`} class="btn btn-wedo">Read More</Link>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
         </div>

        </Fragment>        
      )
    }
  }
export default SlickSlider;