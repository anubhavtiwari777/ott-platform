import React from 'react';

class Latestcontent extends React.Component{
    latestcontentshow= () => 
    {
      this.props.history.push("/Latestcontent/latestcontentshow");
     }
    render(){
        return(
            <React.Fragment>
            <h1>Latest Content</h1>
            <div onClick = {this.latestcontentshow}>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
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

export default Latestcontent;
  