import React from 'react';
import SiteMap from './SiteMap';


export default class Footer extends React.Component{
    render(){
		let emailAddress = "cinemasqa@gmail.com";
		let emailSubject = "Hello";
		let emailLink = "mailto:" + emailAddress + "?Subject=" + emailSubject;
		let phoneNumber = "06412303344";
		let phoneLink = "tel:"+ phoneNumber;
		
        return(
            <div className="footer navbar-static-bottom">
                <div className="container-fluid">
                    <p ref="Footer_Team_Name">
						QA Cinema Blue
					</p>
					<div className="ContactDetails">
						<p>
							Email:&nbsp;
							<a ref="Footer_Email" href={emailLink} target="_top">
								{emailAddress}
							</a> 
							
							&nbsp;&nbsp;&nbsp;&nbsp;
							
							Phone Number: &nbsp;
							<a ref="Footer_PhoneNumber" href={phoneLink}>
								{phoneNumber}
							</a>
				        </p>	
                        <SiteMap ref="Footer_SiteMapCall"/>
					</div>
				        <hr className="Footer-UnderLine"></hr>
                </div>
            </div>
        );
    }
}
