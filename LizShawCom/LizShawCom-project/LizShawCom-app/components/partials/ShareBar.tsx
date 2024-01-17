import React from 'react';
import styled from 'styled-components';
import StyledComponentsRegistry from '../StyledComponentsRegistry';
import X from './svgs/X';

interface Props {
  encodedTitle: string;
  postUrl: string;
}
const Aside = styled.aside`
  margin: var(--bottom-margin-default) 0;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: var(--bottom-margin-desktop);
  }
`;

const UL = styled.ul`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const A = styled.a`
  display: inline-block;
  width: 40px;
  height: 40px;
  font-size: 18px;
  line-height: 1;
  border-radius: 50%;
  border: none;
  color: #fff;
  background: #585e82;
  transition: 0.2s;
`;

const ShareBar = ({ encodedTitle, postUrl }: Props) => {
  return (
    <StyledComponentsRegistry>
      <Aside>
        <UL>
          <li>
            <A
              href={`https://twitter.com/intent/tweet?text=${encodedTitle}&amp;url=${postUrl}`}
              // onClick="window.open(this.href, 'pop-up', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;"
              title="Share on X"
              rel="nofollow"
            >
              <X width={30} height={30} />
            </A>
          </li>
          <li className="share__item">
            <A
              className="share__link share__facebook"
              href="https://www.facebook.com/sharer/sharer.php?u=https://calipse.netlify.app/do-what-you-can-with-what-you-have-where-you-are"
              // onClick="window.open(this.href, 'pop-up', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;"
              title="Share on Facebook"
              rel="nofollow"
            >
              <i className="ion ion-logo-facebook"></i>
            </A>
          </li>
          <li className="share__item">
            <A
              className="share__link share__pinterest"
              href="http://pinterest.com/pin/create/button/?url=https://calipse.netlify.app/do-what-you-can-with-what-you-have-where-you-are&amp;media=https://calipse.netlify.app/images/03.jpg&amp;description=Do%20what%20you%20can,%20with%20what%20you%20have,%20where%20you%20are"
              // onClick="window.open(this.href, 'pop-up', 'left=20,top=20,width=900,height=500,toolbar=1,resizable=0'); return false;"
              title="Share on Pinterest"
              rel="nofollow"
            >
              <i className="ion ion-logo-pinterest"></i>
            </A>
          </li>
        </UL>
      </Aside>
    </StyledComponentsRegistry>
  );
};

export default ShareBar;
