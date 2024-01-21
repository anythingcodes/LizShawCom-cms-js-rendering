import React from 'react';
import { styled } from 'styled-components';
import StyledComponentsRegistry from '../StyledComponentsRegistry';
import { FooterProps } from './Footer';

type Props = FooterProps;

interface Post {
  slug: string;
  featuredImage: string;
  featuredImageAltText: string;
  title: string;
  publish_date_local_time: number;
  blogPostAuthor: {
    fullName: string;
    slug: string;
  };
}

interface Response {
  objects: Array<Post>;
}

const PopularPostsUL = styled.ul`
  list-style: none;
  font-size: var(--container-fs-body);
`;

const PopularPostsLI = styled.li`
  margin-bottom: 10px;
`;

const PopularPosts = ({ popularPostsCollection }: Props) => {
  const { objects: posts }: Response = JSON.parse(popularPostsCollection);
  return (
    <StyledComponentsRegistry>
      <PopularPostsUL>
        {posts.map(
          ({ slug, title, blogPostAuthor: { fullName, slug: authorSlug } }) => (
            <PopularPostsLI>
              <strong>
                <a href={`/${slug}`}>{title}</a>
              </strong>{' '}
              by <a href={`/author/${authorSlug}`}>{fullName}</a>
            </PopularPostsLI>
          ),
        )}
      </PopularPostsUL>
    </StyledComponentsRegistry>
  );
};

export default PopularPosts;
