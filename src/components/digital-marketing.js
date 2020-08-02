import React, {Component, Fragment} from 'react';

class DigitalMarketing extends Component{

    render(){
        return(
            <Fragment>
                <div class="container-fluid inner-banner">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="assets/images/services/seo-banner.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Banner Section End --> */}

  <div>
    <div class="leader">
      <h6 class="team-head mt-2">Digital Marketing</h6>
    </div>
  </div>

  <div class="container dgtlmrktng">
    <p>
      As a Digital Marketing company, NADSOL Technologies provides entire services in promotions of products and brands in the world of Internet Marketing to reach customers. We provide services of search engine optimization (SEO), search engine marketing (SEM), Social Media Optimizations and many more.
    </p>

    <p>
      Our expert team of Internet Marketing has created an arena in marketing products, brands, and services to increase sales and marketing.
    </p>
  </div>

  <div class="container digital-marketing">
    <div class="row">
      <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-5 col-5 mx-auto seo">
        <div class="media">
          <img src="assets/images/services/SEO.png" class="mr-3" alt="SEO" />
          <div class="media-body">
            <h5 class="mt-0">Search Engine Optimization <br />
              (SEO)</h5>

            <p>
              Search Engine Optimization (SEO) is a process to increase the number of visitors and give visibility of your website or a web page by obtaining high rankings on search engine pages through natural or un-paid (organic) search results.
            </p>
          </div>
        </div>
      </div>
      <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-5 col-5 mx-auto sem">
        <div class="media">
          <img src="assets/images/services/SEM.png" class="mr-3" alt="SEM" />
          <div class="media-body">
            <h5 class="mt-0">Search Engine Marketing <br />
              (SEM)</h5>

            <p>
              Search Engine Marketing (SEM) is a strategy of Internet Marketing which focus to increase visibility of a website in search engine result pages (SERP) and Pay Per Click (PPC) listings through optimization and advertising.
            </p>
          </div>
        </div>
      </div>
      <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-5 col-5 mx-auto sem">
        <div class="media">
          <img src="assets/images/services/SMO.png" class="mr-3" alt="SEM" />
          <div class="media-body">
            <h5 class="mt-0">Social Media Optimization <br />
               (SMO)</h5>

            <p>
              Social Media Optimization (SMO) is a process of gaining traffic through various social media sites to increase the awareness of brands, products, or services. It includes RSS feeds, social networking sites, social news, video and blog sites.
            </p>
          </div>
        </div>
      </div>
      <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-5 col-5 mx-auto seo">
        <div class="media">
          <img src="assets/images/services/DCM.png" class="mr-3" alt="SEO" />
          <div class="media-body">
            <h5 class="mt-0"> Digital Content Marketing <br />
              <br />
              </h5>
            <p>
              Content Marketing is a marketing technique publishes a relevant, valuable, and unique contents attract visitors and making them into a potential customer on various format. It is driven to improve your business or organization.
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

export default DigitalMarketing;