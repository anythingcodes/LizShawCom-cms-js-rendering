import React from 'react';
import { styled } from 'styled-components';
import StyledComponentsRegistry from '../StyledComponentsRegistry';

interface Props {
  postCollection: string;
}

type Post = {
  featured_image?: string;
  featured_image_alt_text?: string;
  html_title: string;
  post_summary: string;
  url: string;
};

const Post = styled.a<{ $image: Post['featured_image'] }>`
  border: 1px solid blue;
  display: block;
`;

const BlogListing = ({ postCollection }: Props) => {
  const posts: Array<Post> = JSON.parse(postCollection);
  return (
    <StyledComponentsRegistry>
      {posts.map(
        ({
          featured_image: image,
          featured_image_alt_text: imageAlt,
          html_title: title,
          post_summary: summary,
          url,
        }) => (
          <Post key={title} $image={image} href={url}>
            <h2>{title}</h2>
            {image && (
              <img src={image} alt={imageAlt || title} loading="lazy" />
            )}
            <div dangerouslySetInnerHTML={{ __html: summary }} />
          </Post>
        ),
      )}
    </StyledComponentsRegistry>
  );
};

export default BlogListing;
