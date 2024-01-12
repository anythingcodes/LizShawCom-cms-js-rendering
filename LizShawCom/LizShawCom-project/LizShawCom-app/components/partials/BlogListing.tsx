import React from 'react';
import { styled } from 'styled-components';
import StyledComponentsRegistry from '../StyledComponentsRegistry';

interface Props {
  postCollection: string;
}

type Post = {
  html_title: string;
  post_summary: string;
  featured_image?: string;
};

const Post = styled.div<{ image: Post['featured_image'] }>`
  border: 1px solid blue;
  ${({ image }) => {
    if (!image) return null;

    return `
    &::before{
      content: url('${image}');
    }`;
  }}
`;

const BlogListing = ({ postCollection }: Props) => {
  const posts: Array<Post> = JSON.parse(postCollection);
  return (
    <StyledComponentsRegistry>
      {posts.map(
        ({
          html_title: title,
          post_summary: summary,
          featured_image: image,
        }) => (
          <Post key={title} image={image}>
            <h2>{title}</h2>
            <p>{image}</p>
            <div dangerouslySetInnerHTML={{ __html: summary }} />
          </Post>
        ),
      )}
    </StyledComponentsRegistry>
  );
};

export default BlogListing;
