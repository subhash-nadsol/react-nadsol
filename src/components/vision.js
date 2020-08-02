import React, {Component, Fragment} from 'react';

class Vision extends Component{

    render(){
        return(
            <Fragment>
                <div class="container-fluid inner-banner">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="assets/images/vision/banner.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Banner Section End --> */}

  <div>
    <div class="leader">
        <h6 class="team-head mt-2">Vision and Values</h6>
      </div>
  </div>

  <div class="container vision-container">
    <div class="row">
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 vision-left">
        <div class="vision-text-wrapper">
          <img src="assets/images/vision/background.png" alt="" />
        <div class="vision-carousel-item">
          <h2>Our Vision</h2>
        <p>
          Be a leading global firm delivering impact through both online and traditional channels for our clients. We believe in BUILDING VALUE for our customers and that is how we differentiate our business from our peers.
        </p>
        </div>
        </div>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 vision-right">
        <div class="core-values">
          <h2>Core Values</h2>
          <div class="row mt-3">
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12 core-col">
              <img src="assets/images/vision/1.png" alt="" />
              <p>
                Collaboration
                & Share 
              </p>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12 core-col">
              <img src="assets/images/vision/2.png" alt="" />
              <p>
                Integrity &
                Transparency 
              </p>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12 core-col">
              <img src="assets/images/vision/3.png" alt="" />
              <p>
                Unwavering
                Commitment
              </p>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12 core-col">
              <img src="assets/images/vision/4.png" alt="" />
              <p>
                Service
                Excellence
              </p>
            </div>
          </div>
        </div>

        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 mission-text-block">
          <h2>Our Mission</h2>
          <p>
            To provide innovative, high quality and best-in-class IT Consulting and IT Solutions & Services to our customers, enabling them to achieve their business objectives. Making it a wonderful and rich experience for all customers, associates and partners while working together.
          </p>
          <img src="assets/images/vision/mission.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
  
            </Fragment>
        )
    }
}

export default Vision;