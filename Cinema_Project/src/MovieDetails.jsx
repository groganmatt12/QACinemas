import React from 'react';
import movieJson from './data/MovieDetails.json';
import Showings from './Showings';

export default class MovieDetails extends React.Component{
    
    constructor(){
        super();
        this.state = {
            filmTitle: "",
            filmInfo: "",
            filmImage: ""
        }

    }

    componentWillMount(){
        let filmIndex = this.props.params.key;        
        let movieArr = movieJson.movieDetails;
        for(let i = 0; i < movieArr.length; i++){
            if(i == filmIndex){
                this.setState({filmTitle: movieArr[i].name});
                this.setState({filmInfo: movieArr[i].description});
                this.setState({filmImage: movieArr[i].image});
            }
        }
    }
    


    render(){
        let imgLink="images/"+this.state.filmImage;
        
        return(
            <div className="container" >
                <div className="row">
                    <div className="col-sm-12">
					<h3>Movie Details:</h3>
                    </div>
                    <div className="col-sm-12">Movie Name: {this.state.filmTitle}</div>
                </div>
                <div className="row"> 
                    <div className="col-sm-6" id="rInfo">Movie Info: {this.state.filmInfo}</div>
                    <div className="col-sm-6">
                        <div id="movLoc">
                        </div>
                        <div id="movTime">
                        </div>
                    </div>
                    <div className="listingTime"><Showings filmID={this.props.params.key}/></div>
                </div>
                <div>
                    <img src={imgLink} />
                </div>
            </div>

        );
    }   

}
