import React from 'react';
import { styled } from 'styled-components';
import StyledComponentsRegistry from '../StyledComponentsRegistry';
import AsideHeader from './AsideHeader';
import Tag from './Tag';
import maxWidthCss from './utils/maxWidthCss';
import { formatTagSlug } from './utils/addTagSlug';
import animation from './utils/animateElement';

interface Props {
  selectedSlug: string;
  tagCloudCollection: string;
}

const Wrapper = styled.section`
  ${maxWidthCss}
  ${animation}
  margin-top: 0;
`;

const Inner = styled.div`
  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`;

const UL = styled.ul`
  margin-bottom: 120px;
`;

const LI = styled.li`
  display: inline;
`;

const TagHeader = ({ selectedSlug, tagCloudCollection: json }: Props) => {
  const tags = JSON.parse(json);
  return (
    <StyledComponentsRegistry>
      <Wrapper>
        <Inner>
          <h1>Tags</h1>
          <UL>
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
          </UL>
          {/* TODO: Localize */}
          <AsideHeader
            title={() => (
              <>
                Posts tagged with <em>{selectedSlug}</em>
              </>
            )}
          />
        </Inner>
      </Wrapper>
    </StyledComponentsRegistry>
  );
};

export default TagHeader;
