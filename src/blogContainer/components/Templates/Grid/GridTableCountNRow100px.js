import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

  display: grid;
  grid-gap: 5px;
  overflow-x: scroll;
  ${(props) => props.count === 4 ? "grid-template-columns: repeat(4, 1fr);"
    : ("grid-template-columns: repeat(" + `${props.count}` + ", 1fr);")}
`;
//grid-template-columns: repeat(4fr, 1fr);

const GridTableCountNRow100px = ({ children, count = 4 }) => {

  return (
    <Container count={count}>
      {children}
    </Container>
  );
};

export default GridTableCountNRow100px;