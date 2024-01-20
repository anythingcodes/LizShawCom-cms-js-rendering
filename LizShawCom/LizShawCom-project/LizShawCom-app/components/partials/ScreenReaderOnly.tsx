import React from 'react';
import { styled } from 'styled-components';

export interface ScreenReaderOnlyProps {
  /** The HTML tag this should render as */
  as?: keyof JSX.IntrinsicElements;
  /** Child */
  children: string;
  /** Whether this element can be focused, which will visually render it */
  focusable?: boolean;
}

const Component = styled.span<{
  $focusable: ScreenReaderOnlyProps['focusable'];
}>`
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  ${({ $focusable }) => {
    if ($focusable) {
      return `
      &:focus,
      &:active {
        clip: auto;
        clip-path: none;
        height: auto;
        margin: auto;
        overflow: visible;
        width: auto;
        white-space: normal;
      }
      `;
    }
    return null;
  }}
`;

/**
 * Screen reader only React component. Should be used within a
 * StyledComponentRegistry wrapper.
 */
const ScreenReaderOnly = ({
  as = 'span',
  children,
  focusable = false,
}: ScreenReaderOnlyProps) => (
  <Component as={as} $focusable={focusable}>
    {children}
  </Component>
);

export default ScreenReaderOnly;
