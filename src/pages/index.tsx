import React from 'react';
import { graphql } from 'gatsby'
import type { HeadFC, PageProps } from "gatsby"

import Container from '../commons/components/Container';
import LayoutTemplate from '../commons/templates/LayoutTemplate';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <LayoutTemplate>
      <Container>
      
      </Container>
    </LayoutTemplate>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
          }
        }
      }
    }
  }
`



export const Head: HeadFC = () => <title>Home Page</title>

export default IndexPage
