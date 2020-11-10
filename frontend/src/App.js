import React from 'react';
import './App.css';
import {Redirect, Route, Switch } from 'react-router-dom';
//Components
import Navbar from './Components/Navbar';
import BootstrapCarousel from './Components/BootstrapCarousel';
import Mainpage from './Components/Mainpage';
import Content from './Components/Content';
import Newcontent from './Components/Newcontent';
import Oldcontent from './Components/Oldcontent';
import Freecontent from './Components/Freecontent';
import Latestcontentshow from './Components/Latestcontentshow';
import Latestcontent from './Components/Latestcontent';
import Error from './Components/Error';
import Footer from './Components/Footer';
//dependencies
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <React.Fragment>
    <div className="App">
      <Navbar/>
      <BootstrapCarousel/>
      
      {/* <Mainpage/> */}
    </div>
    {/* <div className="App"> */}
      <Switch>
          {/* <Route path='/' component={Navbar} />
          <Route path='/' component={Slider} /> */}
          <Route exact path='/' component={Mainpage} />
          <Route exact path='/Latestcontent' component={Latestcontent} />
          <Route exact path='/Content' component={Content} />
          <Route exact path='/Newcontent' component={Newcontent} />
          <Route exact path='/Oldcontent' component={Oldcontent} />
          <Route exact path='/Freecontent' component={Freecontent} />
          <Route exact path='/Latestcontent/latestcontentshow' component={Latestcontentshow} />
          <Route component={Error} />
          {/* <Redirect to="/"/> */}
      </Switch>
      <Footer/>
      {/* </div> */}
  </React.Fragment>
  );
}

export default App;