import React from 'react';
import { styled } from 'styled-components';
import StyledComponentsRegistry from '../StyledComponentsRegistry';
import Card, { CardProps } from './Card';
import type { OverlayColor } from './CardOverlay';
import animation from './utils/animateElement';
import ScreenReaderOnly, { ScreenReaderOnlyProps } from './ScreenReaderOnly';

interface Props {
  /** Optional gap above mobile */
  aboveMobileGap?: string;
  /** Grid children, as an array of cards or JSON string to be parsed */
  cards: Array<CardProps> | string;
  /** Whether or not the screen reader header should render to the DOM. */
  hasScreenReaderHeader?: boolean;
  /** Optional max width */
  maxWidth?: string;
  /** Title of this section provided to screen readers */
  screenReaderDescription: string;
}

const UL = styled.ul<{
  $aboveMobileGap?: Props['aboveMobileGap'];
  $maxWidth?: Props['maxWidth'];
}>`
  ${animation}
  max-width: ${({ $maxWidth }) => ($maxWidth ? $maxWidth : `var(--max-width)`)};
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
    gap: ${({ $aboveMobileGap }) =>
      $aboveMobileGap ? $aboveMobileGap : `var(--bottom-margin-default)`};
  }
`;

const CardGrid = ({
  aboveMobileGap,
  cards: cardsProp,
  hasScreenReaderHeader = true,
  maxWidth,
  screenReaderDescription,
}: Props) => {
  const cards: Exclude<Props['cards'], string> =
    typeof cardsProp === 'string' ? JSON.parse(cardsProp as string) : cardsProp;

  return (
    <StyledComponentsRegistry>
      {hasScreenReaderHeader && (
        <ScreenReaderOnly as="h2">{screenReaderDescription}</ScreenReaderOnly>
      )}
      <UL $aboveMobileGap={aboveMobileGap} $maxWidth={maxWidth}>
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
      </UL>
    </StyledComponentsRegistry>
  );
};

export default CardGrid;
