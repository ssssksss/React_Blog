import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const BlogCategoryLinkList = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 5px;
  padding: 10px;
`;
const Title = styled.div`
  height: 40px;
  line-height: 40px;
  color: white;
  font-family: 'SBAggroB';
  font-size: 1.8rem;
  background: #ffa946;
  text-align: center;
  border-radius: 10px 10px 0px 0px;
  grid-column-start: 1;
  grid-column-end: 5;
`;
const LinkStyle = styled(Link)`
  text-align: center;
  height: 24px;
  line-height: 24px;
  box-shadow: 2px 2px 1px 1px grey;
  font-family: 'SBAggroB';
  background: #ffa946;
  color: white;
  font-size: 120%;
  overflow:hidden;
  text-overflow:ellipsis;
  &:hover {
    color: #ffbb6d;
    background: white;
  }
`;

const ReactList = () => {
  return (
    <div>
      <Title> 리액트 </Title>
      <BlogCategoryLinkList>
        <LinkStyle to="react_basic"> Basic </LinkStyle>
        <LinkStyle to="react_javascript"> Javascript </LinkStyle>
        <LinkStyle to="react_class"> Class </LinkStyle>
        <LinkStyle to="react_hooks"> Hooks </LinkStyle>
        <LinkStyle to="react_redux"> Redux </LinkStyle>
        <LinkStyle to="react_redux_saga"> ReduxSaga </LinkStyle>
        <LinkStyle to="react_recoil"> Recoil </LinkStyle>
        <LinkStyle to="react_router"> Router </LinkStyle>
        <LinkStyle to="react_animation"> Animation </LinkStyle>
        <LinkStyle to="react_modal"> Modal </LinkStyle>
        <LinkStyle to="react_styledcomponent"> StyledComponent </LinkStyle>
        <LinkStyle to="react_ajax"> Ajax </LinkStyle>
        <LinkStyle to="react_fetchapi"> FetchAPI </LinkStyle>
        <LinkStyle to="react_axios"> Axios </LinkStyle>
        <LinkStyle to="react_babel"> Babel </LinkStyle>
      </BlogCategoryLinkList>
    </div>
  );
}

export default ReactList;