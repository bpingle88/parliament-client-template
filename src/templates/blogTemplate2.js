import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPosts = props => {
  const {
    data: {
      allFile: { edges },
    },
  } = props

  const {
    node: {
      childMarkdownRemark: { html, tableOfContents },
    },
  } = edges.find(({ node: { id } }) => id === props.pageContext.id)

  return (
    <Layout>
      <SEO title="Home" />
      <div dangerouslySetInnerHTML={{ __html: tableOfContents }}></div>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  )
}

export default BlogPosts

export const query = graphql`
  query BlogPostsQuery {
    allFile {
      edges {
        node {
          id
          extension
          dir
          modifiedTime
          name
          childMarkdownRemark {
            html
            tableOfContents
          }
        }
      }
    }
  }
`