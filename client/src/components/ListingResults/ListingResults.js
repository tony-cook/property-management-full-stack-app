import React, {useState, useEffect} from 'react'
import './ListingResults.css';

import propertyDataWeek2 from '../../data/properties_week_2.json'
import bathroomIcon from '../../assets/images/bathroom_icon.png'

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
            <div key={index} className="single-listing-container">
              <div className="listing-image-container">
                <img src={property.images[0]} alt=""></img>
              </div>
              <img src={bathroomIcon} alt="" />
              {/* <div className="project-title">{project.name}</div> */}
            </div>
          ))}
        </div>
    </div>
  )
}

export default ListingResults