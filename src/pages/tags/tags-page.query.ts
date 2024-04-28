import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetadata = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMdx {
          group(field: { frontmatter: { tags: SELECT } }) {
            tag: fieldValue
            totalCount
          }
        }
      }
    `
  );

  return data;
};
