import React from 'react';
import { styled } from 'styled-components';
import PrismWrapper from '../islands/PrismWrapper?island';
import { Island } from '@hubspot/cms-components';
import descendantStyles from './utils/descendantStyles';
import animation from './utils/animateElement';

interface Props {
  /** The post body with break tags stripped. */
  html: string;
}

const Wrapper = styled.article`
  ${animation}
  max-width: var(--article-max-width);
  padding: 0 var(--gutter-mobile);
  margin: 0 auto var(--bottom-margin-default) auto;
  @media screen and (min-width: 768px) {
    padding: 0 var(--gutter-desktop);
    margin-bottom: var(--bottom-margin-desktop);
  }
  ${descendantStyles}
`;

export type ArticleComponent = typeof Wrapper;

const Article = ({ html }: Props) => {
  return (
    <Island
      hydrateOn="visible"
      module={PrismWrapper}
      html={html}
      ArticleComponent={Wrapper}
    />
  );
};

export default Article;
