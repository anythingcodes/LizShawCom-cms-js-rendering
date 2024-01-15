import { css } from 'styled-components';

export const accentColors = {
  pink: '#de3d77',
  blue: '#2986db',
  orange: '#df7023',
  purple: '#6123e4',
} as const;

/**
 * Converts hex code to RGBA. Returns a `css`-resolved helper string.
 */
export const hexToRGBA = (hex: string, alpha: number = 1) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
};
