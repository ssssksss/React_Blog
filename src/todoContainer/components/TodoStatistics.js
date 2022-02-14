import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  width: calc(100% - 50px);
  height: calc(100% - 60px);
  border-radius: 10px;
  overflow: scroll;
`;
const TodoStatistics = () => {
  return (
    <MainContainer>
      TodoStatistics
    </MainContainer>
  );
};

export default TodoStatistics;