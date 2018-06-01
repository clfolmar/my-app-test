import React, { Component } from 'react';
import logo from './logo.svg';
import Map from './components/Map'
import GeoLocationData from './components/GeoLocationData'
import SearchInput from './components/SearchInput'
import superagent from 'superagent'
import './App.css';
/*global google*/

class App extends Component {
  constructor(props) {
        super(props);

        this.state = {
            fieldVal: "",
            data: {},
            address: "",
            latitude: null,
            longitude: null,
            
        };

        this.ipSearch = this.ipSearch.bind(this);
    }

componentDidMount() {
        console.log('componentDidMount')

        const url = "https://api.apility.net/geoip/24.63.253.74?token=4c3af26b-44a7-41ee-8505-6b2a9b7e81b8"
            
        superagent
        .get(url)
        .query(null)
        .set('Accept', 'text/json')
        .end((error, response) => {

            const data = response.body
            console.log(JSON.stringify(data))
            this.setState({
                data: data.ip,
                // 24.63.253.74
                address: data.ip.address,
                // 42.9317 - data.ip.latitude
                latitude: parseFloat(data.ip.latitude),
                // -70.8427 - data.ip.longitude
                longitude: parseFloat(data.ip.longitude),
                // {lat: 42.9317 - data.ip.latitude, lng: -70.8427 - data.ip.longitude }
                //location: new google.maps.LatLng(data.ip.latitude,data.ip.longitude)
            })
            console.log('this.state.data', this.state.data)
        })
    }

ipSearch(val){
        
        console.log('***IP SEARCH*** ' + val)
        const url = "https://api.apility.net/geoip/" + val + "?token=4c3af26b-44a7-41ee-8505-6b2a9b7e81b8"
        console.log('this is the ipSearch url: ' + url)

        superagent
        .get(url)
        .query(null)
        .set('Accept', 'text/json')
        .end((error, response) => {

            const searchData = response.body
            console.log("ipSearch json data: " + JSON.stringify(searchData))
            console.log("ipSearch lat: " + this.state.latitude)
            console.log("ipSearch lng: " + this.state.longitude)
        
            this.setState({
                data: searchData.ip,
                
                address: searchData.ip.address,
                
                latitude: searchData.ip.latitude,
                
                longitude: searchData.ip.longitude
            })
        
            console.log("ipSearch lat: " + this.state.latitude)
            console.log("ipSearch lng: " + this.state.longitude)
            
        })
    }

  render() {
    console.log('json lat: ', this.state.latitude)
    console.log('type of json lat: ' + (typeof latitude))
    let parsedLat = parseFloat(this.state.latitude)
    console.log('parsed float: ', parsedLat)
    console.log('type of float lat: ' + (typeof parsedLat))
    let parsedLng = parseFloat(this.state.longitude)

    const googleMapsLocation = new google.maps.LatLng(this.state.latitude,this.state.longitude)

    console.log('this.state.latitude,this.state.longitude: ' + this.state.latitude + ','+ this.state.longitude) 

    const markers = [
            {
                location:{
                    lat: parseFloat(this.state.latitude),
                    lng: parseFloat(this.state.longitude)
                }
            }
        ]

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SearchInput 
          onSubmission={this.ipSearch} 
        />
        <div 
          style={{
            width: '100vw', 
            height: '75vh', 
            background:'grey'
          }}>
          <Map 
            center={googleMapsLocation} 
            zoom={16} 
            markers={markers}
          />
        </div>
        <GeoLocationData 
          className="geoLocationData" 
          address={this.state.address} 
          longitude={this.state.longitude} 
          latitude={this.state.latitude} 
        />
      </div>
    );
  }
}

export default App;