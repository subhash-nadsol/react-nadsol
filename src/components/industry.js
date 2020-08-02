import React, {Component, Fragment} from 'react';

class Industry extends Component{

    render(){
        return(
            <Fragment>
                <div class="container-fluid industry-banner">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="assets/images/industry/banner.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block inner-responsive-carousel-caption">
                <p>We always glad to support our customers to Increase Sales and Enhance Customer Experience.</p>

                <li>
                    Regardless of what industry you are in, NADSOL is always ready to provide adaptable and comprehensive solutions that drive business results. NADSOL software applications are built on decades of experience in key industry verticals, by experts who understand the unique challenges that face your organization.
                </li>
            </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Banner Section End --> */}


  <div class="h-60">
    <div class="leader">
        <h6 class="team-head mt-2">Industries</h6>
      </div>
  </div>

  <div class="container-fluid industry">
    <div class="container industry-psg">
        <p>
          Our experts provide tailored solutions across all industries to overcome your business challenges and give you a competitive edge. <br class="responsive-br" />
            Listed below are some of the industries that we offers our services:
        </p>
    </div>
  </div>
 <div class="container-fluid pb-5 rspnsv-pdng-btm" style={ {backgroundColor: '#ececec'} }>
    <div class="container industry-background">
        <div class="row">
            <div class="manual-col-3">
                <img src="assets/images/industry/1.png" alt="" />
                <p>Manufacturing</p>
            </div>
            <div class="manual-col-3">
                <img src="assets/images/industry/2.png" alt="" />
                <p>Healthcare & Pharmaceuticals</p>
            </div>
            <div class="manual-col-3">
                <img src="assets/images/industry/3.png" alt="" />
                <p>Real Estate & Constructions</p>
            </div>
            <div class="manual-col-3">
                <img src="assets/images/industry/4.png" alt="" />
                <p>Energy and Utilities</p>
            </div>
            <div class="manual-col-3">
                <img src="assets/images/industry/5.png" alt="" />
                <p>Retail</p>
            </div>
            <div class="manual-col-3">
                <img src="assets/images/industry/6.png" alt="" />
                <p>Education</p>
            </div>
            <div class="manual-col-3">
                <img src="assets/images/industry/7.png" alt="" />
                <p>Transportation Services Sector</p>
            </div>
            <div class="manual-col-3">
                <img src="assets/images/industry/8.png" alt="" />
                <p>Aerospace and Defense</p>
            </div>
            <div class="manual-col-3">
                <img src="assets/images/industry/9.png" alt="" />
                <p>Hospitality and Leisure </p>
            </div>
            <div class="manual-col-3">
                <img src="assets/images/industry/10.png" alt="" />
                <p> Information Technology </p>
            </div>
            <div class="manual-col-3">
                <img src="assets/images/industry/11.png" alt="" />
                <p> Logistics and Distribution </p>
            </div>
            <div class="manual-col-3">
                <img src="assets/images/industry/12.png" alt="" />
                <p> Communication Services </p>
            </div>
            <div class="manual-col-3">
                <img src="assets/images/industry/13.png" alt="" />
                <p> Agriculture </p>
            </div>
            <div class="manual-col-3">
                <img src="assets/images/industry/14.png" alt="" />
                <p> Media & Entertainment  </p>
            </div>
            <div class="manual-col-3">
                <img src="assets/images/industry/15.png" alt="" />
                <p> Food & Beverages   </p>
            </div>
          </div>
     </div>
 </div>
            </Fragment>
        )
    }
}

export default Industry;