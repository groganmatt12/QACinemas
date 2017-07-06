import React from 'react';
/*import main from 'main';*/


export default class App extends React.Component{
	render(){
		return(
			<div>	
				<Header />
				<main>{this.props.children}</main>
				<Footer />
			</div>
		);
	}
}