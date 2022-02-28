import React from 'react';
import styled from 'styled-components';
import Month from '../Molecules/Month';

const Container = styled.div`
  min-height: 240px;
  background-color: white;
  margin-bottom: 10px;
  border: solid #c0b4fa 2px;
  overflow: scroll;
  padding: 10px;
  border-radius: 10px;
`;

const Calender = () => {

  return (
    <Container>
      <Month>

      </Month>
    </Container>
  );
};

export default Calender;