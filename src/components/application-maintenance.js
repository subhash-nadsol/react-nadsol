import React, {Component, Fragment} from 'react';

class ApplicationMaintenance extends Component{

    render(){
        return(
            <Fragment>
                <div class="container-fluid inner-banner">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="assets/images/services/application-maintnance-bann.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Banner Section End --> */}

  <div>
    <div class="service-leader">
        <h6 class="service-head mt-2"> Application Maintenance</h6>
      </div>
  </div>

  <div class="container dgtlmrktng">
    NADSOL Techno Labs offshore maintenance Services provides reliable and timely support to your company which are very essential for uninterrupted Business operations. We provide comprehensive maintenance and total support services which help you maximize your technology investments for optimal business value.
  </div>

  <div class="container experiance-services mt-4">
    <div class="row">
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 exprnc-srvcs">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
          <div class="media">
            <div class="media-body">
              <h5>Application Maintenance Services</h5>
              <p>
                Our experts provide application maintenance and IT infrastructure support to enhance the scalability, performance, and portability of mission-critical systems with your specific business requirements in mind. Our enterprise app support experience includes most popular CRM, ERP, and CMS apps, as well as internal systems built on Service-Oriented Architectures (SOA).
              </p>
              <hr />
            </div>
            <img src="assets/images/services/application-icon.png" class="ml-3 app-icon" alt="UI" />
          </div>
        </div>
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
          <div class="media">
            <div class="media-body">
              <h5>Web Application Maintenance </h5>
              <p>
                Our developers provide web application maintenance solutions, including testing and debugging, customization of applications, updating site information with security measures, database maintenance, productivity analysis, and real time monitoring and management. In all our maintenance work, we adhere to strict Service Level Agreement (SLA) guidelines.
                <br />
              </p>
              <hr />
            </div>
            <img src="assets/images/services/web-application.png" class="ml-3 app-icon" alt="UI" />
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 exprnc-srvcs">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
          <div class="media">
            <div class="media-body">
              <h5>Mobile Application Maintenance</h5>
              <p>
                We provide scalable maintenance solutions for mobile applications that prolong uptime, support a larger user base, optimize server performance, improve UI/UX, enhance Business Process Management (BPM) processes, more easily comply with regulatory concerns and keep integrated web services running smoothly.
                <br class="responsive-br" /><br class="responsive-br" />
              </p>
              <hr />
            </div>
            <img src="assets/images/services/mobile-application.png" class="ml-3 app-icon" alt="UI" />
          </div>
        </div>
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
          <div class="media">
            <div class="media-body">
              <h5>Multi-Tiered Support Solutions </h5>
              <p>
                Our experts provide level 1, 2, and 3 support solutions, including standard issue fixing, application and system audits, IT environment support, and server administration. We offer adaptive and perfective maintenance services, ad hoc troubleshooting, holistic performance analyses, fault and root cause analysis, upgrades and legacy migrations.
                <br class="responsive-br" /><br class="responsive-br" />
              </p>
              <hr />
            </div>
            <img src="assets/images/services/pyramid.png" class="ml-3 app-icon" alt="UI" />
          </div>
        </div>
      </div>
    </div>
  </div>

            </Fragment>
        )
    }
}

export default ApplicationMaintenance;