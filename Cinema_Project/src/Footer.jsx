import React from 'react';


export default class Footer extends React.Component{
    render(){
        return(
            <div className="footer navbar-static-bottom">
                <div className="container-fluid">
                    <p>QA Cinema Blue</p>
					<div className="ContactDetails">
						<p>
							Email: 
							
							<a href="mailto:cinemasqa@gmail.com?Subject=Hello" target="_top">
								cinemasqa@gmail.com
							</a> 
							&nbsp;&nbsp;&nbsp;&nbsp;
							Phone Number: 
							<a href="tel:06412303344">
								06412303344
							</a>
							</p>
					</div>
                </div>
            </div>
        );
    }
}
