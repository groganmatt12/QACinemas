import React from 'react';
import QuickBookBar from './QuickBookBar';

export default class Classification extends React.Component{
	constructor(props){
		super();
	}
	render(){
		return(
			<div className="row " id="offerParent" >
				<div className="Container" >
					<div>
						
						<img src="images/classifications/u.png" className ="classification" />
						
						<p>Suitable for all</p>
					</div>
				
					<div>						
						<img src="images/classifications/pg.png" className ="classification" />
						<p>Parental guidance</p>
					</div>
					
					<div>
						<img src="images/classifications/12A.png" className ="classification" />
						<p>Video release suitable for 12 years and over</p>
					</div>
				
					<div>
						<img src="images/classifications/15.png" className ="classification" />
						<p>Suitable only for 15 years and over</p>
					</div>
				
					<div>
						<img src="images/classifications/18.png" className ="classification" />
						<p>Suitable only for adults</p>
					</div>
                
					<QuickBookBar />
				</div>
			</div>
		);
	}
}