import { css } from 'styled-components';

export default css`
  max-width: var(--max-width);
  margin-top: 64px;
  @media screen and (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    margin-top: 80px;
  }
`;
