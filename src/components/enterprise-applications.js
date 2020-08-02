import React, {Component, Fragment} from 'react';

class EnterpriseApplication extends Component{

    render(){
        return(
            <Fragment>
                <div class="container-fluid inner-banner">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="assets/images/services/ead-banner.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Banner Section End --> */}

  <div>
    <div class="service-leader">
        <h6 class="service-head mt-2 enterprise-head">Enterprise Applications Development</h6>
      </div>
  </div>

  <div class="container ead">
    <div class="row">
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 ead-heads">
        <h4>
          NADSOL Techno Labs offers end to end Enterprise Solutions Development services, which includes,
        </h4>

        <h5>1)	Enterprise Application Integration</h5>
        <h5>2)	Customer Relationship Management (CRM)</h5>
        <h5>3)	Enterprise Content Management (ECM)</h5>
        <h5>4)	Enterprise Mobile Application Development</h5>
        <h5>5)	DevOps</h5>

      </div>
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 ead-img">
        <img src="assets/images/services/ead.jpg" alt="" />
      </div>
    </div>
  </div>

  <div class="container-fluid ead-background">
    <div class="container ead-container">
      <div class="row">
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 ead-services">
          <h5>
            Enterprise Application Integration
          </h5>
          <p>
            Our expertise in SharePoint Development and BizTalk Development enables the organization to leverage the existing IT infrastructure without making multiple changes in applications or data structures. We offer services like application integration, EDI, business process management, SOA, and others.
          </p>

          <h5>
            Enterprise Content Management (ECM)
          </h5>
          <p>
            With a large amount of business content being generated from multiple sources, managing the same has become a complicated and costly affair. Our Enterprise Content Management (ECM) services enable an organization with a holistic approach to capture, manage, store, preserve, and deliver content and documents related to organizational processes.
          </p>

          <h5>
            Customer Relationship Management (CRM)
          </h5>
          <p>
            Sometimes an off-the-shelf CRM may not serve the purpose for a particular business or industry due to multiple reasons. To address this issue, we develop custom CRM solution that fully meets the client’s requirements and business objectives.
          </p>

          <h5>
            Enterprise Mobile Application Development
          </h5>
          <p>
            Mobility has phenomenally changed the way businesses operate these days. It is 
            now an inseparable part of every organization’s strategy. We help organizations 
            achieve their mobility objectives with our extensive experience of enterprise mobile 
            apps development across all platforms like iOS, Android, Windows, and Node.JS.
          </p>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 ead-services">
          <h5>
            DevOps :
          </h5>
          <p>
            We become an extension of your team of architects and developers. Be it designing,
            planning, implementation or configuration of your system for the cloud, we advise 
            and help you with reviews, recommendations and enhancements.
          </p>

            <div class="ead-sub">
            <li>Security Management</li>
            <p>
              We are committed to extending beyond just developing applications. We ensure the application availability through firewall protection, safe configurations, encryption, security patches and more. We believe in building from the ground up adopting security best practices.
            </p>

            <li>Process Automation</li>
            <p>
              We begin with automating deployment process and also coding your infrastructure. As we move on, over the time, we evolve the processes, and also take advantage of new features and adapt it accordingly.
            </p>

            <li>Continuous Integration and Continuous Delivery</li>
            <p>
              We believe in ensuring that everything that our developers build can be tested and deployed only to production when you are ready. We are also keen advocates of continuous delivery and manage the process for you to fasten release by automating testing and eliminate errors.
            </p>
            </div>
        </div>
      </div>
    </div>
  </div>
            </Fragment>
        )
    }
}

export default EnterpriseApplication;