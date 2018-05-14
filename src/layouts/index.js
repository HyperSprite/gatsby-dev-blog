/* eslint no-unused-expressions:0 */

import React from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Link from 'gatsby-link';
import Button from '../components/Button';
import SEO from '../components/SEO';
import config from '../../config/SiteConfig';
import theme from '../../config/Theme';
import { media } from '../utils/media';

injectGlobal`
  ::selection {
    color: ${theme.bg};
    background: ${theme.primary};
  }
  body {
    background: ${theme.bg};
    color: ${theme.default};
    @media ${media.phone} {
      font-size: 14px;
    }
  }
  a {
    color: ${theme.primary};
    text-decoration-color: ${theme.primary};
    transition: all ${theme.transitionTime};
  }
  a:hover {
    color: ${theme.primary};
    text-decoration: none;
  }
  h1, h2, h3, h4 {
    color: ${theme.dark};
    a {
      color: ${theme.dark};
      text-decoration: none;
    }
  }
  blockquote {
    font-style: italic;
    position: relative;
  }

  blockquote:before {
    content: "";
    position: absolute;
    background: ${theme.primary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  label {
    margin-bottom: .5rem;
    color: ${theme.dark};
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .25rem 1rem;
    &:focus {
      outline: none;
    }
  }
`;

const date = new Date();
const year = date.getFullYear();

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 0;
`;

const TemplateWrapper = props => {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <div>
        <SEO />
        {children()}
        <Footer>
          &copy; {year} by {config.siteOwner}. All rights reserved. <br />
          <Link to="/contact">
            <Button>
              <svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z" />
              </svg>
              Contact
            </Button>
          </Link>
        </Footer>;
      </div>
    </ThemeProvider>
  );
};

export default TemplateWrapper;
