import React from 'react';

export default class TopFilms extends React.Component{
    render(){
        
    let popular_film_1 = './images/popular_films/ttlk.jpg';
    let popular_film_2 = './images/popular_films/wfpota.jpg';
    let popular_film_3 = './images/popular_films/c3.jpg';
        
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 popular_film_panels">
                        <div id="popular_film_1">
                            <img src={popular_film_1} />
                        </div>
                    </div>
                    <div className="col-sm-4 popular_film_panels">
                        <div id="popular_film_2">
                            <img src={popular_film_2} />
                        </div>
                    </div>
                    <div className="col-sm-4 popular_film_panels">
                        <div id="popular_film_3">
                            <img src={popular_film_3} />
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