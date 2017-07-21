import React from 'react';

export default class CurrentLocation extends React.Component {
	constructor(props){
		super(props);
	}

  render(){
    return (
		<div className="col-xs-12 col-md-6 col-md-offset-3 current-location">
			<h4 id="save-location">
				{this.props.address}
			</h4>
		</div>
    )
  }
}