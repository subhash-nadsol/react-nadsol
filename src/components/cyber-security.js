import React, {Component, Fragment} from 'react';

class CyberSecurity extends Component{

    render(){
        return(
            <Fragment>
                <div class="container-fluid inner-banner">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="assets/images/services/cyber-banner.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Banner Section End --> */}

  <div>
    <div class="leader">
      <h6 class="team-head mt-2">Cyber Security</h6>
    </div>
  </div>

  <div class="container dgtlmrktng">
    <p>
      Nadsol helps you to be more secure and resilient.
    </p>

    <p>
      Outdated security solutions. Sophisticated cyberthreats. Increasing compliance requirements. Faced with these and other security challenges, today’s companies need a proactive partner who can anticipate and neutralize threats before they materialize.
    </p>

    <p>
      At Nadsol, we approach security as the starting point for delivering the outcomes that leading global organizations demand. Our end-to-end security solutions combine deep domain and industry expertise with a future-focused approach that encompasses advisory, transformation and managed services. We offer the foresight and expertise to solve your most complex challenges.
    </p>
  </div>

  <div class="container cyber">
    <div class="row">
      <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12 col-12 cyber-one">
        <h2>1)	Governance /Compliance</h2>
        <h3>ISMS Framework, ISO CERT-PATH, Sustenance:</h3>
        <p>
          ISO/IEC 27001 is an Infosec Standard, NADSOL help you in state assessment, gap analysis and Certified.  Our ISMS policies, audits for sustenance.
        </p>
      </div>
      <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12 col-12 cyber-two">
        <img src="assets/images/services/compliance.jpg" alt="" />
      </div>
    </div>
  </div>

  <div class="container cyber-content">
    <h2 class="cyber-content-2">2)	Cloud and Infrastructure Security</h2>
    <div class="row">
      <div class="col-xl-4 cyber-content-one">
        <div class="col-12 p-0">
          <div class="col-12 fusion-services">
            <h5>
              Managed Cyber Fusion Services:
            </h5>
            <p>
              NADSOL CFC embodies Detection, Response, Threat hunting, Intel and Data Sciences. 
            </p>

            <h5 class="mt-4 mb-4">
              Identity and Access Management:
            </h5>
            <p>
              IAM is the security discipline that enables individuals to access the right resources at the right times for the right reasons.  Our IAM Framework helps you in enabling this discipline across various functional units. 
            </p>
          </div>
          <img src="assets/images/services/security-screen.jpg" alt="" />
        </div>

        <div class="col-12 one-levels">
          <h5>
            Threat Hunting / Threat Intel:
          </h5>
          <p>
            NADSOL Threat hunting gathers real-time threat intelligence and enable cyber security teams of your organization to hunt threats faster. 
          </p>

          <h5>
            Secure Cloud:
          </h5>
          <p>
            NADSOL Secure Cloud Program helps you with Secure migration, Tightening the security controls at various layers, and integrate the complete feeds to SOC/CFC   
          </p>

          <h5>
            Secure Containers/Kubers/Micro Services:
          </h5>
          <p>
            NADSOL Secure Containerasation, Secure Orchestrations (Kubers), Secure Micro Services helps your developers build code securely.  
          </p>

          <h5>
            Web Application Security Assessment:
          </h5>
          <p>
            NADSOL Web VAPT framework helps you in reviewing the security posture of your web applications in order to build reliable and secure software. 
          </p>
        </div>
      </div>
      <div class="col-xl-3 cyber-content-two">
        <div class="col-xl-12 p-0">
          <img src="assets/images/services/security-hand.jpg" alt="" />
          <div class="scrty-hnd">
            <h5>Threat Modeling:</h5>

            <p>
              Threat modeling optimizes network security by identifying objectives and vulnerabilities.  NADSOL helps you in defining, prevent, or mitigate the effects of, threats to the system.   
            </p>

            <h5>INFRA Vulnerability Assessment & Penetration Testing (VAPT):</h5>

            <p>
              NADSOL helps you in analysing the security state of Network Infra with our VAPT framework, and helps you to mitigate.   
            </p>

            <h5>Static / Dynamic Malware Analysis:</h5>

            <p>
              NADSOL Static analysis examines malware both static and dynamic environments and provides you IOC, recommendations to keep you safe and secure.   
            </p>

            <h5>Mobile:</h5>

            <p>
              NADSOL helps in analysing the state of security posture of mobile applications, apks and helps building respective security controls in mobile apps.   
            </p>
          </div>
          <img src="assets/images/services/mobile-security.jpg" alt="" />
        </div>
      </div>
      <div class="col-xl-5 cyber-content-three">
        <div class="col-12 p-0">
          <div class="msoc">
            <h5>Managed Security Operations Center: </h5>
            <p>
              NADSOL Managed SOC team helps you in detecting, identifying, investigate and responding to security incidents.
            </p>

            <h5>Secure Source Code Analysis:</h5>
            <p>
              NADSOL Source code analysis (SAST) and BOTs will help you in analyzing your source code and/or compiled versions of code to help find security flaws.  
            </p>

            <h5>DEVSECOPS:</h5>
            <p>
              NADSOL DevSecOps offering f involves creating a 'Security as Code' culture with ongoing, flexible collaboration between release engineers and security teams. Our Framework and Methodology helps you agile. 
            </p>
          </div>
          <img src="assets/images/services/devsecops.jpg" alt="" />
          <div class="scrty-hnd mt-2">
            <h5>Secure Config Review Services:</h5>
            <p class="pb-4">
              NADSOL Security Configuration review framework helps in identifying the missing security controls, and helps the applications with tightened Security controls.
            </p>
          </div>
          <img src="assets/images/services/review-service.jpg" alt="" />
        </div>

        <div class="one-levels mt-2">
          <h3>3. Strategy</h3>

          <h5>
            Security Architectural Solutions / 
            Security Gap Analysis:
          </h5>

          <p>
            NADSOL Security architects help you in designing the security strategy, bridges the architectural gaps and make your IT Secure.
          </p>
        </div>
      </div>
    </div>
  </div>

            </Fragment>
        )
    }
}

export default CyberSecurity;