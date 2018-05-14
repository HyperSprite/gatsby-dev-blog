import React from 'react';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';

const SEO = props => {
  const { postNode, postPath, postSEO } = props;
  let title;
  let description;
  let image;
  let postURL;
  const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;
  if (postSEO) {
    const postMeta = postNode.frontmatter;
    title = postMeta.title; // eslint-disable-line prefer-destructuring
    description = postNode.excerpt;
    image = config.siteBanner;
    postURL = config.siteUrl + realPrefix + postPath;
  } else {
    title = config.siteTitle;
    description = config.siteDescription;
    image = config.siteBanner;
  }
  image = config.siteUrl + realPrefix + image;
  const blogURL = config.siteUrl + config.pathPrefix;
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: blogURL,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    },
  ];
  if (postSEO) {
    schemaOrgJSONLD.push([
      {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': postURL,
              name: title,
              image,
            },
          },
        ],
      },
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url: blogURL,
        name: title,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
        headline: title,
        image: {
          '@type': 'ImageObject',
          url: image,
        },
        description,
      },
    ]);
  }
  return (
    <Helmet>
      <title>{config.siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="minimal, blog, layout" />
      <meta name="image" content={image} />
      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
      <meta property="og:locale" content="de_DE" />
      <meta property="og:site_name" content={config.ogSiteName} />
      <meta property="og:url" content={postSEO ? postURL : blogURL} />
      {postSEO ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="fb:app_id" content={config.siteFBAppID ? config.siteFBAppID : ''} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.userTwitter ? config.userTwitter : ''} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={config.siteUrl} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color={config.themeColor} />
      <meta name="msapplication-TileColor" content={config.themeColor} />
      <meta name="theme-color" content={config.themeColor} />
    </Helmet>
  );
};

export default SEO;
