import React from 'react';
import get from 'lodash/get';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Tagline from '../components/tagline';
import Highlights from '../components/highlights';

class IndexPage extends React.Component {
  renderSwitch(block) {
    switch(block.__typename) {
      case 'ContentfulHeroBannerBlock':
        return <Hero block={block} />;
      case 'ContentfulTaglineBlock':
        return <Tagline block={block} />;
      case 'ContentfulHighlightsBlock':
        return <Highlights block={block} />;
      default:
        return <Hero/>;
    }
  }

  render() {
    const template = get(this.props, 'data.contentfulCustomTemplate')

    return (
    <Layout>
      <SEO title="Home" />
      {template.blocks.map((block) => {
        return this.renderSwitch(block)
      })}
    </Layout>
    );
  };
};

export const pageQuery = graphql`
  query CustomTemplateBySlug {
    contentfulCustomTemplate(slug: { eq: "homepage"}) {
      blocks {
        ... on ContentfulHeroBannerBlock {
          __typename
          components {
            ... on ContentfulHeroBannerComponent {
              callToAction
              link
              subtitle
              title
              backgroundImage {
                file {
                  url
                }
              }
            }
          }
        }
        ... on ContentfulTaglineBlock {
          __typename
          components {
            ... on ContentfulTaglineComponent {
              title
              description {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
        ... on ContentfulHighlightsBlock {
          __typename
          components {
            ... on ContentfulHighlightComponent {
              title
              description {
                childMarkdownRemark {
                  html
                }
              }
              image {
                file {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage;
