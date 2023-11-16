import React, { useEffect} from 'react';
import { graphql } from 'gatsby'
import { useInfiniteQuery } from '@tanstack/react-query';

import type { HeadFC, PageProps } from "gatsby"

import Container from '../commons/components/Container';
import LayoutTemplate from '../commons/templates/LayoutTemplate';

async function fetchPosts({ pageParam }: {pageParam: number}) {
  fetch("./jsons/page1.json")//json파일 읽어오기
  .then((response) => response.json())
  .then((json) => console.log(json));//읽어온 데이터를 json으로 변환
}

function Index() {
  const { data } = useInfiniteQuery({ 
    queryKey: ['posts'],
    queryFn: fetchPosts,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  })

  return (
    <LayoutTemplate>
      <Container>
      :)
      </Container>
    </LayoutTemplate>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: {frontmatter: {date: DESC}}, limit: 100
    ) {
      edges {
        node {
          frontmatter {
            slug
          }
        }
      }
    }
  }
`

export const Head: HeadFC = () => <title>Home Page</title>

export default Index
