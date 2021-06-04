// import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Styling imports
import './UserInterface/main.scss';
// import './App.css';

//Component import
import Sidebar from './Components/Sidebar';
import Buttons from './Components/Pages/Buttons';
import Calendar from './Components/Pages/Calendar';
import ImageSlider from './Components/Pages/Slider';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Switch>
        <Route path='/' exact component={Buttons} />
        <Route path='/calendar' component={Calendar} />
        <Route path='/sliders' component={ImageSlider} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
