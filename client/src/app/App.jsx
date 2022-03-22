import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from '../components/Header';
import PropertyList from '../pages/PropertyList';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/propertylist" element={<PropertyList />} />
      </Routes>
    </div>
  );
}

export default App;
