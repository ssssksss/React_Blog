import React from 'react';
import styled from 'styled-components';
import Calender from '../Organisms/Calender';

const Container = styled.div`
  width: calc(100% - 50px);
  height: 100%;
  `;
//height: calc(100% - 60px);

const TodoCalender = () => {
  return (
    <Container>
      <Calender>

      </Calender>
    </Container>
  );
};

export default TodoCalender;