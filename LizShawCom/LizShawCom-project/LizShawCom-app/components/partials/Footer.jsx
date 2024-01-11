import React from 'react';
// TODO: Essure autoprefixer set up
import { styled } from 'styled-components';
import StyledComponentsRegistry from '../StyledComponentsRegistry';

const StyledFooter = styled.footer`
  background-color: #ccc;
  text-align: center;
  font-size: 1.5em;
  padding: 20px;
`;

const Footer = () => {
  return (
    <StyledComponentsRegistry>
      <StyledFooter>Be Well!</StyledFooter>
    </StyledComponentsRegistry>
  );
};

export default Footer;
