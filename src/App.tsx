import React from 'react';
import {Outlet} from 'react-router-dom';
import './App.css'
import CssBaseline from '@mui/material/CssBaseline';
function App() {


  return (
    <React.Fragment>
      <CssBaseline />
      <Outlet/>
    </React.Fragment>
  )
}

export default App
