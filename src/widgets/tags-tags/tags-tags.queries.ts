import { useStaticQuery, graphql } from 'gatsby';

export const useAllTagsQuery = () => {
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
