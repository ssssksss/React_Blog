import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 80px;
  background: #ffbb6d;
  padding: 6px;
  font-family: 'Cafe24Ssurround';
  color: ${(props) => (props.color || "black")};
  opacity: ${(props) => (props.opacity && "0.6")};
`;
const TodoTask = styled.div`
  width:100%;
  height: 20px;
  line-height: 20px;
  background: #aeaeae;
`;

const Day = (props) => {

  let keyCount = 0;

  return (
    <Container color={props.color} opacity={props.opacity}>
      {props.day} <br />
      {
        props.content !== undefined &&
        props.content.map((i) => {
          return <TodoTask key={i.key + "" + keyCount++}> {i.name} </TodoTask>
        })
      }
    </Container>
  );
};

export default Day;

// 메일을 보낸후에 그 다음 어떤 일들을 해야할지 모르겠어서 문자를 남깁니다.
// 제가 할 수 있거나 해야할 일들이 있다면 알려주시면 감사하겠습니다.