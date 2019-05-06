import React from "react"
import { Link, graphql } from "gatsby"
import { Box, Text } from "rebass"
import Layout from "../layouts/SiteLayout"
import Image from "../components/Image"
import SEO from "../components/SEO"

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            collectionName
            description
            title
            date(formatString: "MMMM DD, YYYY")
            rawDate: date(formatString: "X")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
