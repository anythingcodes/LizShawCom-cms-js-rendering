import React, { useContext } from 'react';
import { styled } from 'styled-components';
import CardOverlay, { OverlayColor } from './CardOverlay';
import { BlogListingContext } from './BlogListingContext';
import Tag, { TagWithSlug, featuredTagName } from './Tag';
import addTagSlug from './utils/addTagSlug';

export interface CardProps {
  color: OverlayColor;
  url: string;
  featured_image_alt_text?: string;
  featured_image: string;
  post_summary: string;
  html_title: string;
  blog_tags?: Array<TagWithSlug>; // TODO: Test URL with space, hyphenation, etc.
  width: 'default' | 'wide';
}

const LI = styled.li<{ $width: CardProps['width'] }>`
  color: #fff;
  will-change: transform;
  transition: transform 0.2s;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex: ${({ $width }) =>
      $width === 'wide'
        ? '1 0 100%'
        : '1 0 calc(50% - var(--bottom-margin-default))'};
  }

  @media screen and (min-width: 1000px) {
    flex: ${({ $width }) =>
      $width === 'wide'
        ? '1 0 100%'
        : '1 0 calc(33.3333333333% - var(--bottom-margin-default))'};
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
  flex-direction: row-reverse;
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
  font-size: var(--container-fs-2);
  a {
    color: #fff;
  }
`;

const Summary = styled.p`
  font-size: var(--container-fs-body);
  margin-bottom: 0;
`;

const Card = ({
  blog_tags: cardTags = [],
  color,
  featured_image: imageSrc,
  featured_image_alt_text: imageAlt,
  html_title: title,
  post_summary: summary,
  url,
  width,
}: CardProps) => {
  const { allTags } = useContext(BlogListingContext);
  const isFeatured = cardTags.some(({ name }) => name === featuredTagName);
  const computedTags = addTagSlug(allTags, cardTags);

  return (
    <LI $width={width}>
      <Inner>
        <Content>
          {computedTags.length > 0 && (
            <Tags>
              {computedTags.reduce<JSX.Element[]>((acc, { name, slug }) => {
                if (name !== featuredTagName) {
                  acc.push(<Tag slug={slug} color={color} name={name} />);
                }
                return acc;
              }, [])}
            </Tags>
          )}
          <H3>
            <a href={url}>{title}</a>
          </H3>
          <Summary>{summary}</Summary>
        </Content>
        {/* TODO: Localize Featured text */}
        {isFeatured && <Featured>{featuredTagName}</Featured>}
        <ImageLink href={url}>
          <CardOverlay color={color} />
          <Img alt={imageAlt} src={imageSrc} loading="lazy" />
        </ImageLink>
      </Inner>
    </LI>
  );
};

export default Card;
