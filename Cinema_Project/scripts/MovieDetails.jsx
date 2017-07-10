import React from 'react';
import movieJson from '../data/MovieDetails.json';
import Showings from './Showings';

export default class MovieDetails extends React.Component{
    

    constructor(props){
        super(props);

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
                    <div className="col-sm-12">Movie Name</div>
                </div>
                <div className="row"> 
                    <div className="col-sm-6" id="rInfo">Movie Info</div>
                    <div className="col-sm-6">
                        <div id="movLoc">
                        </div>
                        <div id="movTime">
                        </div>
                    </div>
                    <div className="listingTime"><Showings /></div>
                </div>
            </div>

        );
    }   

}
