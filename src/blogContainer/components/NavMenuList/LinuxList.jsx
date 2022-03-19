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
const LinuxList = () => {

  return (
    <div>
      <Title> 리눅스 </Title>
      <BlogCategoryLinkList>
        <LinkStyle to="linux_account_command"> 리눅스 계정 관련 명령어 </LinkStyle>
        <LinkStyle to="linux_command"> 리눅스 명령어 </LinkStyle>
        <LinkStyle to="linux_network"> 리눅스 네트워크 </LinkStyle>
        <LinkStyle to="linux_vimeditor"> 리눅스 VimEditor </LinkStyle>
        <LinkStyle to="linux_basic"> 리눅스 공부 </LinkStyle>
        <LinkStyle to="linux_directory"> 리눅스 디렉토리 구조 </LinkStyle>
        <LinkStyle to="linux_shellscript"> 리눅스 쉘 스크립트 </LinkStyle>
        <LinkStyle to="linux_server"> 리눅스 서버 </LinkStyle>
        <LinkStyle to="linux_ubuntu"> 리눅스 우분투 </LinkStyle>
        <LinkStyle to="linux_centos7"> 리눅스 CentOS7 </LinkStyle>
        <LinkStyle to="linux_mobaxterm"> 리눅스 MobaXterm </LinkStyle>
        <LinkStyle to="linux_shell"> 리눅스 쉘 </LinkStyle>
      </BlogCategoryLinkList>
    </div>
  );
}

export default LinuxList;