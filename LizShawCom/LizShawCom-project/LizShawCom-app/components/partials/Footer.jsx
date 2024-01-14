import React from 'react';
import { styled } from 'styled-components';
import StyledComponentsRegistry from '../StyledComponentsRegistry';

const StyledFooter = styled.footer`
  text-align: center;
  font-size: var(--fs-5);
  padding: 40px var(--gutter-mobile);
  margin-top: 80px;
  border-top: 1px solid #eeeff1;
  color: #707584;
  @media screen and (min-width: 768px) {
    padding-left: var(--gutter-desktop);
    padding-left: var(--gutter-desktop);
  }
`;

const Footer = () => {
  return (
    <StyledComponentsRegistry>
      {/* TODO: Build this */}
      <StyledFooter>{new Date().getFullYear()} &copy; Liz Shaw. Built &amp; deployed on <a href="https://developers.hubspot.com/cms" target="_blank" rel="nofollow noreferrer">HubSpot CMS Hub</a>.</StyledFooter>
    </StyledComponentsRegistry>
  );
};

export default Footer;
