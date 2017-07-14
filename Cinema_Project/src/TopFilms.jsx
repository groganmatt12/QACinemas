import React from 'react';
import CinemaStore from './store/CinemaStore';

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
        console.log("Hello");
        this.generateTopFilmDivs(); 
		this.generateTitle();
		
	}

    generateTopFilmDivs(){
        let movObjArrayByDate=CinemaStore.getMoviesByRelease();
        let tempImgArray = [];
		let tempNameArray=[];
		let num = (this.props.rowNum*3)+1;
        console.log("hello");
        console.log(movObjArrayByDate);
        for(let i=num; i<num+3; i++){
           
            let path = "images/"+movObjArrayByDate[i].image;
            let curFilmIndex=i+1;
            let curClassName="popular_film_"+curFilmIndex+" popular_film_type popular_film";
            
            
            tempImgArray.push(
                <div className="col-sm-4 popular_film_panels" key={i}>
					<div className={curClassName}>
						<img src={path} alt="topfilm {i}"/>
						<div className="overlay">
							<div className="overlayText">
								Testing description
							</div>
						</div>
					</div>
				</div>	
            );
        }
		tempNameArray.push(
			<div>
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
        console.log(this.state.arrayOfTopFilms)
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

