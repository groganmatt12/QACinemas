import React from 'react';
import Showings from './Showings';
import CinemaStore from './store/CinemaStore'

export default class MovieDetails extends React.Component{
    
    constructor(){
        super();
        this.state = {
            filmTitle: "filmTitleDefault",
            filmInfo: "filmInfoDefault",
            filmImage: "filmImageDefault",
            trailerLink: "trailerLinkDefault"
        }
		
		this._dataload = this._dataload.bind(this);

    }

    componentWillMount(){
        let filmIndex = this.props.location.query.filmID;        
        let movieArr = CinemaStore.getAllMovies();
        for(let i = 0; i < movieArr.length; i++){
            if(i == filmIndex){
				
                this.setState({filmTitle: movieArr[i].name});
                this.setState({filmInfo: movieArr[i].description});
                this.setState({filmImage: movieArr[i].image});
                this.setState({trailerLink: movieArr[i].trailer})
            }
        }
		CinemaStore.on('DATALOAD',this._dataload);
    }
	
    componentDidMount () {
		window.scrollTo(0, 0)
	}
	
	componentWillUnmount() {
		CinemaStore.removeListener('DATALOAD',this._dataload);
    }

	_dataload(){
		console.log("loading data");
		
		let filmIndex = this.props.location.query.filmID;        
        let movieArr = CinemaStore.getAllMovies();
        for(let i = 0; i < movieArr.length; i++){
            if(i == filmIndex){
				
                this.setState({filmTitle: movieArr[i].name});
                this.setState({filmInfo: movieArr[i].description});
                this.setState({filmImage: movieArr[i].image});
                this.setState({trailerLink: movieArr[i].trailer})
            }
        }
	}

    render(){
        let imgLink="/images/"+this.state.filmImage;
        
        return(
            <div className="container" >
                <div className="row MovieDetails-Heading">
				

					
                    <div ref="MovieDetails_FilmTitle" className="col-sm-12">
						<h3>Movie Name: {this.state.filmTitle}</h3>
					</div>
					
                </div>
				<div  className="MovieDetails-ListingTime" >
					<Showings movieID={this.props.location.query.filmID}/>
				</div>
				
                <div className="row container-fluid"> 
				<div className="col-md-3 col-sm-6">
					<img src={imgLink} alt={this.state.Title} className="MovieDetails-Img" />
				</div>
                    <div ref="MovieDetails_FilmInfo" className="col-sm-6 MovieDetails-Info col-md-8">
						Movie Info: {this.state.filmInfo}
					</div>
                    
					<div className="col-sm-6 ">
					
                        <div id="movLoc">
						</div>
						
						<div id="movTime"></div>
					
				</div>
				

				
				</div>
				<div className="MovieDetails-Trailer-Container">
                    <iframe className="Youtube-Video" src={this.state.trailerLink} ></iframe>
                </div>
            </div>

        );
    }   
}
