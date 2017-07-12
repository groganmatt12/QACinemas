import React from 'react';
import Carousel from './Carousel';
import Offers from './Offers';

export default class Home extends React.Component{
    render() {
        return(
            <div>
			    <div className="row">
                    <Carousel />
                </div>
				<div className="row">
					<Offers />
				</div>
                
			</div>
        );
    }
}
