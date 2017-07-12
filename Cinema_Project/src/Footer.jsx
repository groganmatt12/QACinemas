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
							<a href="tel:07510454199">
								07510454199
							</a>
							</p>
						 
					</div>
                </div>
            </div>
        );
    }
}
