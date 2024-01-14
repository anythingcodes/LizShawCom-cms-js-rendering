import React from 'react';
import { styled } from 'styled-components';
// import { Island } from '@hubspot/cms-components';
// import PrimaryNav from '../islands/PrimaryNav.jsx?island';
import StyledComponentsRegistry from '../StyledComponentsRegistry';

const Wrapper = styled.header`
  padding: 40px 56px;
`;

const Logo = styled.a`
  font-size: var(--fs-2);
  font-family: var(--ff-heading);
`;

const Header = () => {
  return (
    <StyledComponentsRegistry>
      <Wrapper>
        <Logo href="/">Liz Shaw</Logo>
        {/* <div className="header__wrapper wrapper">
          <div className="header__title">
            <a href="/">LizShaw.com</a>
          </div>
          <Island hydrateOn="load" module={PrimaryNav} />
          <form
            action="/{{ site_settings.content_search_results_page_path }}"
            className="search-form"
          >
            <input
              type="search"
              name="term"
              autoComplete="off"
              placeholder="Enter keywords"
              className="search-input"
            />
            <input type="submit" value="Search" className="search-btn" />
          </form>
        </div> */}
      </Wrapper>
    </StyledComponentsRegistry>
  );
};

export default Header;
