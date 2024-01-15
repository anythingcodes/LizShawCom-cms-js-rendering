import React from 'react';
import { styled } from 'styled-components';
import StyledComponentsRegistry from '../StyledComponentsRegistry';
import animation from './utils/animateElement';
import descendantStyles from './utils/descendantStyles';

interface Props {
  /** The post body with break tags stripped. */
  html: string;
}

const Wrapper = styled.article`
  ${animation}
  transition: transform 0.15s;
  max-width: var(--article-max-width);
  padding: 0 var(--gutter-mobile);
  margin: 0 auto var(--bottom-margin-default) auto;
  @media screen and (min-width: 768px) {
    padding: 0 var(--gutter-desktop);
    margin-bottom: var(--bottom-margin-desktop);
  }
  ${descendantStyles}
`;

const Article = ({ html }: Props) => (
  <StyledComponentsRegistry>
    <Wrapper dangerouslySetInnerHTML={{ __html: html }} />
  </StyledComponentsRegistry>
);

export default Article;
