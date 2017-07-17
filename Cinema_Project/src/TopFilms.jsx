import React from 'react';
import CinemaStore from './store/CinemaStore';
import {Link} from 'react-router';

export default class TopFilms extends React.Component{
     
    constructor(){
        super();
        this.state = {
            arrayOfTopFilms: [],
			arrayOfTopHeadings:[],
			title:[]
        };
    }

	componentWillMount(){
       
        this.generateTopFilmDivs(); 
		this.generateTitle();
		
	}

    generateTopFilmDivs(){
        let movObjArrayByDate=CinemaStore.getMoviesByRelease();
        let tempImgArray = [];
		let tempNameArray=[];
		let num = (this.props.rowNum*3)+1;
        
        
        for(let i=num; i<num+3; i++){
           
            let path = "images/"+movObjArrayByDate[i].image;
            let curFilmIndex=i+1;
            let curClassName="popular_film_"+curFilmIndex+" popular_film_type popular_film";
            let filmUrl = "MovieDetails/" + movObjArrayByDate[i].id;
			
            
            tempImgArray.push(
                <div className="col-sm-4 popular_film_panels" key={i}>
					<Link to={filmUrl}>
						<div className={curClassName}>
							<img src={path} alt="topfilm {i}"/>
							<div className="overlay">
								<div className="overlayText">
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
		this.setState({arrayOfTopFilms: tempImgArray});
		this.setState({arrayOfTopHeadings:tempNameArray});
    }
	generateTitle(){
		if (this.props.rowNum == 0){
			let title = (<p>Top Films</p>)
			this.setState({title:title});
		}
		
	} 


    render(){
        
        return(

            <div className="container topFilmGrouping">
                <div className="row topFilmHeader">
					{this.state.title}
                </div>
                <div className="row topFilmRow">
                    {this.state.arrayOfTopFilms}
                </div>
                
                <div className="row" id="popular_film_headings">
					{this.state.arrayOfTopHeadings}
                </div>
            </div>
        );
    }
}

