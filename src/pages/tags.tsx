import { graphql } from 'gatsby';
import { useInfiniteQuery } from '@tanstack/react-query';
import { css } from '@emotion/react';

import type { HeadFC } from 'gatsby';

import Container from '../commons/components/Container';
import Tags from '../commons/components/Tags';
import Posts from '../commons/components/Posts';
import LayoutTemplate from '../commons/templates/LayoutTemplate';

async function fetchPosts({ pageParam }: { pageParam: number }) {
  const response = await fetch(`../jsons/page${pageParam}.json`);
  const page = await response.json();

  return page;
}

function TagsPage({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) {
  console.log(group, '나와라요');

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
          {group.length <= 0 && <Posts.EmptyPost css={cssProps.center} />}
          {group.length > 0 && (
            <Tags>
              {group.map((tag) => (
                <Tags.LinkTag
                  key={tag.fieldValue}
                  css={cssProps.tag}
                  link={`/tags/${tag.fieldValue}`}
                  tag={`${tag.fieldValue} (${tag.totalCount})`}
                />
              ))}
            </Tags>
          )}
        </Posts>
      </Container>
    </LayoutTemplate>
  );
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
  }),
  tag: css({
    fontSize: 16,
    padding: '8px 16px',
  }),
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { frontmatter: { publish: { eq: true } } }) {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Home Page</title>;

export default TagsPage;