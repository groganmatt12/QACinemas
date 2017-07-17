import React from 'react';
import QuickBookBar from './QuickBookBar';

export default class Classification extends React.Component{
	constructor(props){
		super();
	}
	render(){
		return(
			<div className="Classifications-Div">
				<img className="Classifications-Img" alt="Classifications" src="/images/Classifications.png"></img>
                <QuickBookBar />
			</div>
		);
	}
}