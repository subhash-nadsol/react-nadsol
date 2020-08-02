import React, {Component, Fragment} from 'react';
import axios from 'axios';

class Careers extends Component{

  componentDidMount()
  {

  //GLOBAL RESTAPI-DATA
  const url="http://localhost/apis/readJob.php";

  axios.get(url)
  .then(  (res) => this.setState({   userdata: res.data })  )

  }

  constructor(props) {
    super(props)

    this.state = 
    {
        userdata:[""]// empty array
    }
  }
    render(){
        return(
            <Fragment>
                <div class="container-fluid inner-banner">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="assets/images/careers/banner.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h6>Contact At Anytime</h6>
              <p>NADSOL Techo Labs is committed in providing efficient and competitive solutions and <br />
                services that meet the requirements of the customers business objectives through <br />continual improvement of our skills, processes and systems.</p>
            </div>
        </div>
      </div>
    </div>
    <div class="leader">
      <h6 class="team-head mt-2">Career Opportunities</h6>
    </div>
  </div>
  {/* <!-- Banner Section End --> */}
  <div class="clear-both hght-40"></div>
{/* <!-- Careers Section Starts --> */}
  <div class="container-fluid p-0">
      <div class="row m-0">
          <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12 col-12 careers-nadsol">
              <h1>Life @ NADSOL</h1>
              <p>
                At NADSOL, work is more than a job. Not just to do something better, but to attempt things you've never thought possible. To lead in this new era of technology and solve some of the world's most challenging problems.
              </p>
          </div>
          <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12 col-12 careers-nadsol-img">
            <div id="careerscarousel" class="carousel slide" data-ride="carousel" data-pause="false">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="assets/images/careers/crowed.jpg" class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="assets/images/careers/crowed.jpg" class="d-block w-100" alt="..." />
                  </div>
                </div>
                <a class="carousel-control-prev" href="#careerscarousel" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#careerscarousel" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
          </div>
      </div>

      <div class="careers-caption">
        <div id="careerscarousel" class="carousel slide" data-ride="carousel" data-pause="false">
            <div class="carousel-inner">
              <div class="carousel-item active">
                  <p>
                    We always think about your future and growth.
                  </p>
              </div>
              <div class="carousel-item">
                <p>
                    We always think about your future and growth.
                </p>
              </div>
            </div>
          </div>
      </div>
  </div>
{/* <!-- Careers Banner Section Ends -->         */}

<div class="container careers-content">
    <h2>
        Are you a passionate to work on leading edge technologies? 
                        Find your dream Job here.
    </h2>
</div>

<div class="container careers-expansions"> 
    <div class="accordion" id="accordionExample">
      {
        this.state.userdata.map( (res)=>{
          return(
            <div class="card">
            <div class="card-header" id="{ res.id }" data-toggle="collapse" data-target="#{ res.id }" aria-expanded="true" aria-controls="{ res.id }">
              <img src="assets/images/careers/plus.png" alt="" />
              <h4 class="mb-0 collapsed">
                  { res.title }
              </h4>
            </div>
        
            <div id="{ res.id }" class="collapse" aria-labelledby="{ res.id }" data-parent="#accordionExample">
              <div class="card-body">
                <p>
                  Description: { res.description }
                </p>
  
                <ul>
                    <li>Experiance: { res.experiance }</li>
                    <li>Technologies: { res.technologies } </li>
                    <li>Job-Type: { res.jobtype }</li>
                    <li>Salary: { res.salary }</li>
                    <li>Job-Location: { res.location }</li>
                    <li>Qualifications: { res.qualification }</li>
                    <li>Share the profiles to: { res.email }</li>
                </ul>
  
              </div>
            </div>
          </div>
          )
        })
      }
        
    </div>
</div>

{/* <!-- Careers Section Ends --> */}
            </Fragment>
        )
    }
}

export default Careers;