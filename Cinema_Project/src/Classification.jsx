import React from 'react';
import QuickBookBar from './QuickBookBar';

export default class Classification extends React.Component{
	constructor(props){
		super();
	}
	render(){
		return(
			<div className="classificationsDiv">
				<img className="classificationsImg" alt="Classifications" src="/images/Classifications.png"></img>
                <QuickBookBar />
			</div>
		);
	}
}