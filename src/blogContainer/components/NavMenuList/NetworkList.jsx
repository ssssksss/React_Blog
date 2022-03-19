import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BlogCategoryLinkList = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 5px;
  padding: 10px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(3,1fr);
  }
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
const NetworkList = () => {

  return (
    <div>
      <Title> 네트워크 </Title>
      <BlogCategoryLinkList>
        <LinkStyle to="network_basic"> 네트워크 기초 </LinkStyle>
        <LinkStyle to="network_command"> 네트워크 명령어 </LinkStyle>
        <LinkStyle to="network_arpprotocol"> 네트워크 ARP 프로토콜 </LinkStyle>
        <LinkStyle to="network_osi7layer"> 네트워크 OSI 7 계층 </LinkStyle>
        <LinkStyle to="network_threewayhandshake"> 네트워크 3WayHandshake </LinkStyle>
        <LinkStyle to="network_device"> 네트워크 관련 장치 </LinkStyle>
        <LinkStyle to="network_wireshark"> 네트워크 와이어샤크 </LinkStyle>
        <LinkStyle to="network_protocol"> 네트워크 프로토콜 </LinkStyle>
      </BlogCategoryLinkList>
    </div>
  );
}

export default NetworkList;