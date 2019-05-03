import React from 'react';
import Z1Logo from '../../assets/z1.svg';
import styles from './Starter.module.scss';
import { graphql } from 'gatsby';
import { usePageContext } from '../../context/page';

export interface StarterData {
  allStarterYaml: {
    nodes: [
      {
        title: string;
      }
    ];
  };
}

function Starter() {
  const page = usePageContext<StarterData>();

  return (
    <div className={styles.container}>
      <Z1Logo className={styles.logo} />

      <h1>{page.allStarterYaml.nodes[0].title}</h1>
    </div>
  );
}

export const query = graphql`
  fragment Starter on Query {
    allStarterYaml(filter: { lang: { eq: $lang } }) {
      nodes {
        title
      }
    }
  }
`;

export default Starter;
