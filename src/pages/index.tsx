import React from 'react';
import { Link } from 'gatsby'
import { useInfiniteQuery } from '@tanstack/react-query';

import type { HeadFC } from "gatsby"

import Container from '../commons/components/Container';
import Posts from '../commons/components/Posts';
import LayoutTemplate from '../commons/templates/LayoutTemplate';

async function fetchPosts({ pageParam }: {pageParam: number}) {
  const response = await fetch(`./jsons/page${pageParam}.json`);
  const page = await response.json();

  return page;
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
        {
          data?.pages && (
            <Posts>
              {
                data.pages.map((page, pageIndex) => {
                  return page.posts.map((post) => (
                    <Posts.Post key={`${pageIndex}-${post.id}`} excerpt={post.excerpt} link={`/posts${post.slug}`} title={post.title} />
                  ));
                })
              }
            </Posts>
          )
        }
      </Container>
    </LayoutTemplate>
  )
}

export const Head: HeadFC = () => <title>Home Page</title>

export default Index
