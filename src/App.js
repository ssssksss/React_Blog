import React, { useState } from 'react';
import './App.css';
import Main from './components/Main.jsx';
import LsideMenu from './components/LsideMenu';
import RsideMenu from './components/RsideMenu';
import NavMenu from './components/NavMenu';
import NavMenu2 from './components/NavMenu2';

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
        <NavMenu onChangePage={(page)=>{{changePage(page)}}}> </NavMenu>
        <NavMenu2 page={whatPage} onChangePage={(page2)=>{{changePage2(page2)}}}> </NavMenu2>
        <div className="menu_container"> 
        {/* LsideMenu는 NavMenu에서 page 파라미터를 받고 onChangePage로 Main 컴포넌트 변경 */}
          {/* <LsideMenu page={whatPage} onChangePage={(page2)=>{{changePage2(page2)}}}> </LsideMenu> */}
          <Main page2={whatPage2}> </Main>
          {/* <RsideMenu> </RsideMenu> */}
        </div>
      </div>

  );
}

export default App;

