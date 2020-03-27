import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import SEO from '../components/seo';

/*
  This is used in blog posts. The index page can be found at src/pages/blog.js
*/

class BlogPost extends React.Component {
  render() {

  const post = get(this.props, 'data.contentfulBlogPost')
  const siteTitle = get(this.props, 'data.site.siteMetadata.title')

  return (
    <Layout>
      <SEO title={post.title} />
      <Helmet title={`${post.title} | ${siteTitle}`} />
      <div className="usa-layout-docs usa-section">
        <div className="grid-container">
          <div className="grid-row grid-gap">
            <div className="usa-layout-docs__main desktop:grid-col-9 usa-prose">
              <h1 className="title">{post.title}</h1>
              <div className="text-base margin-bottom-2">
                <div className="margin-top-neg-105">
                  By <span className="text-bold">{post.author}</span> ·{' '}
                  {post.publishDate}
                </div>
                <span dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default BlogPost;
