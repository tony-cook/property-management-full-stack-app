import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from '../components/Header';
import PropertyList from '../pages/PropertyList';
import PropertyDetail from '../pages/PropertyDetail';
import Box from '@mui/material/Box';

require('dotenv').config()

function App() {
  return (
    <Box>
      <Header />
      <Box height="70px"></Box>
      <Routes>
        <Route path="/" element={<PropertyList />} />
        <Route path="/property/detail" element={<PropertyDetail />} />
      </Routes>
    </Box>
  );
}

export default App;
