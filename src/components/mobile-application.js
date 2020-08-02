import React, {Component, Fragment} from 'react';

class MobileApplication extends Component{

    render(){
        return(
            <Fragment>
                <div class="container-fluid inner-banner">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="assets/images/services/mobile-banner.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Banner Section End --> */}

  <div>
    <div class="service-leader resp">
        <h6 class="service-head mt-2">Mobile Application Development</h6>
      </div>
  </div>

  <div class="container mobile">
    <div class="row">
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 mobile-right">
        <p>
          NADSOL provides the Best Mobile Application Development Services for Enterprise.
        </p>

        <p>
          Whether it is developing a standalone mobile app, or helping you design, develop, and implement a comprehensive mobile strategy for your enterprise, we are the ideal partner to help you make the transition.
        </p>

        <p>
          Right from Mobile Strategy to Mobile App design and Development to Mobile Application Testing and Deployment, we adhere to proven global standards and methodology to deliver top ranking mobile apps. We develop and deploy mobility software solutions that encompass strategy and industry-specific accelerators aimed towards transformation and building a future-proof organization.
        </p>

        <p>
          Our experts will coordinate with you, understand your requirements and come up with ideas best suited and tailor made to your needs. We focus on delivering cost-effective solutions with value added services & on-time delivery to meet a wide range of requirements, in order to help clients realize greater returns on investment for their technology initiatives.
        </p>
      </div>
      <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12 col-12 mobile-left">
        <img src="assets/images/services/mobile.jpg" alt="" />
      </div>
    </div>
  </div>

  <div class="container-fluid services-background">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
          <div class="mobile-service-wrapper">
            <h2>
              Android App Development
            </h2>
            <p>
              We provide end-to-end Android Mobile Application Development Services to transform idea into a successful mobile application that performs flawlessly in the entire Android ecosystem. Our Android mobile app development services cover connected devices, smartphones and tablets.
            </p>

            <p>
              Our team of top Android mobile app developers leverages extensive domain experience and technical expertise to deliver robust Android mobile apps. We assist in the entire Android development lifecycle from initial ideation.
            </p>
          </div>

          <div class="mobile-service-wrapper">
            <h2>
              IOS App Development
            </h2>
            <p>
              NADSOL is a full-service iOS Mobile app development company providing services that cover the entire development cycle, from consulting, UX/UI design, development and product strategy to distribution. We deliver custom iOS mobile apps for a complete range of iOS mobile app development.
            </p>

            <p>
              Highlighting our track record of success, our team has provided iOS mobile app development services to some of the world’s leading brands and successfully built top-ranking and featured iOS apps.
            </p>
          </div>

          <div class="mobile-service-wrapper">
            <h2>
              Cross-Platform Development
            </h2>
            <p>
              NADSOL is a top provider of Multi-Platform application development and cross-platform mobile app development services. We specialize in full-service cross platform development process right from requirements gathering, UX/UI design, coding, testing to product maintenance and support to build fully featured & quality-rich apps.
            </p>

            <p>
              Our team provides cross platform application development for a wide range of mobile devices and operating systems such as Apple’s iOS, Android and Windows. Our experience includes building mobile apps using Configure.IT, Xamarin, PhoneGap, Ionic and more.
            </p>

            <p>
              We have proven experience in cross platform mobile app development services to engage potential users and target audience.
            </p>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 service-imgs">
           <div class="row mbl-cstm-row">
               <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 first-img ml-5">
                   <img src="assets/images/services/flutter.png" alt="flutter" />
               </div>
               <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 second-img">
                   <img src="assets/images/services/ionic.png" class="mb-2" alt="ionic" />
                   <img src="assets/images/services/andriod.png" alt="andriod" />
                   <img src="assets/images/services/reactive.png" class="mt-2" alt="reactive" />
               </div>
               <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 third-img">
                   <img src="assets/images/services/ios.png" alt="ios" />
               </div>
           </div>
        </div>
      </div>
    </div>
  </div>

            </Fragment>
        )
    }
}

export default MobileApplication;