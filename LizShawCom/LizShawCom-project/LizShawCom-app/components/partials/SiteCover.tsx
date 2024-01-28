import React from 'react';
import { styled } from 'styled-components';
import StyledComponentsRegistry from '../StyledComponentsRegistry';
// @ts-expect-error Untyped
import siteCoverHref from '../../assets/site-cover.jpg';

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
  &::after {
    content: '';
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    will-change: transform;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, #fff 95%);
  }
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
        <Img loading="lazy" src={siteCoverHref} alt="" role="presentation" />
      </ImgWrapper>
    </Wrapper>
  </StyledComponentsRegistry>
);

export default SiteCover;
