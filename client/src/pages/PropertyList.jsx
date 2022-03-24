import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  const [isLoading, setIsLoading] = useState(true);
  const [allProperties, setAllProperties] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [sortedList, setSortedList] = useState([]);
  const [isListView, setIsListView] = useState(false);
  const [sortType, setSortType] = useState('featured');
  const [searchTags, setSearchTags] = useState([]);
  const [searchRent, setSearchRent] = useState([]);
  const [searchBedroom, setSearchBedroom] = useState([]);
  const [searchBathroom, setSearchBathroom] = useState([]);
  const [suburb, setSuburb] = useState('');

  const viewWidth = isListView ? { flexGrow: 1 } : { width: '50%' };

  function searchTagsInput(event, newValue) {
    setSearchTags(newValue);
  }

  const suburbInput = event => {
    setSuburb(event.target.value);
  };

  function searchAllInputs() {
    // - Tags newArray //
    // - Refine -> 1. suburb (secondArray) 2. rent (rentArray) 3. bedroom 4. bathroom
    let result = [];
    let newArray = [];
    let secondArray = [];
    let rentArray = [];
    let bedroomArray = [];
    let bathroomArray = [];

    if (allProperties.length !== 0) {
      //search tags
      if (searchTags.length !== 0) {
        for (let i = 0; i < allProperties.length; i++) {
          if (searchTags.every(v => allProperties[i]['tags'].includes(v))) {
            newArray.push(allProperties[i]);
          }
        }
      } else {
        newArray = allProperties;
      }
      result = newArray;

      //search suburb
      if (result.length === 0) {
        setSearchResult(result);
        return;
      } else {
        if (suburb !== '') {
          for (let i = 0; i < result.length; i++) {
            if (result[i]['suburb'] === suburb) {
              secondArray.push(result[i]);
            }
          }
        } else {
          secondArray = result;
        }
      }

      result = secondArray;

      //search rent
      if (result.length === 0) {
        setSearchResult(result);
        return;
      } else {
        if (searchRent.length !== 0) {
          if (searchRent.length === 1) {
            for (let i = 0; i < result.length; i++) {
              if (result[i]['price'] === searchRent[0]) {
                rentArray.push(result[i]);
              }
            }
          } else if (searchRent.length === 2) {
            for (let i = 0; i < result.length; i++) {
              if (result[i]['price'] >= searchRent[0] && result[i]['price'] <= searchRent[1]) rentArray.push(result[i]);
            }
          }
        } else {
          rentArray = result;
        }
      }

      result = rentArray;

      //search bedroom
      if (result.length === 0) {
        setSearchResult(result);
        return;
      } else {
        if (searchBedroom.length !== 0) {
          if (searchBedroom.length === 1) {
            for (let i = 0; i < result.length; i++) {
              if (result[i]['bedroom'] === searchBedroom[0]) {
                bedroomArray.push(result[i]);
              }
            }
          } else if (searchBedroom.length === 2) {
            for (let i = 0; i < result.length; i++) {
              if (result[i]['bedroom'] >= searchBedroom[0] && result[i]['bedroom'] <= searchBedroom[1]) bedroomArray.push(result[i]);
            }
          }
        } else {
          bedroomArray = result;
        }
      }

      result = bedroomArray;

      // search bathroom
      if (result.length === 0) {
        setSearchResult(result);
        return;
      } else {
        if (searchBathroom.length !== 0) {
          if (searchBathroom.length === 1) {
            for (let i = 0; i < result.length; i++) {
              if (result[i]['bathroom'] === searchBathroom[0]) {
                bathroomArray.push(result[i]);
              }
            }
          } else if (searchBathroom.length === 2) {
            for (let i = 0; i < result.length; i++) {
              if (result[i]['bathroom'] >= searchBathroom[0] && result[i]['bathroom'] <= searchBathroom[1]) bathroomArray.push(result[i]);
            }
          }
        } else {
          bathroomArray = result;
        }
      }
      result = bathroomArray;

      setSearchResult(result);
      return;
    }
  }

  useEffect(() => {
    try {
      axios
        .get('api/api/properties/all')
        .then(res => {
          setAllProperties(res.data.data);
          setSearchResult(res.data.data);
          setIsLoading(false);
        })
        .catch(err => {
          if (err.response.status === 404) {
            throw new Error(`${err.config.url} not found`);
          }
          throw err;
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const render = (
    <Box sx={{ py: 2, px: { xs: 4, lg: '5vw' } }}>
      <BreadCrumbs />
      <Box sx={{ mt: 1, mb: 3 }}>
        <Typography sx={{ typography: { sm: 'h5', md: 'h5' } }}>Auckland Property Listings</Typography>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Refine suburb={suburb} suburbInput={suburbInput} setSearchRent={setSearchRent} setSearchBedroom={setSearchBedroom} setSearchBathroom={setSearchBathroom} setSuburb={setSuburb} />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Search searchTags={searchTags} searchTagsInput={searchTagsInput} searchAllInputs={searchAllInputs} />
      </Box>
      <Box sx={{ mb: 1, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
        <Box sx={viewWidth}>
          <Box display="flex">
            <ListViewButton setIsListView={setIsListView} isListView={isListView} />
            <SortSelect sx={{ flexGrow: 1 }} searchResult={searchResult} setSortedList={setSortedList} setSortType={setSortType} sortType={sortType} />
          </Box>
          <ListingResults searchResult={searchResult} sortedList={sortedList} sortType={sortType} />
        </Box>
        {!isListView && (
          <Box sx={{ flexGrow: 1 }}>
            <GoogleMaps searchResult={searchResult} />
          </Box>
        )}
      </Box>
    </Box>
  );
  return <>{isLoading ? '...' : render}</>;
}
