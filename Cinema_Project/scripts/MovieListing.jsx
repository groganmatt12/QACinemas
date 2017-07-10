import React from 'react';


export default class MovieListing extends React.Component {
    constructor(props){
		super(props);
	    this.state = {
        name: "",
        image: "",
        description: ""
		};	
	}
	
	componentWillMount(){
		this.setState({name: this.props.name});
		this.setState({image: this.props.img});
		this.setState({description: this.props.desc});
	}
    	//{this.state.image}
    render() {
		
		let imgLink="../images/"+this.state.image;
		console.log(imgLink);
	
        return(
            <div className="row" >
					<div className="col-sm-4" id="imgName1">
						<div id="movImage">
						<img src={imgLink} alt={this.props.name} className="imgStyle" />
						</div>
						<div id="movName">
						{this.state.name}
						</div>
						
					</div>
					<div className="col-sm-8" id="movDesc1">
						{this.state.description}
					</div>
					
				</div>
        );
    }
    
}