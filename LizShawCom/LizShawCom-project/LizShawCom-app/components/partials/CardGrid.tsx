import React from 'react';
import { styled } from 'styled-components';
import StyledComponentsRegistry from '../StyledComponentsRegistry';
import Card, { CardProps } from './Card';
import type { OverlayColor } from './CardOverlay';
import animation from './utils/animateElement';

interface Props {
  /** Grid children */
  cards: Array<CardProps>;
  /** Title of this section */
  'aria-description': string;
}

const Wrapper = styled.ul`
  ${animation}
  max-width: var(--max-width);
  padding: 0 var(--gutter-mobile);
  margin: 0 auto;
  list-style-type: none;
  width: 100%;
  transition: transform 0.15s;
  box-sizing: border-box; /* TODO: Needed? */
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 auto;
  flex-direction: row;
  justify-content: start;
  gap: var(--bottom-margin-default);
  @media screen and (min-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

const CardGrid = ({ cards, 'aria-description': ariaDescription }: Props) => (
  <StyledComponentsRegistry>
    <Wrapper aria-description={ariaDescription}>
      {cards.map((cardProps, i) => {
        let color: OverlayColor = 'purple';
        if ((i + 1) % 4 === 0) {
          color = 'orange';
        } else if ((i + 1) % 3 === 0) {
          color = 'blue';
        } else if ((i + 1) % 2 === 0) {
          color = 'pink';
        }
        return <Card {...cardProps} color={color} />;
      })}
    </Wrapper>
  </StyledComponentsRegistry>
);

export default CardGrid;
