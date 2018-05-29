import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styled from 'styled-components';
import kebabCase from 'lodash/kebabCase';
import SEO from '../components/SEO';
import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import Subline from '../components/Subline';
import { media } from '../utils/media';

import config from '../../config/SiteConfig';
import '../utils/prismjs-theme.css';

const Content = styled.article`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.bg};
  margin-top: -3rem;
  @media ${media.tablet} {
    padding: 3rem 3rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
`;

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const PostContent = styled.div`
  margin-top: 4rem;
`;

const FooterNav = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Post = props => {
  const { slug, prev, next } = props.pathContext;
  const postNode = props.data.markdownRemark;
  const post = postNode.frontmatter;
  return (
    <Wrapper>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <Helmet title={`${post.title} | ${config.siteTitle}`} />
      <Header>
        <Link to="/">{config.siteTitle}</Link>
      </Header>

      <Content>
        {post.cover && <Img sizes={post.cover.childImageSharp.sizes} style={{ zIndex: 99 }} />}
        <Title>{post.title}</Title>
        <Subline>
          {post.date} &mdash; {postNode.timeToRead} Min Read &mdash; In{' '}
          <Link to={`/categories/${kebabCase(post.category)}`}>{post.category}</Link>
        </Subline>
        <PostContent dangerouslySetInnerHTML={{ __html: postNode.html }} />
        <FooterNav>
          {prev ? <Link to={prev.fields.slug}>{` < ${prev.frontmatter.title} `}</Link> : <div />}
          {next ? <Link to={next.fields.slug}>{` ${next.frontmatter.title} > `}</Link> : <div />}
        </FooterNav>
      </Content>
    </Wrapper>
  );
};

export default Post;

/* eslint no-undef: off */
export const postQuery = graphql`
  query postBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        category
        cover {
          publicURL
          childImageSharp {
            sizes(maxWidth: 1240) {
              ...GatsbyImageSharpSizes_noBase64
            }
          }
        }
      }
      timeToRead
    }
  }
`;
