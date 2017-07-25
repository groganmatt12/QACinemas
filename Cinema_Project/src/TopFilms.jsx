import React from 'react';
import CinemaStore from './store/CinemaStore';
import {Link} from 'react-router';

export default class TopFilms extends React.Component{
     
    constructor(){
        super();
       
    }

    generateTopFilmDivs(){
        let movObjArrayByDate=this.props.movies;
	
        let tempImgArray = [];
		let tempNameArray=[];
		let num = (this.props.rowNum*3)+1;
		
        for(let i=num; i<num+3; i++){
           
            let path = "images/"+movObjArrayByDate[i].image;
            let curFilmIndex=i+1;
            let filmUrl = "MovieDetails/?filmID=" + movObjArrayByDate[i].id;
			
            
            tempImgArray.push(
               <div className="col-sm-4 TopFilms-panels" key={i}>
					<Link to={filmUrl}>
						<div className="TopFilms-Element">
							<img className="TopFilms-Image" src={path} alt="topfilm {i}"/>
							<div className="TopFilms-Overlay">
								<div className="TopFilms-OverlayText">
									{movObjArrayByDate[i].overlayText}
								</div>
							</div>
						</div>
					</Link>
				</div>	
            );
        }
		tempNameArray.push(
			<div key={num}>
				<div className="col-sm-4">
                    <p>{movObjArrayByDate[num].name}</p>
                </div>
				
                <div className="col-sm-4">
                    <p>{movObjArrayByDate[num+1].name}</p>
                </div>
				
                <div className="col-sm-4">
					<p>{movObjArrayByDate[num+2].name}</p>
                </div>
			</div>
			);
		let outputArray =[];	
		outputArray.push(tempImgArray);
		outputArray.push(tempNameArray);
		return outputArray;
    }
	generateTitle(){
		let title=[];
		if (this.props.rowNum == 0){
			title = (<p>Top Films</p>)
			
			
		}
		return title;
	} 


    render(){
		let title = this.generateTitle();
        let arrayOfOutputs = this.generateTopFilmDivs();
        return(

            <div className="container TopFilms-Grouping">
                <div className="row TopFilms-Header">
					{title}
                </div>
                <div className="row TopFilms-Row">
                    {arrayOfOutputs[0]}

                </div>
                
                <div className="row TopFilms-Title hidden-xs">
					{arrayOfOutputs[1]}
                </div>
            </div>
        );
    }
}

