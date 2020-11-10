import React from 'react';
import {withRouter } from 'react-router-dom';
import logo from '../Images/1.png';

class Navbar extends React.Component{
            home= ()=>{
              this.props.history.push("/");
            }
            profile=()=>{
              alert("profile page clicked");
            }
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand" href="#">LOGO</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#" onClick={this.home}>Home <span className="sr-only"></span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Movies</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Latest</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Recent Added</a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
              <br/>
              <br/>
              <img className="profile" src={logo} onClick={this.profile}/>
              
              <div class="dropdown">
  <span>Mouse over me</span>
  <div class="dropdown-content">
  <p>Hello World!</p>
  </div>
</div>
            </div>
          </nav>
    );
    }
}

export default withRouter(Navbar);
  