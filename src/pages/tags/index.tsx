import { useInfiniteQuery } from '@tanstack/react-query';
import { css } from '@emotion/react';

import type { HeadFC } from "gatsby"

import Container from '../../commons/components/Container';
import Posts from '../../commons/components/Posts';
import LayoutTemplate from '../../commons/templates/LayoutTemplate';

async function fetchPosts({ pageParam }: {pageParam: number}) {
  const response = await fetch(`../jsons/page${pageParam}.json`);
  const page = await response.json();

  return page;
}

function Tags() {
  // const { data } = useInfiniteQuery({ 
  //   queryKey: ['posts'],
  //   queryFn: fetchPosts,
  //   initialPageParam: 1,
  //   getNextPageParam: (lastPage) => lastPage.nextCursor,
  // })

  return (
    <LayoutTemplate>
      <Container css={cssProps.root}>
        <Posts>
          <Posts.EmptyPost css={cssProps.center} />
        </Posts>
      </Container>
    </LayoutTemplate>
  )
}

const cssProps = {
  root: css({
    position: 'relative',
  }),
  center: css({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  })
};


export const Head: HeadFC = () => <title>Home Page</title>

export default Tags;
