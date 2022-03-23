import React, { useState, useEffect } from 'react';
import './ListingResults.css';

import bathroomIcon from '../../assets/images/bathroom_icon.png';
import bedroomIcon from '../../assets/images/bedroom_icon.png';

function ListingResults({ sortType, sortedList, searchResult }) {
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (sortType !== 'featured') {
      setResult(sortedList);
    } else {
      setResult(searchResult);
    }
  }, [sortedList, searchResult, sortType]);

  return (
    <div width="100%">
      <div className="showing-results-text">
        <h5>Showing {result.length} results</h5>
      </div>
      <div className="listing-results-container">
        {result.map((property, _id) => (
          <div key={_id} className="single-listing-container" onClick={e => console.log('Clicked')}>
            <div className="listing-image-container">
              <img className="listing-image" src={property.images[0]} alt="" />
            </div>
            <div className="listing-info-container">
              {property.location} <br />
              <h2>
                ${property.price} per week <br />
              </h2>
              <img src={bedroomIcon} alt="" />
              <h3>{property.bedroom}</h3>
              <img src={bathroomIcon} alt="" />
              <h3>{property.bathroom}</h3> <br />
              <div className="bottom-info">
                <h6>Available: {property.available}</h6>
                <div className="more-detail-btn" onClick={e => console.log('Clicked')}>
                  More details
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListingResults;
