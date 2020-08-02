import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer'
import Home from './components/home';
import ApplicationDevelopment from './components/application-development';
import PortalDesign from './components/portal-design';
import About from './components/about';
import ApplicationMaintenance from './components/application-maintenance';
import Architecture from './components/architecture';
import Careers from './components/careers';
import Clients from './components/clients';
import CloudServices from './components/cloud-services';
import Contact from './components/contact';
import CyberSecurity from './components/cyber-security';
import DigitalMarketing from './components/digital-marketing';
import EnterpriseApplication from './components/enterprise-applications';
import ExperianceDesign from './components/experiance-design';
import Industry from './components/industry';
import Iot from './components/iot';
import Location from './components/location';
import MobileApplication from './components/mobile-application';
import Process from './components/process';
import Products from './components/products';
import Team from './components/team';
import Vision from './components/vision';
import Admin from "./components/admin";
import SlickSlider from "./components/slick"

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />

        <Route  exact path='/' component={ Home } />
        <Route path="/home" component={ Home } />
        <Route path="/application-development" component={ ApplicationDevelopment } />
        <Route path="/portal-design" component={ PortalDesign } />
        <Route path="/about" component={ About } />
        <Route path="/application-maintenance" component={ ApplicationMaintenance } />
        <Route path="/architecture" component={ Architecture } />
        <Route path="/careers" component={ Careers } />
        <Route path="/clients" component={ Clients } />
        <Route path="/cloud-services" component={ CloudServices } />
        <Route path="/contact" component={ Contact } />
        <Route path="/cyber-security" component={ CyberSecurity } />
        <Route path="/digital-marketing" component={ DigitalMarketing } />
        <Route path="/enterprise-application" component={ EnterpriseApplication } />
        <Route path="/experiance-design" component={ ExperianceDesign } />
        <Route path="/industry" component={ Industry } />
        <Route path="/iot" component={ Iot } />
        <Route path="/location" component={ Location } />
        <Route path="/mobile-application" component={ MobileApplication } />
        <Route path="/process" component={ Process } />
        <Route path="/products" component={ Products } />
        <Route path="/team" component={ Team } />
        <Route path="/vision" component={ Vision } />
        <Route path="/admin" component={ Admin } />
        <Route path="/slick" component={ SlickSlider } />


        <Footer />

      </BrowserRouter>
    </Fragment>
  );
}

export default App;
