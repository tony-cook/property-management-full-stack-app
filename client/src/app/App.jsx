import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from '../components/Header';
import PropertyList from '../pages/PropertyList';
import Box from '@mui/material/Box';

function App() {
  return (
    <Box>
      <Header />
      <Routes>
        <Route path="/propertylist" element={<PropertyList />} />
      </Routes>
    </Box>
  );
}

export default App;
