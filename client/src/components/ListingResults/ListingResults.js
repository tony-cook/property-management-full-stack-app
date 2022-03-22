import React, {useState, useEffect} from 'react'
import './ListingResults.css';

import propertyDataWeek2 from '../../data/properties_week_2.json'
import bathroomIcon from '../../assets/images/bathroom_icon.png'
import bedroomIcon from '../../assets/images/bedroom_icon.png'

function ListingResults() {
  const [resultsCount, setResultsCount] = useState(0)


  useEffect(() => {
    console.log(propertyDataWeek2)
    const resultsCount = propertyDataWeek2.length
    setResultsCount(resultsCount)
  }, [])

  return (
    <div>
        <div className="showing-results-text">
          <h5>Showing {resultsCount} results</h5>
        </div>
        <div className="listing-results-container">
          {propertyDataWeek2.map((property, index) => (
            <div key={index} className="single-listing-container" onClick={e => console.log("Clicked")} >
              <div className="listing-image-container">
                <img className="listing-image" src={property.images[0]} alt="" />
              </div>
              <div className="listing-info-container">
                {property.location} <br />
                <h2>${property.price} per week <br /></h2>
                <img src={bedroomIcon} alt="" />
                <h3>{property.bedroom}</h3>
                <img src={bathroomIcon} alt="" />
                <h3>{property.bathroom}</h3> <br />
                  <div className="bottom-info">
                    <h6>Available: {property.available}</h6>
                    <div className="more-detail-btn" onClick={e => console.log("Clicked")}> More details > </div>
                  </div>
              </div>
            </div>
          ))}
        </div>

        
    </div>
  )
}

export default ListingResults