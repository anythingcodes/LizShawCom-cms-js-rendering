import React from 'react';
import { styled } from 'styled-components';
import StyledComponentsRegistry from '../StyledComponentsRegistry';

interface Props {
  postCollection: string;
}

type Post = {
  featured_image?: string;
  html_title: string;
  post_summary: string;
  url: string;
};

const Post = styled.a<{ image: Post['featured_image'] }>`
  border: 1px solid blue;
  display: block;
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
          featured_image: image,
          html_title: title,
          post_summary: summary,
          url,
        }) => (
          <Post key={title} image={image} href={url}>
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
