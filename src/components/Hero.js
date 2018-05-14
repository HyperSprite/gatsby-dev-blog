import React from 'react';
import styled from 'styled-components';

import { media } from '../utils/media';

const HeroDiv = styled.div`
  background-size: cover;
  background-image: ${props => props.backgroundImage};
`;

const Title = styled.h1`
  font-size: 1.5rem;
  padding: 1em 2.5em;
  text-align: right;
  color: ${props => props.theme.bg};
  @media ${media.phone} {
    font-size: 1.2rem;
  }
  @media ${media.tablet} {
    font-size: 1.3rem;
  }
`;

const Hero = props => (
  <HeroDiv
    backgroundImage={`url("${props.heroImage.childImageSharp.sizes.src}")`}
    style={{
      maxWidth: props.width,
      maxHeight: props.height,
      height: props.height,
    }}
  >
    <Title>{props.children}</Title>
  </HeroDiv>
);
export default Hero;
