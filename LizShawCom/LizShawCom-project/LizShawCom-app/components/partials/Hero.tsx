import React from 'react';
import { styled } from 'styled-components';
import StyledComponentsRegistry from '../StyledComponentsRegistry';

interface Props {
  description?: string;
  title: string;
}

const Section = styled.section`
  max-width: var(--container-max-width);
  padding: 0 40px;
  margin: 0 auto;
`;

const H1 = styled.h1`
  font-size: var(--fs-0);
  line-height: 1.1;
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
