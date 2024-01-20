import React from 'react';
import { styled } from 'styled-components';
import StyledComponentsRegistry from '../StyledComponentsRegistry';
import maxWidthCss from './utils/maxWidthCss';

const StyledFooter = styled.footer`
  ${maxWidthCss}
  text-align: center;
  font-size: var(--fs-5);
  color: #707584;
  padding: 40px;
`;

const Contents = styled.div`
  border-top: 1px solid #eeeff1;
`

const Footer = () => {
  return (
    <StyledComponentsRegistry>
      {/* TODO: Localize */}
      <StyledFooter>
        <Contents>{new Date().getFullYear()} &copy; Liz Shaw. Built &amp; deployed on <a href="https://developers.hubspot.com/cms" target="_blank" rel="nofollow noreferrer">HubSpot CMS Hub</a>.</Contents>
      </StyledFooter>
    </StyledComponentsRegistry>
  );
};

export default Footer;
