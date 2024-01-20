import React from 'react';
import { styled, css } from 'styled-components';
import StyledComponentsRegistry from '../StyledComponentsRegistry';

interface Props {
  linkLabel?: string;
  linkUrl?: string;
  title: string;
}

/** Allows text to covers the absolutely-positioned grey line */
const headerTextBackground = css`
  background-color: #fff;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 40px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    display: block;
    width: 100%;
    height: 1px;
    background: #eeeff1;
    pointer-events: none;
  }
`;

const A = styled.a`
  font-size: var(--fs-4);
  font-family: var(--ff-heading);
  font-style: italic;
  font-weight: 600;
  padding-left: 20px;
  ${headerTextBackground}
  &:hover {
    border-bottom-color: transparent;
  }
  @media screen and (min-width: 768px) {
    font-size: var(--fs-3);
  }
`;

const H2 = styled.h2`
  display: inline-block;
  padding-right: 20px;
  margin-bottom: 0;
  ${headerTextBackground}
`;

const AsideHeader = ({ linkUrl, linkLabel, title }: Props) => {
  return (
    <StyledComponentsRegistry>
      <HeaderWrapper>
        <H2>{title}</H2>
        {!!linkLabel && !!linkUrl && <A href={linkUrl}>See all {linkLabel}</A>}
      </HeaderWrapper>
    </StyledComponentsRegistry>
  );
};

export default AsideHeader;
