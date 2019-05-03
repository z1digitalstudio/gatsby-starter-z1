import React, { useContext } from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Starter, { StarterData } from '../../components/starter/Starter';
import { graphql } from 'gatsby';
import { usePageContext } from '../../context/page';
import { Link as GatsbyLink } from 'gatsby';
import Link from '../../components/link/Link';

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

const IndexPage = () => {
  const { data, lang } = usePageContext<IndexData>();

  return (
    <Layout>
      <SEO
        title={data.allIndexYaml.nodes[0].title}
        keywords={[`gatsby`, `application`, `react`]}
      />

      <Starter />

      <Link to="/parent/child">Nested page</Link>
      <br />

      <GatsbyLink to="/">English</GatsbyLink>
      <br />
      <GatsbyLink to="/es">Español</GatsbyLink>
    </Layout>
  );
};

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
