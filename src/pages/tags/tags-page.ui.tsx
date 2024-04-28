import { graphql } from 'gatsby';

function TagsPage({ data }) {
  console.log(data);

  return <div>태그 페이지에용 됐냐????? 나이스ㅡㅡㅡㅡ 됐냐?? </div>;
}

export const query = graphql`
  query ($tag: String) {
    allMdx(filter: { frontmatter: { tags: { in: [$tag] } } }) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

export default TagsPage;
