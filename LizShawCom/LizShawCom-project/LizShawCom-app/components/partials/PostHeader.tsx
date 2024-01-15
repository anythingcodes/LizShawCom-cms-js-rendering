import React from 'react';
import { styled } from 'styled-components';
import StyledComponentsRegistry from '../StyledComponentsRegistry';
import Tag, { type TagWithSlug } from './Tag';
import animation from './utils/animateElement';

interface Props {
  authorDisplayName: string;
  authorSlug: string;
  image: string;
  imageAlt?: string;
  imagePlacement: 'left' | 'right' | 'center';
  publishDate: string;
  publishedUrl: string;
  subtitle: string;
  title: string;
  topic_list: string;
}

const Wrapper = styled.div<{ $imagePlacement: Props['imagePlacement'] }>`
  margin: 0 auto var(--bottom-margin-default) auto;
  max-width: var(--max-width);
  padding: 0 var(--gutter-mobile);
  @media screen and (min-width: 768px) {
    margin-bottom: var(--bottom-margin-desktop);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: var(--gutter-desktop);
    padding-right: var(--gutter-desktop);
    flex-direction: ${({ $imagePlacement }) =>
      $imagePlacement === 'left' ? 'row-reverse' : null};
      ${({ $imagePlacement }) => {
        if ($imagePlacement === 'center') {
          return `
          flex-direction: column;
          ${Column}:first-child {
            max-width: var(--article-max-width);
            margin: 0 auto var(--bottom-margin-default);
          }
          ${Column}:last-child {
            width: 100%;
          }
          `;
        }
        return null;
      }}
`;

const Column = styled.div`
  @media screen and (min-width: 768px) {
    width: calc(50% - 16px);
  }
  &:first-child {
    @media screen and (max-width: 767px) {
      margin-bottom: var(--bottom-margin-default);
    }
  }
`;

const H1 = styled.h1`
  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;

const Tags = styled.div`
  margin-bottom: 20px;
`;

const Meta = styled.div`
  font-size: var(--fs-5);
`;

const Time = styled.time`
  &::before {
    content: '';
    position: relative;
    bottom: 0.2rem;
    display: inline-block;
    height: 3px;
    width: 3px;
    margin: 0 0.5rem 0 0.5rem;
    border-radius: 50%;
    background-color: #070e19;
  }
`;

const ImgWrapper = styled.div`
  ${animation}
  transition: transform 0.15s;
  position: relative;
  transform: translate(0);
  min-height: 280px;
  border-radius: 8px;
  overflow: hidden;
  background: #eeeff1;
  padding-top: 56.25%;
  @media screen and (min-width: 768px) {
    padding-top: 65%;
  }
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
`;

const PostHeader = ({
  authorDisplayName,
  authorSlug,
  image,
  imageAlt,
  imagePlacement,
  publishDate,
  publishedUrl,
  topic_list,
  title,
}: Props) => {
  const tags: Array<TagWithSlug> = JSON.parse(topic_list);
  const computedDate = new Date(publishDate)
    .toDateString()
    .replace(/^\S+\s/, '');

  return (
    <StyledComponentsRegistry>
      <Wrapper $imagePlacement={imagePlacement}>
        <Column>
          <Tags>
            {tags.map(({ name, slug }) => (
              <Tag
                slug={`/tag/${slug}`}
                name={name}
                color={
                  imagePlacement === 'left'
                    ? 'purple'
                    : imagePlacement === 'right'
                    ? 'orange'
                    : 'pink'
                }
              />
            ))}
          </Tags>
          <H1>{title}</H1>
          <Meta>
            <a href={`/author/${authorSlug}`}>{authorDisplayName}</a>
            <Time dateTime={publishDate}>{computedDate}</Time>
          </Meta>
        </Column>
        <Column>
          <ImgWrapper>
            <Img
              loading="lazy"
              alt={imageAlt || title}
              src={image}
              data-pin-url={publishedUrl}
              data-pin-description={title}
            />
          </ImgWrapper>
        </Column>
      </Wrapper>
    </StyledComponentsRegistry>
  );
};

export default PostHeader;
