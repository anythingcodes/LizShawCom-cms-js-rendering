import { createContext } from 'react';
import { TagWithSlug } from './Tag';

const defaultContext: {
  allTags: Array<TagWithSlug> | null;
} = {
  allTags: null,
};

export const BlogListingContext = createContext(defaultContext);

const { Provider } = BlogListingContext;

export { Provider as BlogListingContextProvider };
