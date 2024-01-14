import React from 'react';
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
    </StyledComponentsRegistry>
  );
};

export default BlogListing;
