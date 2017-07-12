import React from 'react';

export default class TopFilms extends React.Component{
     
    

    render(){
        
    let popular_film_1 = './images/popular_films/ttlk.jpg';
    let popular_film_2 = './images/popular_films/wfpota.jpg';
    let popular_film_3 = './images/popular_films/c3.jpg';
    
    let popular_film_1_desc = "Humans are at war with the Transformers..."
    let popular_film_2_desc = "Planet of the apes blah blah...";
    let popular_film_3_desc = "cars 3 vroom vroom blah blah..";
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 popular_film_panels">
                        <div className="popular_film_1">
                            <img src={popular_film_1} />
                            <div className="overlay">
                                <div className="overlayText">
                                    {popular_film_1_desc}  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 popular_film_panels">
                        <div className="popular_film_2">
                            <img src={popular_film_2} />
                            <div className="overlay">
                                <div className="overlayText">
                                    {popular_film_2_desc}  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 popular_film_panels">
                        <div className="popular_film_3">
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
