import { EventEmitter } from 'events';

import bookingJson from '../data/BookingInfo.json';
import cinemaJson from '../data/CinemaLocations.json';
import movieJson from '../data/MovieDetails.json';
import showingsJson from '../data/ShowingTimes.json';

class CinemaStore extends EventEmitter {
	
	  constructor() {
    super();
	
		this.bookings = bookingJson.bookingInfo;
		this.cinemas = cinemaJson.cinemas;
		this.movies = movieJson.movieDetails;
		this.showings = showingsJson.showingTimes;
		}

  getAllBookings() {
    return this.bookings;
  }	

  getAllCinemas() {
    return this.cinemas;
  }	

  getAllMovies() {
    return this.movies;
  }	

  getAllShowings() {
    return this.showings;
  }	  
	
}	
	  
const cinemaStore = new CinemaStore;

export default cinemaStore;