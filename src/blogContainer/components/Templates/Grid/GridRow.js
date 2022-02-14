import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
background-color: #909090;
border-radius: 10px;
padding-left: 10px;
word-break: keep-all;
`;

const GridRow = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default GridRow;