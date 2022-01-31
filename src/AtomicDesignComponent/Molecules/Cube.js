import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import CustomColor, { enumColor, enumGradientColor } from '../../util/CustomColor';

let sideWidth = 100;
let sideTranslate = sideWidth / 2;
var sideColor = enumGradientColor[Math.round(Math.random() * 10)];
const rotation = keyframes`
  100% {
    transform: rotate3d(1, 2, 3, 360deg);
  }
`;
const Container = styled.div`
  position: absolute;
  width: ${sideWidth + "px"};
  height: ${sideWidth + "px"};
  transform-style: preserve-3d;
  animation: ${rotation} 10s linear infinite;
  left: 0px;
  top: 0px;
  z-index: 1;

  &:hover {
    animation-play-state: paused
  }
`;
const Side = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  text-align: center;
  line-height: ${sideWidth + "px"};
  opacity: .3;
  border: solid white 1px;
`;
const SideFront = styled(Side)`
transform: translateZ(${sideTranslate + "px"});
background: ${sideColor};
`;
const SideBack = styled(Side)`
transform: rotateY(180deg) translateZ(${sideTranslate + "px"});
background: ${sideColor};
`;
const SideTop = styled(Side)`
transform: rotateX(-90deg) translateZ(${sideTranslate + "px"});
background: ${sideColor};
`;
const SideBottom = styled(Side)`
transform: rotateX(90deg) translateZ(${sideTranslate + "px"});
background: ${sideColor};
`;
const SideLeft = styled(Side)`
transform: rotateY(-90deg) translateZ(${sideTranslate + "px"});
background: ${sideColor};
`;
const SideRight = styled(Side)`
transform: rotateY(90deg) translateZ(${sideTranslate + "px"});
background: ${sideColor};
`;

const Cube = () => {

  return (
    <Container>
      <SideFront></SideFront>
      <SideBack></SideBack>
      <SideTop></SideTop>
      <SideBottom></SideBottom>
      <SideLeft></SideLeft>
      <SideRight></SideRight>
    </Container>
  );
};

export default Cube;