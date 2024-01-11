import React from 'react';
import { styled } from 'styled-components';
import StyledComponentsRegistry from '../StyledComponentsRegistry';

interface Props {
  title: string;
  subtitle?: string;
  image?: string;
  // TODO: Narrow type
  variant?: 'short';
}

const StyledBanner = styled.section`
  background-color: yellow;
  text-align: center;
  padding: 100px;
`;

const Footer = ({ subtitle, title, image, variant }) => {
  return (
    <StyledComponentsRegistry>
      <StyledBanner>
        <h1>{title}</h1>
        {variant && <p>{subtitle}</p>}
        {image && <img src={image} alt={title} />}
        <p>variant={variant}</p>
      </StyledBanner>
    </StyledComponentsRegistry>
  );
};

export default Footer;
