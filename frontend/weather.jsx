import React from 'react'

class Weather extends React.Component {
  constructor(props) { 
    super(props)
    this.buildHttpRequest = this.buildHttpRequest.bind(this);
    this.state = { temp: "Loading Weather...", location: "Getting Location..." }
  } 
  // componentDidMount() {
  //   navigator.geolocation.getCurrentPosition(this.buildHttpRequest);
  // }

 
  buildHttpRequest(position) { 
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = () => {  
      if (httpRequest.readyState === 4) {
        var weather = JSON.parse(httpRequest.response);
        var temp = weather.main.temp;
        var location = weather.name;
        this.setState({ temp: temp, location: location });
      }
    }
    var key = '7b81880a48e7dd70e0343840d7bf8a81';
    var url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${key}`;

    httpRequest.open('GET', url, true);
    httpRequest.send();
   
  }

  render() { 
    
    return (
      <div className="weather">
          <h1>Weather</h1>
          <section className="weather-results"> 
            <p className="temp-location">{this.state.location}</p> 
            <p className="temp-location">{this.state.temp}</p> 
          </section>
      </div>
    );
  }

}

export default Weather