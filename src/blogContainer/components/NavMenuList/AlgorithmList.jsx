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
const AlgorithmList = () => {


  return (
    <div>
      <Title> 알고리즘 </Title>
      <Link to="algorithm_basic"> 알고리즘 기초 </Link>
      <Link to="algorithm_backtracking"> 백트래킹 </Link>
      <Link to="algorithm_divide_conquer"> 분할 알고리즘 </Link>
      <Link to="algorithm_dynamic"> 동적 계획법 </Link>
      <Link to="algorithm_graph"> 그래프 알고리즘 </Link>
      <Link to="algorithm_greedy"> 탐욕 알고리즘 </Link>
      <Link to="algorithm_hash"> 해시 알고리즘 </Link>
      <Link to="algorithm_recursive"> 재귀 알고리즘 </Link>
      <Link to="algorithm_search"> 검색 알고리즘 </Link>
      <Link to="algorithm_sort"> 정렬 알고리즘 </Link>
    </div >
  );
}

export default AlgorithmList;