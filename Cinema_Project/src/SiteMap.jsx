import React from 'react';
import { Link } from 'react-router';

export default class SiteMap extends React.Component{
    render() {
        return(
            <div>
            <p>Site Map:</p>
            <table className="Site-Map-Table">
              <tr>
                <td><Link to="/">Home</Link></td>
                <td><Link to="/ListingGallery">Listing Gallery</Link></td>
              </tr>
              <tr>
                <td><Link to='/Classification'>Classifications</Link></td>
              </tr>
            </table>
            </div>

        );
    }
}

