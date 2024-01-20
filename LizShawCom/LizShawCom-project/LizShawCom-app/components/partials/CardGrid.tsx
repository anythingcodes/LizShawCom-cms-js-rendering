import React from 'react';
import { styled } from 'styled-components';
import StyledComponentsRegistry from '../StyledComponentsRegistry';
import Card, { CardProps } from './Card';
import type { OverlayColor } from './CardOverlay';
import animation from './utils/animateElement';
import { featuredTagName } from './Tag';

interface Props {
  /** Grid children, as an array of cards or JSON string to be parsed */
  cards: Array<CardProps> | string;
  /** Title of this section */
  ariaDescription: string;
  /** Optional max width */
  maxWidth?: string;
  /** Optional gap above mobile */
  aboveMobileGap?: string;
}

const Wrapper = styled.ul<{
  $aboveMobileGap?: Props['aboveMobileGap'];
  $maxWidth?: Props['maxWidth'];
}>`
  ${animation}
  max-width: ${({ $maxWidth }) => ($maxWidth ? $maxWidth : `var(--max-width)`)};
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
    gap: ${({ $aboveMobileGap }) =>
      $aboveMobileGap ? $aboveMobileGap : `var(--bottom-margin-default)`};
    padding-left: 40px;
    padding-right: 40px;
  }
`;

const CardGrid = ({
  aboveMobileGap,
  ariaDescription,
  cards: cardsProp,
  maxWidth,
}: Props) => {
  const cards: Exclude<Props['cards'], string> =
    typeof cardsProp === 'string' ? JSON.parse(cardsProp as string) : cardsProp;

  return (
    <StyledComponentsRegistry>
      <Wrapper
        aria-description={ariaDescription}
        $aboveMobileGap={aboveMobileGap}
        $maxWidth={maxWidth}
      >
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
};

export default CardGrid;
