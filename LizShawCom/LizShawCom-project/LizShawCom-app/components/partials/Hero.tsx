import React from 'react';
import { styled } from 'styled-components';
import StyledComponentsRegistry from '../StyledComponentsRegistry';

interface Props {
  description?: string;
  title: string;
}

const Section = styled.section`
  max-width: var(--container-max-width);
  padding: 0 var(--gutter-mobile);
  margin: 0 auto 80px auto;
  @media screen and (min-width: 768px) {
    padding-left: 40px;
    padding-left: 40px;
  }
`;

const H1 = styled.h1`
  @media screen and (min-width: 768px) {
    font-size: var(--fs-0);
    line-height: 1.1;
  }
`;

const Hero = ({ description, title }: Props) => {
  return (
    <StyledComponentsRegistry>
      <Section>
        <H1>{title}</H1>
        {description && <p>{description}</p>}
      </Section>
    </StyledComponentsRegistry>
  );
};

export default Hero;
