import React from 'react';
import { styled } from 'styled-components';
import StyledComponentsRegistry from '../StyledComponentsRegistry';
import AsideHeader from './AsideHeader';
import Tag from './Tag';
import maxWidthCss from './utils/maxWidthCss';
import { formatTagSlug } from './utils/addTagSlug';

const TagCloud = styled.ul``;

const Wrapper = styled.section`
  ${maxWidthCss}
`;

const LargeTag = styled((props) => <Tag {...props} />)`
  font-size: var(--fs-3);
  ${({ disabled }) => (disabled ? `pointer-events: none;` : null)}
`;

const TagHeader = ({ selectedSlug, tagCloudCollection }) => {
  const allTags = JSON.parse(tagCloudCollection);

  return (
    <StyledComponentsRegistry>
      <Wrapper>
        <h1>Tags</h1>
        <TagCloud>
          {allTags.map((tag) => (
            <li key={tag.label}>
              <LargeTag
                color={tag.slug === selectedSlug ? 'pink' : 'blue'}
                slug={formatTagSlug(tag.slug)}
                name={tag.label}
                disabled={tag.slug === selectedSlug}
              />
            </li>
          ))}
        </TagCloud>
        <AsideHeader title={`Posts tagged with ${selectedSlug}`} />
      </Wrapper>
    </StyledComponentsRegistry>
  );
};

export default TagHeader;
