import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  background-color: #aeaeae;
  border-radius: 10px;
  padding-left: 10px;
  text-align: center;
`;

const GridColumn = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default GridColumn;