import React, { useContext } from 'react';
import { styled } from 'styled-components';
import StyledComponentsRegistry from '../StyledComponentsRegistry';
import Card, { CardProps } from './Card';
import type { OverlayColor } from './CardOverlay';

interface Props {
  /** Grid children */
  cards: Array<CardProps>;
}

const Wrapper = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  width: 100%;
  animation: animateElement cubic-bezier(0.3, 0.45, 0.45, 0.95) 0.75s;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  transition: transform 0.15s;
  box-sizing: border-box; /* TODO: Needed? */
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 auto;
  flex-direction: row;
  justify-content: space-between;
`;

const CardGrid = ({ cards }: Props) => (
  <StyledComponentsRegistry>
    <Wrapper>
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
