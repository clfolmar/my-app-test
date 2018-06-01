import React, { Component } from 'react'

class GeoLocationData extends Component {
    render(){
        const address = this.props.address,
            latitude = this.props.latitude,
            longitude = this.props.longitude;

        return (
            <div className="geoLocationData">
            IP Geolocation Data:
                <div className="ipAddress">
                    IP Address: {this.props.address}
                </div>
                <div className="latData">
                    Latitude: {this.props.latitude}
                </div>
                <div className="lngData">
                    Longitude: {this.props.longitude}
                </div>
            </div>
            )
    }
}

export default GeoLocationData;
