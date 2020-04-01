import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';
import { Section0 } from '../components/_index/Section0/Section0';

export const query = graphql`
  {
    seo: file(relativePath: { eq: "seo/contact.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          src
        }
      }
    }

    hero: file(relativePath: { eq: "_contact/ghost.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
const IndexPage = () => (
  <Layout>
    <SEO
      title="Gatsby Starter AWS | Your Blurb"
      description="Your Gatsby Opinionated AWS Starter Template"
    />
    <Section0 />
  </Layout>
);

export default IndexPage;
