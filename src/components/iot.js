import React, {Component, Fragment} from 'react';

class Iot extends Component{

    render(){
        return(
            <Fragment>
                <div class="container-fluid iot-banner">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="assets/images/services/iot-banner.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Banner Section End --> */}

  <div>
    <div class="leader">
      <h6 class="team-head mt-2 iot">Internet of Things (IoT)</h6>
    </div>
  </div>


  <div class="container iot-container">
     <p>
      Smart products and solutions fueled by IoT will soon touch every aspect of our lives. Some will even think for us. Across industries, companies that connect products, operations and the enterprise create actionable intelligence giving them increased efficiency, improved productivity and transformed products.
    </p>

    <p>
      Success today means getting your best ideas to market faster and to operate differently to drive new value. NADSOL makes IoT real, connecting the digital and physical worlds to create intelligence, providing you a competitive advantage.
    </p>

    <p>
      Our IoT services include:
    </p>
  </div>

  <div class="container-fluid iot-layer">
  </div>

  <div class="iot-application">
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 iot-application-left">
      <h2>IoT Roadmap Definition</h2>
      <p> 
        Define a structured approach to understand your business requirements and advise you on the right IoT roadmap
      </p>

      <h2>IoT Solution Development</h2>
      <p> 
        Elicit requirements, define problem statement and provide recommendations on the services blueprint.
      </p>

      <h2>Intelligent Platforms</h2>
      <p> 
        Design end-to-end connected multi-tenant open platform architecture to support IoT resources cost-efficiently and reliably.
      </p>

      <h2>Vertical Applications</h2>
      <p> 
        Iterative customer design driven end-device and mobile application development with cross-platform support
      </p>

      <h2>End-to-End System Integration</h2>
      <p> 
        Integration of multiple IoT assets with different functionalities, departments and stages across the product life-cycle.
      </p>

      <h2>Real-Time Processing and Analytics</h2>
      <p> 
        Streaming analytics for IoT device data, BigData and visualization solutions.
      </p>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 iot-application-right">
      <h2>The Internet of Things is leading in the Next 
        Industrial Revolution</h2>
        <p>
          At NADSOL, we understand that the power of IoT is unleashed by not just connecting sensors but by employing advanced analytics models right at the edge, to enable real-time, here-and-now actions. True success in IoT comes only when it is coupled with design thinking to keep the human element right at the center. Our design thinking-centered approach to IoT ensures that it is useful to the most important element of all people.
        </p>
    </div>
  </div>

            </Fragment>
        )
    }
}

export default Iot;