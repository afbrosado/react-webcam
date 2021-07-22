import React from 'react';
import Webcam from "react-webcam";

const videoConstraints = {
  height: 1080, //set pic resolution
  width: 1920, //set pic resolution
  facingMode: "environment" //use back camera
  // facingMode: "user" //use front camera
};

class WebcamCapture extends React.Component {
  constructor(props) {
    super(props);
    this.webcamRef = React.createRef();
  }

  state = {
    url: null,
    NewZipPic: null,
    URLArray: []
  };

  componentDidMount() {
    if (navigator.permissions && navigator.permissions.query) {
      navigator.permissions
        .query({ name: "camera" })
        .then((permissionObj) => {
          if (permissionObj.state !== "granted") {
            // Show how to grant accress right to browser
            alert("Show Alert box, teaching how to allow camera");
          }
          console.log(permissionObj.state);
        })
        .catch((error) => {
          console.log("Got error :", error);
        });
    }
  }

  render() {
    return (
      <>
        <Webcam
          //https://www.npmjs.com/package/react-webcam
          ref={this.webcamRef}
          audio={false}
          screenshotQuality={1} // set the Quality of camera (0-1)
          forceScreenshotSourceSize
          // screenshotFormat="image/png"
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints} //cameraSetting,eg:resolution, use which camera
          height="400px" // size of displaying screen
          width="400px" // size of displaying screen
          // onUserMedia={(e) => console.log(e)} // show info of media stream
        />
        <h1>sadfih</h1>
      </>
    );
  }
}

export default WebcamCapture;