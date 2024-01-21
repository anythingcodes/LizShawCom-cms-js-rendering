import React from 'react';
import { css, styled } from 'styled-components';
import StyledComponentsRegistry from '../StyledComponentsRegistry';

export const hrStyles = css`
  position: relative;
  width: 100%;
  height: 2px;
  font-size: 21px;
  border: 0;
  margin: var(--bottom-margin-default) 0;
  @media screen and (min-width: 768px) {
    margin-top: var(--bottom-margin-desktop);
    margin-bottom: var(--bottom-margin-desktop);
  }
  &::before {
    content: '. . .';
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    line-height: 0;
  }
`;

const Component = styled.hr`
  ${hrStyles}
`;

const HR = () => {
  return (
    <StyledComponentsRegistry>
      <Component />
    </StyledComponentsRegistry>
  );
};

export default HR;
