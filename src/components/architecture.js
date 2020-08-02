import React, {Component, Fragment} from 'react';

class Architecture extends Component{

    render(){
        return(
            <Fragment>
                <div class="container-fluid inner-banner">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="assets/images/services/experiance-banner.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Banner Section End --> */}

  <div>
    <div class="leader">
      <h6 class="team-head mt-2">Architecture</h6>
    </div>
  </div>

  <div class="container architect-main-para">
    <div class="col-xl-11 col-lg-11 col-md-11 col-sm-12 col-xs-12 col-12 mx-auto">
      <h5>
        Enterprise Architecture helps business management achieve 
        its strategic goals. It supports the company in creating competitive 
        advantage, reduces risks and enhances cost-efficiency and scalability. 
        Mergers and acquisitions, outsourcing and major organizational changes all set additional demands on the flexibility of Enterprise Architecture.
      </h5>
    </div>
  </div>

  <div class="container architecture">
    <div class="row">
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 para">
        <p>Enterprise Architecture Consulting we do:</p>
        
        <p>
          Blueprint that defines an enterprise architecture is to determine how an organization can most effectively achieve its current and future objectives through TOGAF Model having business architecture, information, application and technology architecture that are common to all businesses and are essential in integrating Domain Architectures.
        </p>

        <p>
          Provide a long-term view and facilitate the development of the company’s processes, systems and technologies as well as the execution of the business strategy.
        </p>

        <p>
          Create, manage and develop a holistic, interconnected model of the enterprise that encompasses processes, information, applications and technology.
        </p>

        <p>
          Ensure consistency and enable integration.
        </p>

        <p>
          Create, develop and manage a holistic, Strategy, high-level roadmap of engagements and projects that realize required solutions and to provide a clear path from current state to target state.
        </p>

        <p>
          Enable lifecycle management of the solution portfolio.
        </p>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 image">
        <img src="assets/images/services/architecture.jpg" alt="" />
      </div>
    </div>
  </div>

            </Fragment>
        )
    }
}

export default Architecture;