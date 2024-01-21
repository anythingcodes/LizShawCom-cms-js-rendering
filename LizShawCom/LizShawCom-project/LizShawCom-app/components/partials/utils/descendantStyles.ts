import { css } from 'styled-components';
import { accentColors, hexToRGBA } from './colors';
import { hrStyles } from '../HR';

const preBorderColor = hexToRGBA(accentColors.blue, 0.6);

/**
 * Styles applied to descendant elements in the blog post article. Essentially
 * the style guide of the site.
 *
 * TODO: Localize blockquote quotation mark
 */
export default css`
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  dl,
  blockquote,
  address,
  hr,
  table,
  fieldset,
  figure {
    margin-bottom: var(--bottom-margin-default);
  }
  ul,
  ol,
  dd {
    margin-left: 20px;
  }
  ul li,
  ol li {
    margin-bottom: 10px;
  }
  pre {
    margin: var(--bottom-margin-default) 0;
    @media screen and (min-width: 768px) {
      margin-top: var(--bottom-margin-desktop);
      margin-bottom: var(--bottom-margin-desktop);
    }
  }
  pre {
    overflow: auto;
    font-family: source-code-pro, Menlo, Monaco, 'Courier New', Courier,
      monospace;
    background: ${accentColors.grey};
    font-size: var(--fs-4);
    border-left: 10px solid ${preBorderColor};
    border-radius: 5px;
    padding: 20px;
    font-weight: 600;
    &::-webkit-scrollbar {
      background-color: #ded7e6;
      height: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background: ${preBorderColor};
      border-top-right-radius: 9px;
    }
  }
  a {
    font-weight: 600;
    border-bottom-color: #eeeff1;
    &:hover {
      border-bottom-color: #642864;
    }
  }
  input[type='file'] {
    width: 100%;
  }
  hr {
    ${hrStyles}
  }
  table {
    font-size: var(--container-fs-body);
    width: 100%;
    border-width: 1px;
    border-color: #eeeff1;
    border-collapse: collapse;
    tr {
      background-color: ${accentColors.grey};
      &:nth-child(even) {
        background-color: transparent;
      }
    }
    td {
      padding: 10px;
      border: 1px solid #eeeff1;
    }
    th {
      padding: 10px;
      text-align: left;
      border: 1px solid ${accentColors.grey};
      font-weight: 700;
      background-color: ${accentColors.grey};
    }
  }
  img {
    display: block;
    & + em {
      display: block;
      margin-top: 12px;
      font-size: var(--fs-5);
      line-height: 2;
      font-style: normal;
      font-weight: normal;
      text-align: center;
      @media screen and (min-width: 768px) {
        margin-top: 20px;
      }
    }
    &.wide {
      width: 100vw;
      max-width: none;
      margin-left: 50%;
      transform: translateX(-50%);
      border-radius: 0;
    }
  }
  blockquote {
    position: relative;
    padding: 12px 0 12px 44px;
    font-size: var(--fs-2);
    font-family: var(--ff-heading);
    line-height: 1.4;
    font-weight: 400;
    font-style: normal;
    p {
      margin-bottom: 0;
    }
    &::before {
      content: '\\201C';
      position: absolute;
      top: -0.06em;
      left: 0;
      font-family: var(--ff-body);
      font-size: 3.5em;
    }
    @media screen and (min-width: 768px) {
      padding: 24px 0 24px var(--bottom-margin-desktop);
      &::before {
        top: 0.02em;
      }
    }
    cite {
      display: inline-block;
      margin-top: 10px;
      font-size: 14px;
      font-weight: 700;
      font-style: normal;
    }
  }
`;
