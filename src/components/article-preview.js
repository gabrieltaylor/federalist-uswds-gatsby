import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default ({ article }) => (
      <div
    key={article.title}
    className="padding-bottom-5 margin-top-4 usa-prose border-bottom-05 border-base-lightest"
  >
    <h3 className="title">
      <Link className="usa-link text-no-underline" to={`/blog/${article.slug}`}>
        {article.title}
      </Link>
    </h3>
    <div className="text-base margin-bottom-2">
      <div className="margin-top-neg-105">
        By <span className="text-bold">{article.author}</span> ·{' '}
        {article.publishDate}
      </div>
    </div>
    {/*
      We default to using post.html, but you can also use post.excerpt.
      If you use excerpt then you have to make sure the content is on each
      post header
    */}
    <div
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
  </div>
)
