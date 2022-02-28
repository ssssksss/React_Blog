import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 80px;
  background: #ffbb6d;
  padding: 6px;
  font-family: 'Cafe24Ssurround';
  color: ${(props) => (props.color || "black")};
  opacity: ${(props) => (props.opacity && "0.6")};
`;

const Day = (props) => {

  return (
    <Container color={props.color} opacity={props.opacity}>
      {props.day}
    </Container>
  );
};

export default Day;