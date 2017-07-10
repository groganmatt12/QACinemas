import React from 'react';
import movieJson from '../data/MovieDetails.json';
import Showings from './Showings';

export default class MovieDetails extends React.Component{
    
    constructor(){
        super();
        this.state = {
            movieID: "-1"
        }

    }

    componentWillMount(){
        let filmIndex = this.props.params.key;
        this.setState({movieID: filmIndex});
        this.pullFilmInfo();
    }
    
    pullFilmInfo(movieID) {
        
    }
    


    render(){

        return(
            <div className="container" >
                <div className="row">
                    <div className="col-sm-12">
					Title
                    </div>
                    <div className="col-sm-12">Movie Name: {this.state.movieID}</div>
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
