import React, { Component, Fragment } from "react";
import Slider from "react-slick";
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
        autoPlay: true

      };
      return (
        <Fragment>
            
        <div class="wedo">
          <h2>What we do</h2>
          <p>We analyse your working environment, designing systems to meet your business objectives.</p>
        </div>
        
        <div class="wedo-banner container-fluid">
          <div class="container wedo-continer">
              <div className="row">
              <Slider {...settings}>
              <div class="col-md-12 wedo-col-3 scroll-blocks slide">
                <div class="card">
                <img src="assets/images/application.jpg" class="card-img-top" alt="Application" />
                <div class="card-body">
                  <h5 class="card-title">Applications Development</h5>
                  <p class="card-text">We help create contextual user experience environments that enable interactions with your brand.</p>
                  <a href="application-development.html" class="btn">Read More</a>
                </div>
                </div>
              </div>

              <div class="col-md-12 wedo-col-3 scroll-blocks slide">
                <div class="card">
                <img src="assets/images/mobile.jpg" class="card-img-top" alt="Application" />
                <div class="card-body">
                  <h5 class="card-title">Mobile Applications
                    Development</h5>
                  <p class="card-text">We are delivering Custom Mobile Application Development Services For Startups, Small Businesses</p>
                  <a href="mobile-application.html" class="btn">Read More</a>
                </div>
                </div>
              </div>

              <div class="col-md-12 wedo-col-3 scroll-blocks slide">
                <div class="card">
                <img src="assets/images/enterprise.jpg" class="card-img-top" alt="Application" />
                <div class="card-body">
                  <h5 class="card-title">Enterprise
                    Applications</h5>
                  <p class="card-text">Our expertise in SharePoint Development and BizTalk Development enables the organization to leverage</p>
                  <a href="enterprise-applications.html" class="btn">Read More</a>
                </div>
                </div>
              </div>

              <div class="col-md-12 wedo-col-3 scroll-blocks slide">
                <div class="card">
                  <img src="assets/images/iot.jpg" class="card-img-top" alt="Application" />
                  <div class="card-body">
                    <h5 class="card-title">Internet of things 
                      (IoT)</h5>
                    <p class="card-text">Our Internet of Things services enables organizations to transform business needs into </p>
                    <a href="iot.html" class="btn">Read More</a>
                  </div>
                </div>
              </div>
              </Slider>
              </div>
          </div>
        </div>
        </Fragment>        
      )
    }
  }
export default SlickSlider;