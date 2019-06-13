import React, {Component} from 'react';
import Clarifai  from 'clarifai';
import './App.css';
import FaceRecognation from './Components/FaceRecognation/FaceRecognation'
import Navigation from './Components/Navigation/Navigation';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Rank from './Components/Rank/Rank'
import Footer from './Components/footer/footer'
import Particles from 'react-particles-js';
import 'tachyons';


const app = new Clarifai.App({
  apiKey: 'e9131fbf528440f0b9571a8f2da369ef'
 });
 console.log(app);

const particlesOptions = {
  particles: {
    number :{
      value : 400,
      density :{
        enable : true,
        value_area : 800
      }
    } 
  }
        
};
const initialstate = {
  input : '',
  imageUrl : '',
  box : {},
  route : 'signin',
  isSignedIn : false,
  user : {
    id : '',
    name : '',
    enteries : '',
    joined : ''
  }
}

class App extends Component{
  constructor(){
    super();
    this.state = initialstate;
  }
  //fetching the users from the server
  // componentDidMount(){
  //   fetch('http://localhost:3001/')
  //   .then(response => response.json())
  //   .then(console.log)
  // }

  loadUser = (data) =>{
    console.log("data after signin", data)
    this.setState({user : {
      id :data.id,
      name : data.name,
      enteries : data.enteries,
      joined : data.joined
    }})
  }

  calculateLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    console.log("bouding box from the api",clarifaiFace)
    const image = document.getElementById("inputimage")
    const height = Number(image.height)
    const width = Number(image.width);
    console.log(height, width) 
 
    return {
      leftCol : clarifaiFace.left_col * width,  
      topRow : clarifaiFace.top_row *height,
      rightCol : width-(clarifaiFace.right_col * width),
      bottomRow : height-(clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log("from box",box);
    this.setState({box : box});
  }

  onRouteChange = (route) => {
    if(route ==='signout'){
      this.setState(initialstate);
    }
    else if(route ==='home'){
      this.setState({isSignedIn : true});
    }
    this.setState({route : route});
    
  } 

  onInputChange = (event) => {
    this.setState({input : event.target.value});
  }

  onButtonSubmit  = (event) =>{
    this.setState({imageUrl : this.state.input});
    //console.log(this.state.imageUrl);

    app.models
    .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => {
      if(response){
        fetch('http://localhost:3001/image',{
          method : 'put',
          headers : {
              'Content-type' : 'application/json'
          },
          body : JSON.stringify({
            id : this.state.user.id,
          })
        }).then(response => response.json())
         .then(user => this.loadUser(user))
      }
      this.displayFaceBox(this.calculateLocation(response))})
    .catch(err => console.log(err));
  }

  render(){
    return (
      <div>
        <Particles className='particles'
        params={particlesOptions}/>

        < Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
        { this.state.route === 'home'
          ? <div>
              < Logo />
              < Rank user = {this.state.user}/>
              < ImageLinkForm 
                onInputChange = {this.onInputChange} 
                onButtonSubmit= {this.onButtonSubmit}/>
              < FaceRecognation box={this.state.box} imageUrl = {this.state.imageUrl}/>
              <Footer />
            </div>
          : ( this.state.route === 'signin'
              ? < SignIn onRouteChange = {this.onRouteChange} loadUser = {this.loadUser}/> 
              : < Register loadUser={this.loadUser} onRouteChange = {this.onRouteChange}/>

          )
        }
        
      </div>
    );
  }
}

export default App;
