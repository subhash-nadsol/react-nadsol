import React, {Component, Fragment} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Home extends Component{

    render(){
        var settings ={
         dots: false,
         infinite: true,
         slidesToShow: 4,
         slidesToScroll: 1         
        }
        return(
            <Fragment>
                <div class="container-fluid banner">
  <div id="carouselExampleControls" class="carousel slide manual-carousel" data-ride="carousel" data-pause="false" data-interval="5000">
    <div class="carousel-inner manual-carousel-inner">
      <div class="carousel-item manual-carousel-item active">
        <img src="assets/images/banner.jpg" class="d-block w-100 first-carousel" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <p>
            Accelerate your journey to a digital <br /> enterprise with NADSOL’s Digital <br /> Transformation practices.
          </p>
        </div>
        <div class="banner-layer"></div>
      </div>
      <div class="carousel-item manual-carousel-item">
        <video autoplay preload="auto" muted loop style={ {width: '100%'} } src="assets/videos/1.mp4" type="video/mp4">
          <source src="/" type="video/mp4" />
        </video>
        <div class="carousel-caption d-none d-md-block">
          <p>
            Delivering new age digital technology <br /> solutions to our clients makes their <br /> customers happy
          </p>
        </div>
        <div class="banner-layer"></div>
      </div>
      <div class="carousel-item manual-carousel-item">
        <video autoplay preload="auto" muted loop style={ {width: '100%'} } src="assets/videos/2.mp4" type="video/mp4">
          <source src="/" type="video/mp4" />
        </video>
        <div class="carousel-caption d-none d-md-block">
          <p>
            Discover our range of flexible managed <br /> IT services, offering tailored solutions <br /> to meet your business objectives.
          </p>
        </div>
        <div class="banner-layer"></div>
      </div>
      <div class="carousel-item manual-carousel-item">
        <video autoplay preload="auto" muted loop style={ { width:'100%' } } src="assets/videos/3.mp4" type="video/mp4">
          <source src="/" type="video/mp4" />
        </video>
        <div class="carousel-caption d-none d-md-block">
          <p>
            Delivering new age digital technology <br /> solutions to our clients makes their <br /> customers happy
          </p>
        </div>
        <div class="banner-layer"></div>
      </div>
    </div>
     <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
{/* Banner Section End  */}

<div class="clear-both hght-20"></div>

<div class="container-fluid about">
  <div class="about-text">
    <h2>
      About NADSOL
    </h2>
    <p>
      Our innovative IT Solutions in Application Development, Mobile Application
Development, Enterprise Resource Planning (ERP), Content Management System
(CMS), Cloud Solutions, Experience Design, IOT, Cyber Security and
Enterprise Applications that cover Product Development and Life-Cycle
Support, have resulted in significant strategic and cost advantage for our
clients. NADSOL has strong domain expertise, global work culture and
technical excellence help companies to get ahead and be ready for future.
    </p>

    <a href="about.html" class="btn btn-read">Read More</a>

  </div>
</div>

<div class="about-frame">
     <div class="red-arow">
        <img src="assets/images/red-layer.png" alt="" />
    </div>
  <div class="gallery-one">
    <div class="one">
        <p>
          We design personalized customer experiences that drive loyalty enabled by deep industry expertise, data driven analytics and technology.
        </p>
         {/* <li><a href="#">Read More</a></li>  */}
    </div>
    <div class="gl-two">
      <img src="assets/images/batch.png" alt="" />
    </div>
  </div>

  
  <div class="gallery-two">
    <div class="gl-two">
      <img src="assets/images/red-girl.png" alt="" />
    </div>
    <div class="one">
        <p>
          NADSOL’s global IT consulting practise helps IT leaders design and implement advanced solutions in IT governance
        </p>
        {/* <li><a href="#">Read More</a></li> */}
    </div>
  </div>
    {/* <!--<div class="purple-arow">-->
    <!--    <img src="assets/images/purple.png" alt="">-->
    <!--</div>--> */}
</div>

{/* <!-- About Section End --> */}

    <div class="h-108"></div>

    <div class="clear-both hght-20"></div>

        <div class="wedo">
          <h2>What we do</h2>
          <p>We analyse your working environment, designing systems to meet your business objectives.</p>
        </div>

        <div class="wedo-banner container-fluid">
          <div class="container wedo-continer">
            <div class="row slider" {...settings}>

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


            </div>
          </div>
        </div>
       {/* <!-- Team Section Starts --> */}
       <div class="container-fluid team">
        <h6 class="team-head">Executive Team</h6>
        <p class="team-semihead">Meet our Industry Experts</p>
         <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-xs-12 col-12 mx-auto team-paragraph">
           <p>
             There is no substitute for having the right people, but in the highly specialized and technically sophisticated field of IT Services, it is a necessity. NADSOL’s management team is comprised of highly-skilled individuals with strong IT services experience and expertise.
           </p>
         </div>
        <div class="container">
           <div class="row mt-1">
             <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 col-12 team-col">
               <a href="team.html">
                   <div class="card team-card">
                 <div class="card-head">
                   <img src="assets/images/team/1.jpg" class="card-img-top" alt="Team" />
                   <div class="layer-Y"></div>
                   <div class="layer-X"></div>
                 </div>
                 <div class="card-body team-card-body">
                   <h5 class="card-title pt-3">HARANATH ANAMALA</h5>
                   <p class="card-text">Founder & Chief Executive Officer</p>
                 </div>
               </div>
               </a>
             </div>
             <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 col-12 team-col">
               <a href="team.html">
                   <div class="card team-card">
                 <div class="card-head">
                   <img src="assets/images/team/2.jpg" class="card-img-top" alt="Team" />
                   <div class="layer-Y"></div>
                   <div class="layer-X"></div>
                 </div>
                 <div class="card-body team-card-body">
                   <h5 class="card-title pt-3">VENUGOPAL DUSHETTY</h5>
                   <p class="card-text">Solution Architect</p>
                 </div>
               </div>
               </a>
             </div>
             <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 col-12 team-col">
               <a href="team.html">
                   <div class="card team-card">
                 <div class="card-head">
                   <img src="assets/images/team/3.jpg" class="card-img-top" alt="Team" />
                   <div class="layer-Y"></div>
                   <div class="layer-X"></div>
                 </div>
                 <div class="card-body team-card-body">
                   <h5 class="card-title pt-3">GVB SUBRAHMANYAM</h5>
                   <p class="card-text">Enterprise Architect</p>
                 </div>
               </div>
               </a>
             </div>
           </div>

           <div class="row mt-5 pt-3 rspnsv-row">
             <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 col-12 team-col">
               <a href="team.html">
                   <div class="card team-card">
                 <div class="card-head">
                   <img src="assets/images/team/6.jpg" class="card-img-top" alt="Team" />
                   <div class="layer-Y"></div>
                   <div class="layer-X"></div>
                 </div>
                 <div class="card-body team-card-body">
                   <h5 class="card-title pt-3">CDR SUDARSHAN CHAKRAPANI</h5>
                   <p class="card-text">Mentor</p>
                 </div>
               </div>
               </a>
             </div>
             <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 col-12 team-col">
               <a href="team.html">
                   <div class="card team-card">
                 <div class="card-head">
                   <img src="assets/images/team/4.jpg" class="card-img-top" alt="Team" />
                   <div class="layer-Y"></div>
                   <div class="layer-X"></div>
                 </div>
                 <div class="card-body team-card-body">
                   <h5 class="card-title pt-3">SHIVA KUKATLA</h5>
                   <p class="card-text">Director - Sales, Canada</p>
                 </div>
               </div>
               </a>
             </div>
             <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 col-12 team-col">
               <a href="team.html">
                   <div class="card team-card">
                 <div class="card-head">
                   <img src="assets/images/team/5.jpg" class="card-img-top" alt="Team" />
                   <div class="layer-Y"></div>
                   <div class="layer-X"></div>
                 </div>
                 <div class="card-body team-card-body">
                   <h5 class="card-title pt-3">JAGANMOHAN REDDY</h5>
                   <p class="card-text">Director - Technology</p>
                 </div>
               </div>
               </a>
             </div>
           </div>

           <li><a href="team.html">Connect to more experts <i class="fas fa-chevron-right ml-2"></i></a></li>
        </div>
   </div>
   {/* <!-- Team Section Ends --> */}

   <div class="clear-both hght-20"></div>
        {/* <!-- Middle Banner Section Starts --> */}
        <div class="container-fluid middle-banner mt-3">
          <div class="container">
            <div class="col-xl-5 col-lg-5 col-md-5 col-xs-12 col-sm-12 co-12 middle-banner-layer">
              <div id="carouselExampleFade" class="carousel slide carousel-slide" data-ride="carousel" data-interval="3000">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="assets/images/purple-layer.png" className="d-block w-100" alt="purple-layer" />
                    <div class="carousel-caption d-none d-md-block">
                      <p>Nadsol is committed to helping our clients be their best. Our technology enables leaders in the modern enterprise to discover hidden barriers that hold back their teams 
                        <br />
                          and customers, and prioritize and execute programs that deliver lasting impact, not temporary benefits.
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src="assets/images/redp-layer.png" className="d-block w-100" alt="redp-layer" />
                    <div class="carousel-caption d-none d-md-block cstm-carousel-caption">
                      <p>Nadsol’s IT-driven process analytics and integrated automation software powers true digital transformation that drives our clients ambitious cost savings, customer experience, and employee engagement objectives.
                        We bring global best practices and resources to customers across industries and around the world.
                        <br />
                          
                      </p>
                    </div>
                  </div>

                  <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Middle Banner Section Ends --> */}
        
        <div class="clear-both hght-20"></div>
        {/* <!-- Our Expertise Section Starts --> */}
        <div class="contianer-fluid expertise mt-5">
          <div class="container">
            <h3 class="expertise-h3">Our Expertise</h3>
            <p class="expertise-p">We are expert in following technologies</p>
            <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-xs-12 col-12 expert-para">
              <p>Discover how NADSOL breakthrough technologies are transforming industries with smarter ways to do business, new growth opportunities and strategies to compete and win.</p>
            </div>
            <div class="row">
              <div class="ex-col">
                <img src="assets/images/experties/1.png" alt="" />
              </div>
              <div class="ex-col">
                <img src="assets/images/experties/2.png" alt="" />
              </div>
              <div class="ex-col">
                <img src="assets/images/experties/3.png" alt="" />
              </div>
              <div class="ex-col">
                <img src="assets/images/experties/4.png" alt="" />
              </div>
              <div class="ex-col">
                <img src="assets/images/experties/5.png" alt="" />
              </div>
              <div class="ex-col">
                <img src="assets/images/experties/6.png" alt="" />
              </div>
              <div class="ex-col">
                <img src="assets/images/experties/7.png" alt="" />
              </div>
              <div class="ex-col">
                <img src="assets/images/experties/8.png" alt="" />
              </div>
              <div class="ex-col">
                <img src="assets/images/experties/9.png" alt="" />
              </div>
              <div class="ex-col">
                <img src="assets/images/experties/10.png" alt="" />
              </div>
              <div class="ex-col">
                <img src="assets/images/experties/11.png" alt="" />
              </div>
              <div class="ex-col">
                <img src="assets/images/experties/12.png" alt="" />
              </div>
              <div class="ex-col">
                <img src="assets/images/experties/13.png" alt="" />
              </div>
              <div class="ex-col">
                <img src="assets/images/experties/14.png" alt="" />
              </div>
              <div class="ex-col">
                <img src="assets/images/experties/15.png" alt="" />
              </div>
              <div class="ex-col">
                <img src="assets/images/experties/16.png" alt="" />
              </div>
              <div class="ex-col">
                <img src="assets/images/experties/17.png" alt="" />
              </div>
              <div class="ex-col">
                <img src="assets/images/experties/18.png" alt="" />
              </div>
              <div class="ex-col">
                <img src="assets/images/experties/19.png" alt="" />
              </div>
              <div class="ex-col">
                <img src="assets/images/experties/20.png" alt="" />
              </div>
              <div class="ex-col">
                <img src="assets/images/experties/21.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Our Expertise Section Ends --> */}

        
            </Fragment>
        )
    }
}
export default Home;