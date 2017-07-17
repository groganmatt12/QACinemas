import React from 'react';
import CinemaStore from './store/CinemaStore';

export default class Carousel extends React.Component{

    constructor(){
		super();
		this.state={
			imgLinks:[]
		};
	}
	 
	
	componentWillMount(){
		this.generateItemDivs();
	}
	
    render() {
	    return(
		<div className="container Carousel-Parent">
            <div id="Carousel" className="carousel slide"> 
			{/*Carousel (ID and CN) - makes it work as a carousel | slide makes it slide*/}
      
                
                <div className="carousel-inner Carousel-Contents" role="listbox">
			        {this.state.imgLinks}
                </div>
                
                <a className="left carousel-control" href="#Carousel" role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#Carousel" role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
         </div>
        );
    }
	generateItemDivs(){
		
		let initArray = CinemaStore.getAllCarouselMovies();
		
		let tempImgArray=[];
		let path0="/images/"+initArray[0].carousel;
		
		tempImgArray.push(<div key ={0} className="item active"><img className="d-block img-fluid" src={path0}  alt="first slide"></img></div>);
		
		for(let i=1; i< initArray.length; i++){
			
			let path="/images/"+initArray[i].carousel;
			 
			tempImgArray.push(
				<div key={i} className="item">
                        <img className='d-block img fluid' src={path} alt="{i} slide"></img>
                </div>
			)
		}	 
		this.setState({imgLinks: tempImgArray});
	}
}
