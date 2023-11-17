import React from 'react';
import { graphql } from 'gatsby'
import { css } from '@emotion/react';

import Container from '../../commons/components/Container';
import Tags from '../../commons/components/Tags';
import LayoutTemplate from '../../commons/templates/LayoutTemplate';

import type { HeadFC, PageProps } from 'gatsby';

function Post({ data }: PageProps) {
  return (
    <LayoutTemplate>
      <Container>
        <h1 css={cssProps.postTitle}>{data.markdownRemark.frontmatter.title}</h1>
        <span css={cssProps.postDate}>{data.markdownRemark.frontmatter.date}</span>
        {
          data.markdownRemark.frontmatter.tags && (
            <Tags css={cssProps.postTags}>
              {data.markdownRemark.frontmatter.tags.map((tag) => (
                <Tags.LinkTag key={tag} tag={tag} />
              ))}
            </Tags> 
          )
        }       
        <div css={cssProps.postContent} dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>
      </Container>
    </LayoutTemplate>
  );
};


const cssProps = {
  postTitle: css({
    marginBottom: 38,
    fontSize: 38,
    fontWeight: 800,
    lineHeight: 1.5
  }),
  postDate: css({
    color: 'hsla(var(--palette-gray-60), 100%)',
    fontSize: 14,
  }),
  postTags: css({
    marginTop: 16,

  }),
  postContent: css({
    paddingTop: 56,
    paddingBottom: 28,

    ['h2']: {
      marginTop: 38,
      marginBottom: 28,
      fontSize: 34,
      fontWeight: 700,
      lineHeight: 1.5
    },
    ['h3']: {
      marginTop: 36,
      marginBottom: 28,
      fontSize: 30,
      fontWeight: 700,
      lineHeight: 1.5
    },
    ['h4']: {
      marginTop: 34,
      marginBottom: 28,
      fontSize: 26,
      fontWeight: 700,
      lineHeight: 1.5
    },
    ['h5']: {
      marginTop: 32,
      marginBottom: 28,
      fontSize: 22,
      fontWeight: 700,
      lineHeight: 1.5
    },
    ['h6']: {
      marginTop: 28,
      marginBottom: 28,
      fontSize: 20,
      fontWeight: 600,
      lineHeight: 1.5
    },
    ['p']: {
      fontSize: 17,
      lineHeight: 1.8,
      fontWeight: 400,
      wordBreak: 'break-all',
      wordWrap: 'break-word',
      ['&:not(:last-of-type)']: {
        marginBottom: 28
      }
    },
    ['ul, ol']: {
      marginTop: 28,
      marginBottom: 28,
      paddingLeft: 28,
      fontSize: 17,
      lineHeight: 1.7,
      fontWeight: 400,
      wordBreak: 'keep-all',
      overflowWrap: 'break-word',

      ['li']: {
        marginBottom: 6
      },

      ['ul, ol']: {
        marginTop: 12,
        marginBottom: 12
      },
    },
    ['img']: {
      marginTop: 28,
      marginBottom: 28
    },
    ['a']: {
      position: 'relative',
      color: 'hsla(var(--base-blue), 39%)',
      paddingBottom: `1px`,

      ['&:hover']: {
        borderBottom: `1px solid hsla(var(--base-blue), 39%)`
      }
    },
    ['pre[class*="language-"]']: {
      fontSize: 14,
      marginTop: 28,
      marginBottom: 28
    }
  }),
};

export const query = graphql`
  query ($id: String) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        tags
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Home Page</title>;
export default Post;
