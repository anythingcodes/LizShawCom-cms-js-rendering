import React from 'react';
import { styled } from 'styled-components';
import StyledComponentsRegistry from '../StyledComponentsRegistry';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 480px;
  overflow: hidden;
`;

const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const SiteCover = () => (
  <StyledComponentsRegistry>
    <Wrapper aria-hidden={true}>
      <ImgWrapper>
        <Img loading="lazy" src={require('../../assets/site-cover.jpg')} />
      </ImgWrapper>
    </Wrapper>
  </StyledComponentsRegistry>
);

export default SiteCover;
