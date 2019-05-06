import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Box, Flex } from "rebass"
import {
  maxWidth,
  MaxWidthProps,
  minHeight,
  MinHeightProps,
} from "styled-system"
import Header from "../components/Header"
import styled from "styled-components"

const PageContent = styled(Box)<MaxWidthProps>`
  ${maxWidth};
`

const PageHeight = styled(Flex)<MinHeightProps>`
  ${minHeight}
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <PageHeight minHeight={[null, "100vh"]} flexDirection={["column", "row"]}>
        <Header
          width={["100%", "360px"]} // 100% in mobile, 360px in desktop
          // height={[200, "100%"]}
          flex="0 0 auto"
          siteTitle={data.site.siteMetadata.title}
        />
        <PageContent alignSelf="center" width={[1, 0.75, 0.6]} maxWidth="720px">
          <Box p="0px 1.0875rem 1.45rem">
            <main>{children}</main>
          </Box>
        </PageContent>
        <Box py={2} px={[1, 2, 5]} margin="auto 0 0 0">
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </Box>
      </PageHeight>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
