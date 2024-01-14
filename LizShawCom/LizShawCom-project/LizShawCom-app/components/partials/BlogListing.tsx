import React from 'react';
import { styled } from 'styled-components';
import StyledComponentsRegistry from '../StyledComponentsRegistry';
import CardGrid from './CardGrid';
import type { CardProps } from './Card';
import type { TagWithSlug } from './Tag';
import { BlogListingContextProvider } from './BlogListingContext';

interface Props {
  /** Passed down from blog.absolute_url via js_partial */
  absoluteUrl: string;
  /** All posts from this blog listing query. */
  postCollection: string;
  /** All tags applicable to this blog listing view. */
  tagCollection: string;
}

type Post = {
  featured_image?: string;
  featured_image_alt_text?: string;
  html_title: string;
  post_summary: string;
  url: string;
};

type OverlayColor = 'purple' | 'pink' | 'blue' | 'orange';

const Section = styled.section`
  display: flex;
  gap: 3%;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const A = styled.a<{ $image: Post['featured_image']; $i: number }>`
  position: relative;
  display: block;
  min-height: 340px;
  margin-bottom: 32px;
  will-change: transform;
  transition: transform 0.2s;
  border-radius: 16px;
  overflow: hidden;
  width: ${({ $i }) => ($i > 0 ? '31.33333%' : '100%')};
  &:hover {
    transform: translateY(-5px);
  }
`;

const Overlay = styled.div<{ $color: OverlayColor }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(7, 14, 25, 0.4);
  background: linear-gradient(
    ${({ $color }) => {
      if ($color === 'pink') {
        return 'rgba(222, 61, 119, 0), rgb(222, 61, 119)';
      } else if ($color === 'blue') {
        return 'rgba(41, 134, 219, 0), rgb(41, 134, 219)';
      } else if ($color === 'orange') {
        return 'rgba(223, 112, 35, 0), rgb(223, 112, 35)';
      }
      return 'rgba(97, 35, 228, 0), rgb(97, 35, 228)';
    }}
  );
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
`;

const Text = styled.div`
  color: #fff;
  z-index: 2;
  position: absolute;
  width: calc(100% - 64px);
  bottom: 32px;
  left: 32px;
`;

const H3 = styled.h3`
  font-size: 24px;
  color: #fff;
`;

const Summary = styled.p`
  margin-bottom: 0;
`;

const BlogListing = ({ absoluteUrl, postCollection, tagCollection }: Props) => {
  const cards: Array<CardProps> = JSON.parse(postCollection);
  const allTags: Array<TagWithSlug> = JSON.parse(tagCollection);
  return (
    <StyledComponentsRegistry>
      <BlogListingContextProvider value={{ absoluteUrl, allTags }}>
        {/* TODO: Localize heading */}
        <h2>Recent Posts</h2>
        <CardGrid cards={cards} />
      </BlogListingContextProvider>
      {/* <Section>
        {posts.map(
          (
            {
              featured_image: image,
              featured_image_alt_text: imageAlt,
              html_title: title,
              post_summary: summary,
              url,
            },
            i,
          ) => {
            let color: OverlayColor = 'purple';
            if ((i + 1) % 4 === 0) {
              color = 'orange';
            } else if ((i + 1) % 3 === 0) {
              color = 'blue';
            } else if ((i + 1) % 2 === 0) {
              color = 'pink';
            }
            return (
              <A $i={i} key={title} $image={image} href={url} title={title}>
                <Text>
                  <H3>{title}</H3>
                  <Summary dangerouslySetInnerHTML={{ __html: summary }} />
                </Text>
                {image && (
                  <Img src={image} alt={imageAlt || title} loading="lazy" />
                )}
                <Overlay data-variant={color} $color={color} />
              </A>
            );
          },
        )}
      </Section> */}
    </StyledComponentsRegistry>
  );
};

export default BlogListing;
