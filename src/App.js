import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home'
import Footer from './components/Footer'
import WebcamCapture from "./components/Webcam/Webcam";
function App() {
  return (
    <div className="App">
     <WebcamCapture/>
    </div>
  );
}

export default App;
