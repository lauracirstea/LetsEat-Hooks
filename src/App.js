import React, {Fragment} from 'react';
import {useRoutes} from 'hookrouter';
import Routes from './router'
// import './App.css';
// import Restaurant from './components/Restaurant';
// import Home from './components/Home';
// import Contact from './components/Contact';
// import Aboute from './components/Aboute';


function App() {
  const routeResult = useRoutes(Routes)
  return routeResult
}

export default App;
