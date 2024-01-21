import React from 'react';
import { styled } from 'styled-components';
import StyledComponentsRegistry from '../StyledComponentsRegistry';
import maxWidthCss from './utils/maxWidthCss';

interface Props {
  avatarSrc: string;
  bio: string;
  fullName: string;
  linkedin: string;
}

const MaxWidth = styled.div`
  ${maxWidthCss}
`;

const Article = styled.article`
  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`;

const AuthorArticle = ({ avatarSrc, bio, fullName, linkedin }: Props) => {
  return (
    <StyledComponentsRegistry>
      <MaxWidth>
        <Article>
          {/* TODO: Localize */}
          <h1>About {fullName}</h1>
          <div>
            <img src={avatarSrc} alt={fullName} />
          </div>
          <p>{bio}</p>
          <p>{linkedin}</p>
        </Article>
      </MaxWidth>
    </StyledComponentsRegistry>
  );
};

export default AuthorArticle;
