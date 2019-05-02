import React, {Component} from 'react';
import Clarifai  from 'clarifai';
import './App.css';
import FaceRecognation from './Components/FaceRecognation/FaceRecognation'
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Rank from './Components/Rank/Rank'
import Particles from 'react-particles-js';
import 'tachyons';


const app = new Clarifai.App({
  apiKey: 'e9131fbf528440f0b9571a8f2da369ef'
 });
 console.log(app);

const particlesOptions = {
  particles: {
    number :{
      value : 300,
      density :{
        enable : true,
        value_area : 800
      }
    } 
  }
        
};

class App extends Component{
  constructor(){
    super();
    this.state = {
      input : '',
      imageUrl : ''
    }
  }
  onInputChange = (event) => {
    this.setState({input : event.target.value});
  }

  onButtonSubmit = (event) =>{
    this.setState({imageUrl : this.state.input});
    console.log(this.state.imageUrl);

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
    function(response) {
      // do something with response
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    },
    function(err) {
      // there was an error
    }
  );
   
    
  }

  render(){
    return (
      <div>
        <Particles className='particles'
        params={particlesOptions}/>

        < Navigation />
        < Logo />
        < Rank />
        < ImageLinkForm 
          onInputChange = {this.onInputChange} 
          onButtonSubmit= {this.onButtonSubmit}/>

        < FaceRecognation imageUrl = {this.state.imageUrl}/>
        
      </div>
    );
  }
}

export default App;
