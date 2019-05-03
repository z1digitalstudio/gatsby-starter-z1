import React from 'react';
import Layout from '../../../components/layout';
import SEO from '../../../components/seo';
import Starter, { StarterData } from '../../../components/starter/Starter';
import { graphql, Link } from 'gatsby';
import { PageContext } from '../../../context/page';

export interface NestedData {
  allChildYaml: {
    nodes: [
      {
        title: string;
      }
    ];
  };
}

const NestedPage = ({ data }: { data: NestedData }) => (
  <PageContext.Provider value={data}>
    <Layout>
      <SEO
        title={data.allChildYaml.nodes[0].title}
        keywords={[`gatsby`, `application`, `react`]}
      />

      <h1>{data.allChildYaml.nodes[0].title}</h1>
    </Layout>
  </PageContext.Provider>
);

export const query = graphql`
  query($lang: String!) {
    allChildYaml(filter: { lang: { eq: $lang } }) {
      nodes {
        title
      }
    }
  }
`;

export default NestedPage;
