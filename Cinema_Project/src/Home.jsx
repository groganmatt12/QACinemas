import React from 'react';
import Carousel from './Carousel';


export default class Home extends React.Component{
    render() {
        return(
            <div>
			    <div className="row">
                    <Carousel />
                </div>
			</div>
        );
    }
}
