import React, { Component } from 'react';
import './App.css';
import TempDisplay from './components/TempDisplay'


const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
console.log(API_KEY)
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       zipcode: '',
       name:'',
       temperature:'',
       description:'',
       tempMin:'',
       tempMax: ''
      
    };
    this.handleUserInput= this.handleUserInput.bind(this)
    this.handleForSubmit= this.handleForSubmit.bind(this)


  };

  
  handleUserInput(event){
      this.setState({
          zipcode: event.target.value
      })
  }
  handleForSubmit(event){
    
      event.preventDefault()
      const url = `http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipcode},us&appid=ecdb98016180481113e553c63c73b276`
      // console.log(`form Submitted`,url)


      fetch(url)
      .then(response => response.json())
      .then(data =>{
          console.log(data.name)
          this.setState({
              name: data.name,
              temperature:data.main.temp,
              description: data.weather[0].description,
              tempMin: data.main.temp_min,
              tempMax: data.main.temp_max
          })
      })

  }
  render() {
    console.log(this.state)
    return (
     <div className="App">
     <h1>Weather App</h1>
     <form onSubmit={this.handleForSubmit}>
      <input onChange={this.handleUserInput} type="text" placeholder="Enter Zipcode" />
      <input  type="submit" value="Submit" />
      </form>
    {/* {this.state.name} */}
     {/* <TempDisplay 
     name={this.state.name}
     temperature={this.state.temperature}
     description={this.state.description}
     tempMin={this.state.tempMin}
     tempMax={this.state.tempMax}
     
/> */}
      <div>
       
        <h2> City:{this.state.name}</h2>
        <h2> Temperature:{this.state.temperature}</h2>
        <h2> Description:{this.state.description}</h2>
        <h2> Min Temp:{this.state.tempMin}</h2>
        <h2> Max Temp:{this.state.tempMax}</h2>
       
       </div>
    
    </div>
      
    );
  }
}

export default App;
