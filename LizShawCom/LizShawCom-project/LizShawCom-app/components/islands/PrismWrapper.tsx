import React, { useEffect } from 'react';
import Prism from 'prismjs';
import '../../styles/laserwave.min.css';
import StyledComponentsRegistry from '../StyledComponentsRegistry';
import type { ArticleComponent } from '../partials/Article';

interface Props {
  html: string;
  ArticleComponent: ArticleComponent;
}

const PrismWrapper = ({ html, ArticleComponent }: Props) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <StyledComponentsRegistry>
      <ArticleComponent dangerouslySetInnerHTML={{ __html: html }} />
    </StyledComponentsRegistry>
  );
};

export default PrismWrapper;
