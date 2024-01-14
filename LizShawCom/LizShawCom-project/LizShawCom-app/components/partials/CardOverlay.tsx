import React from 'react';
import { styled } from 'styled-components';

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
      if ($color === 'pink') {
        return 'rgba(222, 61, 119, 0), rgb(222, 61, 119)';
      } else if ($color === 'blue') {
        return 'rgba(41, 134, 219, 0), rgb(41, 134, 219)';
      } else if ($color === 'orange') {
        return 'rgba(223, 112, 35, 0), rgb(223, 112, 35)';
      }
      return 'rgba(97, 35, 228, 0), rgb(97, 35, 228)';
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
