import { css } from 'styled-components';

export default css`
  max-width: var(--max-width);
  margin: 64px var(--gutter-mobile) 0 var(--gutter-mobile);
  @media screen and (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    margin-top: 80px;
  }
`;
