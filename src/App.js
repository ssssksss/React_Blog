import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Main from './components/Main.jsx';
import NavMenu from './components/NavMenu';
import NavMenu2 from './components/NavMenu2';
import FootterMenu from './components/FootterMenu';

const App = () => {
  const [whatPage,setWhatPage] = useState('main');
  const [whatPage2,setWhatPage2] = useState('main');

  const changePage = (page,e) => {
    setWhatPage(page);
  }

  const changePage2 = (page2,e) => {
    setWhatPage2(page2);
  }


  return (
      <div className="app">
        <BrowserRouter>
        <NavMenu onChangePage={(page)=>{{changePage(page)}}}> </NavMenu>
        <NavMenu2 page={whatPage} onChangePage={(page2)=>{{changePage2(page2)}}}> </NavMenu2>
        <div className="menu_container"> 
          <Main page2={whatPage2}> </Main>
        </div>
        <FootterMenu> </FootterMenu>
        </BrowserRouter>
      </div>

  );
}

export default App;

