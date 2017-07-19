import React from 'react';
import { Link } from 'react-router';

export default class SiteMap extends React.Component{
    render() {
        return(
            <div>
				<p ref="SiteMapParagraph1">Site Map:</p>
				<table className="Site-Map-Table">
					<tbody>
						<tr>
							<td>
								<Link to="/">
									Home
								</Link>
							</td>
							
							<td>
								<Link to="/ListingGallery" ref="SiteMapLinkToListingGallery">
									Listing Gallery
								</Link>
							</td>
						</tr>
						<tr>
							<td>
								<Link to='/Classification' ref="SiteMapLinkToClassification">
									Classifications
								</Link>
							</td>
						</tr>
					</tbody>
				</table>
            </div>
        );
    }
}

