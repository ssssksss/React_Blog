import React, { useState } from 'react';
import Main from './components/Main.jsx';
import NavMenu from './components/NavMenu';
import NavMenu2 from './components/NavMenu2';
import FootterMenu from './components/FootterMenu';
import { BrowserRouter } from 'react-router-dom';
const BlogContainer = () => {

  const [whatPage, setWhatPage] = useState('main');
  const [whatPage2, setWhatPage2] = useState('main');

  const changePage = (page, e) => {
    setWhatPage(page);
  }

  const changePage2 = (page2, e) => {
    setWhatPage2(page2);
  }
  return (
    <div>
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
    </div>
  );
};

export default BlogContainer;