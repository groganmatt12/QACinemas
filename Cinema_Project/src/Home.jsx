import React from 'react';
import Carousel from './Carousel';
import Offers from './Offers';
import TopFilms from './TopFilms';
import QuickBookBar from './QuickBookBar';

export default class Home extends React.Component{
    render() {
        return(
            <div>
			    <div className="row">
                    <Carousel />
                </div>
				<div className="row offerRow">
					<Offers />
				</div>
                <div className="row topFilmRow">
                    <TopFilms rowNum={0}/>
					<TopFilms rowNum={1}/>
					<TopFilms rowNum={2}/>
                </div>
				
				
                <div className="row quickBookRow">
                    <QuickBookBar />
                </div>
			</div>
        );
    }
}
