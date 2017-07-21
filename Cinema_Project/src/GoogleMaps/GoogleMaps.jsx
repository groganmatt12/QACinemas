import React from 'react';
import CurrentLocation from './CurrentLocation'
import Map from './Map'

export default class GoogleMaps extends React.Component {
	constructor(){
		super();
		
		this.state = {
			currentAddress: "QA Manchester",
			mapCoordinates: {
				lat: 53.475586,
				lng: -2.241402
			}
		};
	}

  render() {
    return (
	<div>
		<h1>Google Maps</h1>
		<Map 
			lat={this.state.mapCoordinates.lat}
			lng={this.state.mapCoordinates.lng}
		/> 
		<CurrentLocation address = {this.state.currentAddress}/>
	</div>
    )
  }
}
