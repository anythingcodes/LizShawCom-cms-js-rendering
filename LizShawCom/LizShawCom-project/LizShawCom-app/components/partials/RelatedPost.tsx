import React from 'react';
import { css, styled } from 'styled-components';
import StyledComponentsRegistry from '../StyledComponentsRegistry';
import Card, { CardProps } from './Card';
import { formatTagSlug } from './utils/addTagSlug';
import { TagWithSlug } from './Tag';

interface Props extends Omit<CardProps, 'blog_tags'> {
  relatedTagLabel?: string;
  relatedTagSlug?: string;
  /** Stringified JSON */
  tags: string;
}

/** Allows text to covers the absolutely-positioned grey line */
const headerTextBackground = css`
  background-color: #fff;
`;

const Wrapper = styled.aside`
  max-width: var(--max-width);
  margin: 64px var(--gutter-mobile) 0 var(--gutter-mobile);
  @media screen and (min-width: 768px) {
    padding-right: 40px;
    padding-left: 40px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 80px;
  }
`;

const UL = styled.ul`
  list-style-type: none;
  width: 100%;
  display: flex;
  flex: 0 1 auto;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 40px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    display: block;
    width: 100%;
    height: 1px;
    background: #eeeff1;
    pointer-events: none;
  }
`;

const RelatedTag = styled.a`
  font-size: var(--fs-4);
  font-family: var(--ff-heading);
  font-style: italic;
  font-weight: 600;
  padding-left: 20px;
  ${headerTextBackground}
  &:hover {
    border-bottom-color: transparent;
  }
  @media screen and (min-width: 768px) {
    font-size: var(--fs-3);
  }
`;

const H2 = styled.h2`
  display: inline-block;
  padding-right: 20px;
  margin-bottom: 0;
  ${headerTextBackground}
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
      <Wrapper>
        <HeaderWrapper>
          <H2>
            {/* TODO: Localize hardcoded text */}
            You may also like
          </H2>
          {!!relatedTagLabel && !!relatedTagSlug && (
            <RelatedTag href={formatTagSlug(relatedTagSlug)}>
              See all {relatedTagLabel}
            </RelatedTag>
          )}
        </HeaderWrapper>
        <UL>
          <Card {...cardProps} color="blue" blog_tags={computedTags} />
        </UL>
      </Wrapper>
    </StyledComponentsRegistry>
  );
};

export default RelatedPost;
