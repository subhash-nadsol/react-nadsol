import React, { Component, Fragment } from 'react';
import axios from 'axios';

const url = 'http://localhost/apis/postJob.php';

class Admin extends Component {

    constructor(props){
        super(props)

        this.state={
            title : null,
            description : null,
            experiance : null,
            technologies : null,
            jobtype : null,
            salary : null,
            joblocation : null,
            qualification : null,
            email : null
        }
    }

    titleFeilds = (event)=> 
    {
        this.setState({ title: event.target.value })
    }

    descriptionFeilds = (event)=> 
    {
        this.setState({ description: event.target.value })
    }

    experianceFeilds = (event)=> 
    {
        this.setState({ experiance: event.target.value })
    }

    technologiesFeilds = (event)=> 
    {
        this.setState({ technologies: event.target.value })
    }

    jobtypeFeilds = (event)=> 
    {
        this.setState({ jobtype: event.target.value })
    }

    salaryFeilds = (event)=> 
    {
        this.setState({ salary: event.target.value })
    }

    joblocationFeilds = (event)=> 
    {
        this.setState({ joblocation: event.target.value })
    }

    qualificationFeilds = (event)=> 
    {
        this.setState({ qualification: event.target.value })
    }

    emailFeilds = (event)=> 
    {
        this.setState({ email: event.target.value })
    }

    submitForms = (event)=>
    {
        var formdata = 
        {
            "title": this.state.title,
            "description": this.state.description,
            "experiance": this.state.experiance,
            "technologies": this.state.technologies,
            "jobtype": this.state.jobtype,
            "salary": this.state.salary,
            "joblocation": this.state.joblocation,
            "qualification": this.state.qualification,
            "email": this.state.email
        }

        axios.post(url, formdata)
        .then( this.setState({ 
            message:"Account Submitted"
         }) );

         this.setState({
            title:'',
            description:'',
            experiance:'',
            technologies:'',
            qualification:'',
            salary:'',
            jobtype:'',
            joblocation:'',
            email:''
         })

         event.preventDefault();

    }

    render(){
        return(
            <Fragment>
                <div className="container-fluid inner-banner">
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
            <img src="assets/images/careers/banner.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h6>Contact At Anytime</h6>
              <p>NADSOL Techo Labs is committed in providing efficient and competitive solutions and <br />
                services that meet the requirements of the customers business objectives through <br />continual improvement of our skills, processes and systems.</p>
            </div>
        </div>
      </div>
    </div>
    <div className="leader">
      <h6 className="team-head mt-2">Career Opportunities</h6>
    </div>
  </div>
  {/* <!-- Banner Section End --> */}

  <div className="modal" tabIndex="-1" role="dialog">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-body">
        <p> { this.state.message } </p>
      </div>
    </div>
  </div>
</div>

                <div className="container admn_frm">
                    <h2 className="text-center mt-2">Form Submit</h2>
                    <div className="col-md-4 mx-auto">
                        <form className="form admin_frm">
                            <div className="form-group">
                            <label>Title:</label>
                            <input
                            type="text" 
                            className="form-control"
                            value={this.state.title}
                            onChange={this.titleFeilds.bind(this)} />
                            </div>

                            <div className="form-group">
                            <label>Technologies:</label>
                            <input 
                            type="text" 
                            className="form-control"
                            value={this.state.technologies}
                            onChange={this.technologiesFeilds.bind(this)} />
                            </div>

                            <div className="form-group">
                            <label>Qualification:</label>
                            <input 
                            type="text" 
                            className="form-control"
                            value={this.state.qualification}
                            onChange={this.qualificationFeilds.bind(this)} />
                            </div>

                            <div className="form-group">
                            <label>Experiance:</label>
                            <input 
                            type="text" 
                            className="form-control"
                            value={this.state.experiance}
                            onChange={this.experianceFeilds.bind(this)} />
                            </div>

                            <div className="form-group">
                            <label>Job-Type:</label>
                            <input 
                            type="text" 
                            className="form-control"
                            value={this.state.jobtype}
                            onChange={this.jobtypeFeilds.bind(this)} />
                            </div>

                            <div className="form-group">
                            <label>Job-Location:</label>
                            <input 
                            type="text" 
                            className="form-control"
                            value={this.state.joblocation}
                            onChange={this.joblocationFeilds.bind(this)} />
                            </div>

                            <div className="form-group">
                            <label>Salary:</label>
                            <input 
                            type="text" 
                            className="form-control"
                            value={this.state.salary}
                            onChange={this.salaryFeilds.bind(this)} />
                            </div>

                            <div className="form-group">
                            <label>Email:</label>
                            <input 
                            type="text" 
                            className="form-control"
                            value={this.state.email}
                            onChange={this.emailFeilds.bind(this)} />
                            </div>

                            <div className="form-group">
                            <label>Description:</label>
                            <textarea className="form-control" 
                            value={this.state.description}
                            onChange={this.descriptionFeilds.bind(this)}
                            >
                            </textarea>

                            </div>

                            <button 
                            type="button"
                            className="btn btn-primary mt-2"
                            onClick={this.submitForms}>
                                Create_Post
                            </button>

                        </form>
                    </div>
                </div>
            </Fragment>
        )
    }

}
export default Admin;