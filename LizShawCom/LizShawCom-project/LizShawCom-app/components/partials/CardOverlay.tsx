import React from 'react';
import { styled } from 'styled-components';
import { accentColors, hexToRGBA } from './utils/colors';

export type OverlayColor = 'purple' | 'pink' | 'blue' | 'orange';

interface Props {
  color: OverlayColor;
}

const Div = styled.div<{ $color: Props['color'] }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(7, 14, 25, 0.4);
  background: linear-gradient(
    ${({ $color }) => {
      const hex = accentColors[$color];
      return `${hexToRGBA(hex, 0)}, ${hex}`;
    }}
  );
`;

/**
 * Parent must be relatively-positioned.
 */
const CardOverlay = ({ color }: Props) => {
  return <Div data-color={color} $color={color} aria-hidden={true} />;
};

export default CardOverlay;
