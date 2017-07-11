import React from 'react';


export default class Carousel extends React.Component{
    render() {
        let imgLink = '../public/images/br.jpg';
        let imgLink1 = '../public/images/hsm.jpg';
        let imgLink2 = '../public/images/sc.jpg';
        let imgLink3 = '../public/images/tcm.jpg';
        
        return(
            <div id="Carousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carousel" data-slide-to="0" className="active"/>
                    <li data-target="#carousel" data-slide-to="1"/>
                    <li data-target="#carousel" data-slide-to="2"/>
                    <li data-target="#carousel" data-slide-to="3"/>
                </ol>
                
                <div className="carousel-inner" role="listbox">
                    <div className="item-active">
                        <img className="d-block img-fluid" src={imgLink} alt="first slide"></img>
                    </div>
                    <div className="item">
                        <img className='d-block img fluid' src={imgLink1} alt="second slide"></img>
                    </div>
                    <div className="item">
                        <img className='d-block img fluid' src={imgLink2} alt="third slide"></img>
                    </div>
                    <div className="item">
                        <img className='d-block img fluid' src={imgLink3} alt="fourth slide"></img>
                    </div>
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
            
            
            
        );
    }
    
}