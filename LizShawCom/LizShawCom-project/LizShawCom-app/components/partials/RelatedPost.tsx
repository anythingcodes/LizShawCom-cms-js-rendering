import React from 'react';
import { styled } from 'styled-components';
import StyledComponentsRegistry from '../StyledComponentsRegistry';
import Card, { CardProps } from './Card';
import { formatTagSlug } from './utils/addTagSlug';
import { TagWithSlug } from './Tag';
import AsideHeader from './AsideHeader';
import maxWidthCss from './utils/maxWidthCss';

interface Props extends Omit<CardProps, 'blog_tags'> {
  relatedTagLabel?: string;
  relatedTagSlug?: string;
  /** Stringified JSON */
  tags: string;
}

const Aside = styled.aside`
  ${maxWidthCss}
  @media screen and (min-width: 768px) {
    padding-right: 40px;
    padding-left: 40px;
  }
`;

const UL = styled.ul`
  list-style-type: none;
  width: 100%;
  display: flex;
  flex: 0 1 auto;
`;

const RelatedPost = ({
  tags,
  relatedTagLabel,
  relatedTagSlug,
  ...cardProps
}: Props) => {
  const computedTags: Array<TagWithSlug> = JSON.parse(tags).map((tag) => ({
    ...tag,
    slug: formatTagSlug(tag.slug),
  }));
  return (
    <StyledComponentsRegistry>
      <Aside>
        <AsideHeader
          title="You may also like"
          linkLabel={relatedTagLabel}
          linkUrl={formatTagSlug(relatedTagSlug)}
        />
        <UL>
          <Card {...cardProps} color="blue" blog_tags={computedTags} />
        </UL>
      </Aside>
    </StyledComponentsRegistry>
  );
};

export default RelatedPost;
