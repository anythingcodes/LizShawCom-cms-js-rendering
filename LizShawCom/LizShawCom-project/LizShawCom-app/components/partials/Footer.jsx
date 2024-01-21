import React from 'react';
import { styled } from 'styled-components';
import StyledComponentsRegistry from '../StyledComponentsRegistry';
import maxWidthCss from './utils/maxWidthCss';
import { srOnlyCss } from './ScreenReaderOnly';
import { Island } from '@hubspot/cms-components';
import HubSpotForm from '../islands/HubSpotForm?island';

const inputHeight = 68;
const submitOffset = 5;
const formAccent = "#633ce2";
const targetId = 'newsletter-form';

const Wrapper = styled.footer`
  ${maxWidthCss}
  font-size: var(--fs-4);
  #${targetId} {
    form {
      position: relative;
    }
    .submitted-message {
      color: #689f38;
    }
    .hs-email {
      > label {
        ${srOnlyCss}
        font-weight: bold;
      }
      input {
        width: 100%;
        border: none;
        height: ${inputHeight}px;
        padding: 16px 30% 16px 16px;
        font-size: 15px;
        box-sizing: border-box;
        line-height: 21px;
        outline: 2px solid transparent;
        border-radius: 8px;
        color: #070e19;
        background-color: rgba(99,60,226,0.06);
        transition: outline .25s ease;
        @media screen and (max-width: 1170px) and (min-width: 768px) {
          padding-right: 14vw;
        }
        &:focus {
          outline-color: ${formAccent};
        }
        &.error {
          outline-color: #f44336;
        }
      }
    }
    ul {
      list-style: none;
      margin-top: 5px;
      &.hs-error-msgs {
        color: #ef9a9a;
      }
    }
    .legal-consent-container {
      color: #666a6d;
      margin-top: 10px;
      font-size: var(--fs-5);
    }
    input[type="submit"] {
      position: absolute;
      right: ${submitOffset}px;
      top: ${submitOffset}px;
      display: inline-block;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.3;
      text-decoration: none;
      border-radius: 8px;
      border: none;
      outline: none;
      cursor: pointer;
      transition: background .25s;
      color: #fff;
      background: ${formAccent};
      box-sizing: border-box;
      height: ${inputHeight - (submitOffset * 2)}px;
      padding: 16px;
      &:hover {
        background: #582fe0;
      }
    }
  }
`;

const Meta = styled.div`
  border-top: 1px solid #eeeff1;
  padding: 40px;
  text-align: center;
  font-size: var(--fs-5);
  color: #707584;
  margin-top: 64px;
  @media screen and (min-width: 768px) {
    margin-top: 80px;
  }
`;

const Row = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 32px;
  }
`;

const Cell =styled.div`
  @media screen and (min-width: 768px) {
    flex: 1
  }
`;

const H2 = styled.h2`

`;

const P = styled.p`
  margin-bottom: 20px;
`;

const Footer = () => {

  return (
    <StyledComponentsRegistry>
      {/* TODO: Localize */}
      <Wrapper>
        <Row>
          <Cell>
            <H2>About Liz</H2>
            <P>I&#39;m a full-time software engineer passionate about growing my own food and becoming as self-sufficient as possible. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</P>
            {/* <div>TODO: social row here</div> */}
          </Cell>
          <Cell>
            <H2>Latest Posts</H2>
            <p>Coming soon.</p>
          </Cell>
          <Cell>
            <H2>Newsletter</H2>
            <P>Subscribe to the newsletter for blog post notifications, early access to discounts, and product updates.</P>
            <div id="newsletter-form" />
            <Island module={HubSpotForm} hydrateOn="visible" portalId="2068068" formId="c8c5c76b-cba2-4435-a7f5-161828626576" targetId={targetId} />
          </Cell>
        </Row>
        <Meta>{new Date().getFullYear()} &copy; Liz Shaw. Built &amp; deployed on <a href="https://developers.hubspot.com/cms" target="_blank" rel="nofollow noreferrer">HubSpot CMS Hub</a>.</Meta>
      </Wrapper>
    </StyledComponentsRegistry>
  );
};

export default Footer;
