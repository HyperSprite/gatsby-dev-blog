import React from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

import { media } from '../utils/media';

const Wrapper = styled.header`
  background: linear-gradient(
    45deg,
    ${props => darken(0.1, props.theme.primary)},
    ${props => lighten(0.1, props.theme.primary)}
  );
  grid-column: 1 / -1;
  margin-left: -1rem;
  margin-right: -1rem;
  padding: 0.5rem 0.5rem 5rem 0.5rem;
  box-shadow: inset 0px -10px 30px 0px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 1.5rem;
  padding: 0.5em 2em;
  text-align: right;
  color: ${props => props.theme.bg};
  a {
    color: ${props => props.theme.bg};
    text-decoration: none;
    &:hover {
      opacity: 0.85;
      color: ${props => props.theme.bg};
    }
  }
  @media ${media.phone} {
    font-size: 1.2rem;
  }
  @media ${media.tablet} {
    font-size: 1.3rem;
  }
`;

const Header = props => (
  <Wrapper>
    <Title>{props.children}</Title>
  </Wrapper>
);

export default Header;
