import React, { useState, useEffect} from 'react';
import axios from 'axios'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import BreadCrumbs from '../components/BreadCrumbs';
import Search from '../components/Search';
import Refine from '../components/Refine';
import ListingResults from '../components/ListingResults/ListingResults';
import SortSelect from '../components/SortSelect/SortSelect';
import ListViewButton from '../components/ListViewButton/ListViewButton';
import GoogleMaps from '../components/GoogleMap/GoogleMaps';


export default function PropertyList() {
  const [allProperties, setAllProperties] = useState([]);
  const [searchResult, setSearchResult] = useState(allProperties);
  // const [sortedList, setSortedList] = useState(allProperties);

  const [isLoading, setIsLoading] = useState(true)
  const [searchTags, setSearchTags] = useState([]);
  
  


  function searchTagsInput (event,newValue) {
    setSearchTags(newValue)
  }

  function searchAllProperties () {

    const length = allProperties.length
    const newArray = []
    const inputTags = searchTags
    
    if(length === 0) {
      return searchResult
    } else {
      for(let i = 0; i < length; i++) {
        if (inputTags.every(v => allProperties[i]["tags"].includes(v))) {
            newArray.push(allProperties[i])
        }
      }
    }
    setSearchResult(newArray)
  }

  // useEffect(() => {
  // }, [])

  useEffect(() => {
    try {
      axios.get('http://localhost:3001/api/properties/all')
      .then(res => {
        setAllProperties(res.data.data)
        setIsLoading(false)
      })
      .catch(err => {
        if (err.response.status === 404) {
          throw new Error(`${err.config.url} not found`);
        }
        throw err;
      });
    } catch (err) {
      console.log(err)
    }
  },[])

  const render =  <Box sx={{ py: 2, px: { xs: 4, lg: '5vw' } }}>
                    <BreadCrumbs />
                    <Box sx={{ mt: 1, mb: 3 }}>
                      <Typography sx={{ typography: { sm: 'h5', md: 'h5' } }}>Auckland Property Listings</Typography>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <Refine />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <Search searchTags={searchTags} searchTagsInput={searchTagsInput} searchAllProperties={searchAllProperties}/>
                    </Box>
                    <Box sx={{ mb: 1, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
                      <Box sx={{ width: '50%' }}>
                        <Box display="flex">
                          <ListViewButton />
                          <SortSelect sx={{ flexGrow: 1 }} />
                        </Box>
                        <ListingResults />
                      </Box>
                      <Box bgcolor="red.main" sx={{ flexGrow: 1 }}>
                        {/* <GoogleMaps /> */}
                      </Box>
                    </Box>
                  </Box>

  return (
    <>
    {isLoading ? "" : render}
    </>
  );
}
