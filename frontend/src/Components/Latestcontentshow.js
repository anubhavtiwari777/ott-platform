import React from 'react';
// import ReactPlayer from 'react-player'
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import video from '../Videos/v.mp4';
import logo4 from '../Images/1.png';
import axios from 'axios';


class Latestcontentshow extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
    render(){
        return(
            <React.Fragment>
             <div className="show">
                 {/* <ReactPlayer controls url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> */}

                    {/* <img className="logo1" src={logo}  width="1270" height="500"
                     vertical-align="top"
                     display= "inline-block"
                     text-align= "center"
                    //  width: 120px;
                    /> */}
                    {/* <Video autoPlay loop muted */}
                    <Video
                        controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                        poster={logo4}
                        onCanPlayThrough={() => {
                            // Do stuff
                        }}>
                        <source src={video} type="video/webm" />
                        <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />
                    </Video>
             </div>
            </React.Fragment>

    );
    }
}

export default Latestcontentshow;
  