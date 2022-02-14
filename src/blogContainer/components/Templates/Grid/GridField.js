import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #eaeaea;
  border-radius: 10px;
  padding-left: 10px;
  word-break: keep-all;
`;

const GridField = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default GridField;