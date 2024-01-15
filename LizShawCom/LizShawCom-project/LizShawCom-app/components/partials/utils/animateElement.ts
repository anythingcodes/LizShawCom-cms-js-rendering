import { css, keyframes } from 'styled-components';

const animationKeyframe = keyframes`
0% {
  transform: translate(0px, 50px);
}
100% {
  transform: translate(0px, 0px);
}
`;

export default css`
  ${animationKeyframe}
  animation: animateElement cubic-bezier(0.3, 0.45, 0.45, 0.95) 0.75s;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
`;
