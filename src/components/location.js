import React, {Component, Fragment} from 'react';

class Locaion extends Component{

    render(){
        return(
            <Fragment>
                <div class="container-fluid about-banner location-banner">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="assets/images/services/contact.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  </div>
  <div class="leader">
    <h6 class="team-head mt-2">Our Offices</h6>
  </div>
  {/* <!-- Banner Section End --> */}

  <div class="container location-container">

    <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12 col-12 location-para mx-auto">
      <p>
        Our clients are spread across the globe including UK, United States of America (USA), Middle East and India.
      </p>
    </div>

    <div class="row">
      <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12 col-12 ofc">
        <img src="assets/images/offices/3.png" alt="" />
        <h3>India</h3>
        <p>
          NADSOL TECHNO LABS PVT. LTD.
          Sri Balaji Towers, #402
          Near Trishul Grand Hotel, Hi-Tech City
          Madhapur, Hyderabad - 500081
          Telangana State, INDIA. <br />
          Contact: 040-49525958, +91-9849120930 <br />
          Email: info@nadsol.com, haranath@nadsol.com
        </p>
      </div>
      
      <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12 col-12 ofc pt-5 dubai">
        <img src="assets/images/offices/1.png" alt="" />
        <h3>Dubai</h3>
        <p>
          Post box: 43855 <br />
          Dafza, United Arab Emirates (UAE). <br />
          Email: maria@nadsol.com
        </p>
      </div>
      
      <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12 col-12 ofc mt-5">
        <img src="assets/images/offices/2.png" alt="" />
        <h3>Canada</h3>
        <p>
          2233 Argentia road, Suite #302, East tower, <br />
          Mississauga, Ontario, Canada, L5N 6A6. <br />
          Email: shiva.kukatla@nadsol.com
        </p>
      </div>
    </div>
  </div>
  
            </Fragment>
        )
    }
}

export default Locaion;