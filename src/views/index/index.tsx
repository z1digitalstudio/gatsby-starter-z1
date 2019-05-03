import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Starter, { StarterData } from '../../components/starter/Starter';
import { graphql, Link } from 'gatsby';
import { PageContext } from '../../context/page';

export interface IndexData extends StarterData {
  allIndexYaml: {
    nodes: [
      {
        title: string;
        subtitle: string;
        url: string;
      }
    ];
  };
}

const IndexPage = ({ data }: { data: IndexData }) => (
  <PageContext.Provider value={data}>
    <Layout>
      <SEO
        title={data.allIndexYaml.nodes[0].title}
        keywords={[`gatsby`, `application`, `react`]}
      />

      <Starter />

      <Link to="/es/parent/child">Nested page ES</Link>
      <br />

      <Link to="/parent/child">Nested page EN</Link>
      <br />

      <Link to="/">English</Link>
      <br />
      <Link to="/es">Español</Link>
    </Layout>
  </PageContext.Provider>
);

export const query = graphql`
  query($lang: String!) {
    allIndexYaml(filter: { lang: { eq: $lang } }) {
      nodes {
        title
        subtitle
        url
      }
    }
    ...Starter
  }
`;

export default IndexPage;
