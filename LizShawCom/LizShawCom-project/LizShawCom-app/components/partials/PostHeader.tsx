import React from 'react';
import { styled } from 'styled-components';
import StyledComponentsRegistry from '../StyledComponentsRegistry';
import Tag, { type TagWithSlug } from './Tag';

interface Props {
  topic_list: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt?: string;
  authorDisplayName: string;
  authorSlug: string;
  publishDate: string;
  publishedUrl: string;
}

const Wrapper = styled.div`
  max-width: var(--max-width);
  padding: 0 var(--gutter-mobile);
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: var(--gutter-desktop);
    padding-right: var(--gutter-desktop);
  }
`;

const Column = styled.div`
  @media screen and (min-width: 768px) {
    width: calc(50% - 16px);
  }
`;

const Tags = styled.div`
  margin-bottom: 20px;
`;

const Meta = styled.div`
  font-size: var(--fs-5);
`;

const Author = styled.a`
  &::after {
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
  position: relative;
  transform: translate(0);
  min-height: 280px;
  border-radius: 8px;
  overflow: hidden;
  background: #eeeff1;
  padding-top: 65%;
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
      <Wrapper>
        <Column>
          <Tags>
            {tags.map(({ name, slug }) => (
              <Tag slug={slug} name={name} />
            ))}
          </Tags>
          <h1>{title}</h1>
          <Meta>
            <Author href={`/${authorSlug}`}>{authorDisplayName}</Author>
            <time dateTime={publishDate}>{computedDate}</time>
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
