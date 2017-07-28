import React from 'react';
import CinemaStore from './store/CinemaStore';
import {Link} from 'react-router';

export default class Carousel extends React.Component{

    constructor(){
		super();
		this.state={
			imgLinks:[]
		};
	}
 
	componentDidMount(){
		
	}
	
    render() {
		let carImg = this.generateItemDivs();
	    return(
		<div className="container Carousel-Parent">
            <div id="Carousel" className="carousel slide"> 
			{/*Carousel (ID and CN) - makes it work as a carousel | slide makes it slide*/}
      
                
                <div className="carousel-inner Carousel-Contents" role="listbox">
			        {carImg}
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
		
		let initArray = this.props.movies;
		
		let tempImgArray=[];

		
		for(let i=0; i< initArray.length; i++){
			
			if(i==0){
				
			let path0="/images/"+initArray[0].carousel;
			let initialLink = "MovieDetails?filmID=" + initArray[0].id;
		
			tempImgArray.push(<div key ={0} className="item active"><Link to={initialLink}><img className="d-block img-fluid" src={path0}  alt="first slide"></img></Link></div>);
				
				
			}else{
			
			
			let filmUrl = "MovieDetails?filmID=" + initArray[i].id;
			let path="/images/"+initArray[i].carousel;
			 
			tempImgArray.push(
				<div key={i} className="item">
					<Link to={filmUrl}>
                        <img className='d-block img fluid' src={path} alt="{i} slide"></img>
					</Link>
                </div>
			)
		}
		}	 
		return tempImgArray;
	}
}
