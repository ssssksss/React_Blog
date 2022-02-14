import React, { useState } from 'react';
import Main from './components/Main.jsx';
import NavMenu from './components/NavMenu';
import NavMenu2 from './components/NavMenu2';
import FootterMenu from './components/FootterMenu';
import styled from 'styled-components';

const BlogContainer = () => {

  const [whatPage, setWhatPage] = useState('main');
  const [whatPage2, setWhatPage2] = useState('main');

  const changePage = (page, e) => {
    setWhatPage(page);
  }

  const changePage2 = (page2, e) => {
    setWhatPage2(page2);
  }

  const Container1 = styled.div`
    position: relative;
    width: 100%;
  `;

  const Container2 = styled.div`
    position: relative;
    width: 100%;
    min-height: 300px;
  `;

  const Container3 = styled.div`
    width: 100%;
  `;

  return (
    <div>
      <Container1>
        <NavMenu onChangePage={(page) => { { changePage(page) } }}> </NavMenu>
        <NavMenu2 page={whatPage} onChangePage={(page2) => { { changePage2(page2) } }}> </NavMenu2>
      </Container1>
      <Container2>
        <Main page2={whatPage2}> </Main>
      </Container2>
      <Container3>
        <FootterMenu FootterMenu> </FootterMenu>
      </Container3>
    </div>
  );
};

export default BlogContainer;