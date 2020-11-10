import React from 'react';

class Freecontent extends React.Component{

    render(){
        return(
            <React.Fragment>
            <h1>Free binge Content</h1>
            <div>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
            </div>
            </React.Fragment>

    );
    }
}

export default Freecontent;
  