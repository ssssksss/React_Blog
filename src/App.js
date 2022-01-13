import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/Main.jsx';
import NavMenu from './components/NavMenu';
import NavMenu2 from './components/NavMenu2';
import FootterMenu from './components/FootterMenu';

const App = () => {
  const [whatPage, setWhatPage] = useState('main');
  const [whatPage2, setWhatPage2] = useState('main');

  const changePage = (page, e) => {
    setWhatPage(page);
  }

  const changePage2 = (page2, e) => {
    setWhatPage2(page2);
  }


  return (

    <div className="app">

      <BrowserRouter>

        <div className="menu1_container">
          <NavMenu onChangePage={(page) => { { changePage(page) } }}> </NavMenu>
          <NavMenu2 page={whatPage} onChangePage={(page2) => { { changePage2(page2) } }}> </NavMenu2>
        </div>

        <div className="menu2_container">
          <Main page2={whatPage2}> </Main>
        </div>

        <div className="menu3_container">
          <FootterMenu FootterMenu> </FootterMenu>
        </div>

      </BrowserRouter>

      <button className="btn_top"> <a href="#">
        <img src={process.env.PUBLIC_URL + '/img/NavMenu/UpArrow_icon.svg'} />  </a>
      </button>
    </div>

  );
}

export default App;

