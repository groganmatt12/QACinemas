import React from 'react';
import { Link } from 'react-router';

export default class TopFilms extends React.Component{
     
    

    render(){
        
	let filmUrl = "MovieDetails/" + this.props.id;

    let popular_film_1 = './images/popular_films/ttlk.jpg';
    let popular_film_2 = './images/popular_films/wfpota.jpg';
    let popular_film_3 = './images/popular_films/c3.jpg';
    
    let popular_film_1_desc = "Humans are at war with the Transformers..."
    let popular_film_2_desc = "Planet of the apes blah blah...";
    let popular_film_3_desc = "cars 3 vroom vroom blah blah..";
        return(
            <div className="container topFilmGrouping">
				<div className="row topFilmHeader">
					<p>Top Films</p>
				</div>
				<div className="row" id="topFilmRow">
					<div className="col-sm-4 popular_film_panels">
						<div className="popular_film_1 popular_film">
							<img src={popular_film_1} />
							<div className="overlay">
								<div className="overlayText">
									{popular_film_1_desc}  
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-4 popular_film_panels">
						<div className="popular_film_2 popular_film">
							<img src={popular_film_2} />
							<div className="overlay">
								<div className="overlayText">
									{popular_film_2_desc} 
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-4 popular_film_panels">
						<div className="popular_film_3 popular_film">
							<img src={popular_film_3} />
							<div className="overlay">
								<div className="overlayText">
									{popular_film_3_desc}  
								</div>
							</div>
						</div>   
					</div>
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
