import { graphql } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";
import "github-markdown-css";
import "../styles/index.css";

const IndexPage = ({ data }) => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <article className="markdown-body">
        <div
          dangerouslySetInnerHTML={{
            __html: data.allMarkdownRemark.nodes[0].html,
          }}
        ></div>
      </article>
    </>
  );
};

export const query = graphql`
  query IndexPageQuery {
    allMarkdownRemark {
      nodes {
        html
      }
    }
  }
`;

export default IndexPage;
