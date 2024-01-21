import React from 'react';
import { styled } from 'styled-components';
import StyledComponentsRegistry from '../StyledComponentsRegistry';
import AsideHeader from './AsideHeader';
import Tag from './Tag';
import maxWidthCss from './utils/maxWidthCss';
import { formatTagSlug } from './utils/addTagSlug';

interface Props {
  selectedSlug: string;
  tagCloudCollection: string;
}

const LI = styled.li`
  display: inline;
`;

const Wrapper = styled.section`
  ${maxWidthCss}
  margin-top: 0;
  max-width: calc(var(--max-width) - 80px);
  @media screen and (min-width: 768px) {
    padding: 0 var(--gutter-desktop);
  }
`;

const TagHeader = ({ selectedSlug, tagCloudCollection: json }) => {
  const tags = JSON.parse(json);
  return (
    <StyledComponentsRegistry>
      <Wrapper>
        <h1>Tags</h1>
        <ul>
          {tags.map((tag) => {
            const isSelected = tag.slug === selectedSlug;
            return (
              <LI key={tag.label}>
                <Tag
                  color={isSelected ? 'pink' : 'blue'}
                  slug={formatTagSlug(tag.slug)}
                  name={tag.label}
                  variant="large"
                  disabled={isSelected}
                />
              </LI>
            );
          })}
        </ul>
        {/* TODO: Localize */}
        <AsideHeader title={`Posts tagged with ${selectedSlug}`} />
      </Wrapper>
    </StyledComponentsRegistry>
  );
};

export default TagHeader;
