import React from 'react';
import CinemaStore from './store/CinemaStore';

export default class TopFilms extends React.Component{
     
    constructor(){
        super();
        this.state = {
            arrayOfTopFilms: []
        };
    }

	componentWillMount(){
        console.log("Hello");
        this.generateTopFilmDivs(); 
	}

    generateTopFilmDivs(){
        let movObjArrayByDate=CinemaStore.getMoviesByRelease();
        let tempImgArray = [];
        console.log("hello");
        console.log(movObjArrayByDate);
        for(let i=0; i<3; i++){
           
            let path = "images/"+movObjArrayByDate[i].image;
            let curFilmIndex={i}+1;
            console.log(curFilmIndex);
            let curClassName="popular_film_"+curFilmIndex+" popular_film";
            console.log(curClassName);
            
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
            );
        }

    }


    render(){
        
        return(
            <div className="container">
                <div className="row topFilmHeader">
                    <p>Top Films</p>
                </div>
                <div className="row">
                        {this.state.ArrayOfTopFilms}
                </div>
                
                <div className="row" id="popular_film_headings">
                    <div className="col-sm-4">
                        <p>Transformers: The Last Knight</p>
                    </div>
                    <div className="col-sm-4">
                        <p>War for The Planet of the Apes</p>
                    </div>
                    <div className="col-sm-4">
                        <p>Cars 3</p>
                    </div>
                </div>
            </div>
        );
    }

}
