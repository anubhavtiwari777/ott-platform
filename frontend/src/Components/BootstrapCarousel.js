import React from 'react';
import logo from '../Images/1.png';
import logo1 from '../Images/2.png';
import logo2 from '../Images/3.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'  

export class BootstrapCarousel extends React.Component {  
  render() {  

          return (  
                  <div>  
                   <div class='container-fluid' >  
                    <div className="row title" style={{ marginBottom: "0px"}} >   
                   </div>  
                   </div>  
                   <div className='container-fluid' id="slider">  
                   <Carousel>  
                   <Carousel.Item style={{'height':"400px"}} >  
                   <img style={{'height':"300px"}}  
                   className="d-block w-100"  
                  src={logo}  />  
                     <Carousel.Caption>  
                       <h3>First Demo </h3>  
                           </Carousel.Caption>  
                           </Carousel.Item  >  
                           <Carousel.Item style={{'height':"400px"}}>  
                           <img style={{'height':"300px"}}  
                             className="d-block w-100"  
                              src={logo2}    />  
                                 <Carousel.Caption>  
                             <h3>Second Demo</h3>  
                                </Carousel.Caption>  
                                   </Carousel.Item>  
                                 <Carousel.Item style={{'height':"400px"}}>  
                                 <img style={{'height':"300px"}}  
                                  className="d-block w-100"  
                                   src={logo1}   />  
                                  <Carousel.Caption>  
                                    <h3>Third Demo</h3>  
                                    </Carousel.Caption>  
                                   </Carousel.Item>  
                                  </Carousel>  
                          </div>  
                  </div>  
          )  
  }  
}  

export default BootstrapCarousel