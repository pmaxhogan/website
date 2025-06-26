import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { mdxComponents } from "./src/mdx-components";
import Layout from "./src/components/page-layout";

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={mdxComponents}>{element}</MDXProvider>
);

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
