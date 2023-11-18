import { useInfiniteQuery } from '@tanstack/react-query';

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
      <Container>
        {/**TODO: 태그 들어갈 영역 */}
        TODO 
      </Container>
    </LayoutTemplate>
  )
}

export const Head: HeadFC = () => <title>Home Page</title>

export default Tags;
