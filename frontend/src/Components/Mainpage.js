import React from 'react';
import {withRouter } from 'react-router-dom';
import logo from '../Images/1.png';
import logo1 from '../Images/2.png';
import axios from 'axios';

class Mainpage extends React.Component{
      //   constructor(props) {
      //     super(props);

      //     this.state = {
      //       video: ''
      //     }
      //     this.handleSubmit = this.handleSubmit.bind(this)
      // }

          handleChange =(e)=> {
            // this.setState({ video: e.target.value });
            this.setState({[e.target.name]: e.target.value })
            // console.log(e.target.name);
           }

          handleSubmit(e) {
            e.preventDefault()
            const userObject = {
              video: this.state.video
              };

            console.log(userObject);
            axios.post("http://localhost:3030/api/insert",userObject)
            .then((res) => {
              console.log(res)
          })
          .catch((error) => {
              console.log(error)
          })
          // this.setState({ userObject: ''});
          }

          constructor(props){
            super(props);
              this.state ={
                selectedFile:null
              }
            }
          
// file upload code here....
          onFileChange=(e)=>{
            // console.log(e.target.files[0])
            this.setState({
              selectedFile: e.target.files[0],
              loaded: 0,
            })
          }

          onFileUpload = (e) => 
          {
            e.preventDefault();
            const data = new FormData()
            console.log(data);
            data.append('imgfile',this.state.selectedFile,this.state.selectedFile.name)
      // console.log(data.selectedFile);
            axios.post("http://localhost:3030/upload",data,{
            })
            .then((res) => {
              // console.log(res)
              console.log(res.statusText)
          })
          // .catch((error) => {
            .catch((res) => {
              // console.log(error)
              console.log(res.statusText)
          })
          }

          
      latestcontent = () => 
        {
                this.props.history.push("/Latestcontent");
        }
      content = () => 
      {
        this.props.history.push("/Content");

      }
      newcontent= () =>
      {
        this.props.history.push("/Newcontent");
      }
      oldcontent= () => 
      {
        this.props.history.push("/Oldcontent");
       }
      freecontent = () =>
      {
        this.props.history.push("/Freecontent");
      }
      display = ()=> {
          // this.props.history.push("/Latestcontent/latestcontentshow");
      }

    render(){
        return(
            <React.Fragment> 
            {/* file upload code here */}
                <div> 
                <input type="file" name="imgfile" onChange={this.onFileChange} /> 
                <button onClick={this.onFileUpload}> 
                  Upload! 
                </button> 
            </div>   
            {/* //name sumbit example  */}
            <div>
            <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="video" value={this.state.video} onChange={this.handleChange} />
          {/* <input type="text" id="customer_name" value={this.state.customer_name} onChange={this.onChangeUserName}/> */}
        </label>
        {/* <input type="button" value="Submit" /> */}
        <button type="submit">submit </button>
      </form>
      </div>

            <div>
                <h1 className="content" onClick = {this.latestcontent}>Latest Content
                <img />
                </h1>
            </div>
            <div onClick={this.display}>
                <img className="logo" src={logo}/>
                <img className="logo" src={logo1}/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
            </div>
            <div>
                <h1 className="content" onClick = {this.content}> Content </h1>
            </div>
            <div>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
            </div>
            <div>
                <h1 className="content" onClick = {this.newcontent}> New Added Content </h1>
            </div>
            <div>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
            </div>
            <div>
                <h1 className="content" onClick={this.oldcontent}> 90's Content </h1>
            </div>
            <div>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
                <img className="logo" src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo image"/>
            </div>
            <div>
                <h1 className="content" onClick={this.freecontent}> Free binge Content </h1>
            </div>
            <div>
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
    
    export default withRouter(Mainpage);