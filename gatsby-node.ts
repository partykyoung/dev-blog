import path from "path";
import fs from "fs";

import { createFilePath } from "gatsby-source-filesystem";

function onCreateNode({ node, getNode, actions }) {
  const { createNodeField } = actions;

  if (node.internal.mediaType === "text/mdx") {
    const slug = createFilePath({ node, getNode, basePath: "posts" });

    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
}

export { onCreateNode };
