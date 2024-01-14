import React, { useContext } from 'react';
import { styled } from 'styled-components';
import CardOverlay, { OverlayColor } from './CardOverlay';
import { BlogListingContext } from './BlogListingContext';
import Tag, { TagWithSlug } from './Tag';

export interface CardProps {
  color: OverlayColor;
  width?: 'default' | 'large';
  url: string;
  featured_image_alt_text?: string;
  featured_image: string;
  post_summary: string;
  html_title: string;
  blog_tags?: Array<TagWithSlug>; // TODO: Test URL with space, hyphenation, etc.
}

const LI = styled.li<{ $width: CardProps['width'] }>`
  color: #fff;
  min-height: 340px;
  margin-bottom: 32px;
  will-change: transform;
  transition: transform 0.2s;

  @media screen and (min-width: 400px) {
    & {
      width: ${({ $width }) =>
        $width === 'large' ? '100%' : 'calc(50% - 16px)'};
    }
  }
  @media screen and (min-width: 768px) {
    & {
      width: ${({ $width }) =>
        $width === 'large' ? '100%' : 'calc(33.3333333333% - 16px)'};
    }
  }
  &::after {
    content: '';
    display: table;
    padding-top: 25%;
  }
  &:hover {
    transform: translateY(-5px);
  }
`;

const Inner = styled.div`
  position: relative;
  transform: translate(0);
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
`;

const Featured = styled.span`
  position: absolute;
  top: 22px;
  left: 32px;
  z-index: 10;
  font-size: 10px;
  line-height: 1;
  font-weight: 500;
  letter-spacing: 2px;
  pointer-events: none;
  html[lang='en'] & {
    text-transform: uppercase;
  }
`;

const ImageLink = styled.a`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /*user-select: none;*/
  background: #070e19; /* TODO: needed? */
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  pointer-events: none;
`;

const Content = styled.div`
  z-index: 2;
  width: 100%;
  margin-top: auto;
  padding: 0 32px 32px;
  pointer-events: none;
`;

const Tags = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 20px;
  line-height: 1;
`;

const H3 = styled.h3`
  font-size: var(--container-fs-3);
  margin-bottom: 0;
  a {
    color: #fff;
  }
`;

const addTagSlug = (
  absoluteUrl: string,
  allTags: Array<TagWithSlug>,
  postTags: CardProps['blog_tags'] = [],
): Array<TagWithSlug> =>
  postTags.map((postTag) => {
    let slug = '';
    const matchingTag = allTags.find(({ name }) => name === postTag.name);
    if (matchingTag && matchingTag.slug) {
      slug = `${absoluteUrl}/tag/${matchingTag.slug}`;
    }
    return { ...postTag, slug };
  });

const Card = ({
  blog_tags: cardTags = [],
  color,
  featured_image: imageSrc,
  featured_image_alt_text: imageAlt,
  html_title: title,
  post_summary: summary,
  url,
  width = 'default',
}: CardProps) => {
  const { absoluteUrl, allTags } = useContext(BlogListingContext);
  const computedTags = addTagSlug(absoluteUrl, allTags, cardTags);

  return (
    <LI data-width={width} $width={width}>
      <Inner>
        {/* TODO: Localize Featured text */}
        {width === 'large' && <Featured>Featured</Featured>}
        <ImageLink href={url} title={title}>
          <CardOverlay color={color} />
          <Img alt={imageAlt} src={imageSrc} />
        </ImageLink>
        <Content>
          {computedTags.length > 0 && (
            <Tags>
              {computedTags.map(({ name, slug }) => (
                <Tag slug={slug} color={color} name={name} />
              ))}
            </Tags>
          )}
          <H3>
            <a href={url} title={title}>
              {title}
            </a>
          </H3>
          <p>{summary}</p>
        </Content>
      </Inner>
    </LI>
  );
};

export default Card;
