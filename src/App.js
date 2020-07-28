import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer'
import Home from './components/home';
import ApplicationDevelopment from './components/application-development';
import PortalDesign from './components/portal-design';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />

        <Route  exact path='/' component={ Home } />
        <Route path="/home" component={ Home } />
        <Route path="/application-development" component={ ApplicationDevelopment } />
        <Route path="/portal-design" component={ PortalDesign } />
        <Footer />

      </BrowserRouter>
    </Fragment>
  );
}

export default App;
