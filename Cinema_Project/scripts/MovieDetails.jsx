import React from 'react';
import movieJson from '../data/MovieDetails.json';

export default class MovieDetails extends React.Component{
    
    constructor(){
        super();
    }

    componentWillMount(){

    }

    getTitle(){


    }

    render(){

        return(
            <div className="container" >
                <div className="row">
                    <div className="col-sm-12">
                    Title
                    </div>
                </div>
                <div className="row"> 
                    <div className="col-sm-6" id="rInfo">
                    Left
                    </div>
                    <div className="col-sm-6">
                        <div id="movLoc">

                        </div>
                        <div id="movTime">

                        </div>
                    </div>
                </div>
            </div>

        );
    }   

}
