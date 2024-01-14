import React from 'react';
import { styled } from 'styled-components';
import { OverlayColor } from './CardOverlay';

export interface TagGraphQLResponse {
  name: string;
}

export interface TagWithSlug extends TagGraphQLResponse {
  slug: string;
  color?: OverlayColor;
}

const A = styled.a<{ $color: TagWithSlug['color'] }>`
  padding: 4px 12px;
  margin: 0 4px 4px 0;
  font-size: 12px;
  line-height: 1;
  font-weight: 500;
  border-radius: 30px;
  color: #fff;
  transition: 0.25s;
  pointer-events: all;
  background-color: ${({ $color }) => {
    if ($color === 'pink') {
      return '#de3d77';
    } else if ($color === 'blue') {
      return '##2986db';
    } else if ($color === 'orange') {
      return '#df7023';
    }
    return '#6123e4'; /* purple default */
  }};

  &:hover,
  &:focus {
    box-shadow: 0 0.5em 0.5em -0.4em #000;
    transform: translateY(-0.25em);
  }
`;

const Tag = ({ color = 'purple', name, slug }: TagWithSlug) => (
  <A $color={color} href={slug}>
    {name}
  </A>
);

export default Tag;
