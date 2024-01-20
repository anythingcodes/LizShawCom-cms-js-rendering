import React from 'react';
import StyledComponentsRegistry from '../StyledComponentsRegistry';
import CardGrid from './CardGrid';
import type { CardProps } from './Card';
import type { TagWithSlug } from './Tag';
import { BlogListingContextProvider } from './BlogListingContext';

interface Props {
  /** All posts from this blog listing query. */
  postCollection: string;
  /** All tags applicable to this blog listing view. */
  tagCollection: string;
}

const BlogListing = ({ postCollection, tagCollection }: Props) => {
  const cards: Array<CardProps> = JSON.parse(postCollection);
  const allTags: Array<TagWithSlug> = JSON.parse(tagCollection);
  return (
    <StyledComponentsRegistry>
      <BlogListingContextProvider value={{ allTags }}>
        {/* TODO: Localize heading */}
        <article>
          <CardGrid cards={cards} screenReaderDescription="Recent Posts" />
        </article>
      </BlogListingContextProvider>
    </StyledComponentsRegistry>
  );
};

export default BlogListing;
