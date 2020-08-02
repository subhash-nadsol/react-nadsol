import React, { Component, Fragment } from 'react';

class PortalDesign extends Component {
    constructor(props) {
        super(props)
        this.state = 
        {
            
        }
    }

    render() {
        return (
            <Fragment >
                <div class="container-fluid inner-banner">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="assets/images/services/application-banner.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Banner Section End --> */}

  <div>
    <div class="leader">
      <h6 class="team-head mt-2">Portal Design</h6>
    </div>
  </div>


  <div class="container cms-container">
    <div class="row">
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 cms-head">
        <h1 class="black">STRATEGY</h1>
        <h1 class="grey">PLANNING</h1>
        <h1 class="black">RESEARCH</h1>
        <h1 class="grey">DESIGN</h1>
        <h1 class="black">AND</h1>
        <h1 class="grey b-white">DEVELOPMENT</h1>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 cms-image">
        <img src="assets/images/services/cms.jpg" alt="cms" />
      </div>
    </div>
  </div>

  <div class="container tab-container">
    <div class="row">
      <div class="xl-col-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 col-12 tab-left">
            <p>
              Web Designing makes it possible to present your information the way you wish to exhibit to your potential customer. And as an old saying goes, “First ImpressionsLast”. The site effectiveness is majorly dependent on the colors and their mergers, general layout, space utilization, ease of navigation and attention to finer necessities impacting deferent screen resolutions. These attract and retain the customers.
            </p>

            <p>
              We understand that the design and content & functionality of the site captures and retains the attention of the browser. A good design reinforces your message and delivers it with more impact. Our aim is to emphasise on these points and provide a design which has a professional lay out, clear and crisp, easy to navigate and quick to download.
            </p>

            <p>
              Our web designers will work in collaboration with you to ensure that we pay attention to detail to all your specifications. Every requirement is unique and therefore each design we create will reflect the client's requirements and characteristics
            </p>

            <p>
              We build effective corporate and professional websites that meet the challenges of a changing competitive landscape. Our corporate B2B and B2C websites feature customer-centric design and value proposition, allow for a two-way communication with the customers, fully integrate with social media, and deliver experiences designed to convert visitors into customers.
            </p>
        </div>

      <div class="xl-col-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 cms-tabs-bg">
        <ul>
          <li>Custom Website Design</li>
          <li>Responsive Design</li>
          <li>Websites Re-Design</li>
          <li>Website Maintenance 
            & Support</li>
          <li>Branding & 
            Design Analysis</li>
        </ul>
      </div>

      </div>
    </div>

            </Fragment>
        );
    }
}

export default PortalDesign;