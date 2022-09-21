import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Typography} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SaveIcon/>
        <Typography variant='h4'>
          Aaron Rocks
        </Typography>
      </header>
    </div>
  );
}

export default App;
