import React, { useEffect } from 'react';
import styled from 'styled-components';
import CustomModal from '../../../util/CustomModal';
import TodoInput from '../TodoInput';

const Container = styled.div`
  width: 100%;
  margin-bottom: 10px;
  border-radius: 10px;
  line-height: 40px;
  display: flex;
  text-align: center;
  font-size: 1.4rem;;
  justify-content: space-between;
  box-sizing: border-box;
  background: #fafafa;
`;

const Container1 = styled.div`
  flex-flow: wrap row;
  display: flex;
  min-width: 120px;
  align-items: center;
`;
const ColorFlag = styled.div`
  width: 20px;
  height: 100%;
  margin-right: 5px;
  background: red;
  border-radius: 10px 0px 0px 10px;
  flex-shrink: 0;
`;
const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  background: white;
  display: block;
  border: 0px;
`;
const TodoDate = styled.div`
  width: 60px;
  font-family: 'Cafe24Ssurround';
  margin-right: 5px;
  flex-shrink: 0;
`;
const Container2 = styled.div`
  white-space: no-wrap;
  word-break: break-all;
  max-height: 120px;
  overflow-x: scroll;
  box-sizing: content-box;
  border: 0px;
  background: #eaeaea;
`;

const Content = styled.div`
`;

const Container3 = styled.div`
  border-radius: 0px 10px 10px 0px;
  width: 80px;
`;
const Container4 = styled.div`
width: 80px;
`;
const UpdateButton = styled.button`
width: 40px;
&:hover {
  background: white;
}

`;
const RemoveButton = styled.button`
width: 40px;
&:hover {
  background: white;
}
`;
const Category = styled.div`

`;


const TodoItem = ({ color, date, dayOfWeek, isChecked, content }) => {

  useEffect(() => {
    if (isChecked) {
      document.getElementById("check").checked = "checked";
    }
  })

  return (
    <Container>
      <Container1>
        <ColorFlag style={{ backgroundColor: color }}> </ColorFlag>
        <TodoDate> {date} </TodoDate>
        <CheckBox type="checkbox" id="check" />
      </Container1>
      <Container2>
        <Content> {content} </Content>
      </Container2>
      <Container3>
        <Category> 분류 </Category>
        <Container4>
          <UpdateButton>
            <CustomModal header="수정">
              <TodoInput>  </TodoInput>
            </CustomModal>
          </UpdateButton>
          <RemoveButton> 삭제 </RemoveButton>
        </Container4>
      </Container3>
    </Container>
  );
};

export default TodoItem;

