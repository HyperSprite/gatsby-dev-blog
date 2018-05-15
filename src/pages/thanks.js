import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Wrapper from '../components/Wrapper';
import Header from '../components/Header';

import config from '../../config/SiteConfig';
import { media } from '../utils/media';

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem 4rem;
  margin-top: 1em;
  @media ${media.tablet} {
    padding: 3rem 2rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
  overflow: hidden;
`;

const Thanks = () => (
  <Wrapper>
    <Helmet title={`Contact | ${config.siteTitle}`} />
    <Header>
      <Link to="/">{config.siteTitle}</Link>
    </Header>
    <Content>
      <h1>Thank you!</h1>
      <p>{config.contactThanks}</p>
    </Content>
  </Wrapper>
);

export default Thanks;
