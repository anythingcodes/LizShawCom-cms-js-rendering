import React from 'react';
import { styled } from 'styled-components';
import StyledComponentsRegistry from '../StyledComponentsRegistry';

const StyledFooter = styled.footer`
  text-align: center;
  font-size: var(--fs-5);
  padding: 40px 0;
  margin: 64px var(--gutter-mobile) 0 var(--gutter-mobile);
  border-top: 1px solid #eeeff1;
  color: #707584;
  max-width: var(--max-width);
  @media screen and (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    margin-top: 80px;
  }
`;

const Footer = () => {
  return (
    <StyledComponentsRegistry>
      {/* TODO: Localize */}
      <StyledFooter>{new Date().getFullYear()} &copy; Liz Shaw. Built &amp; deployed on <a href="https://developers.hubspot.com/cms" target="_blank" rel="nofollow noreferrer">HubSpot CMS Hub</a>.</StyledFooter>
    </StyledComponentsRegistry>
  );
};

export default Footer;
