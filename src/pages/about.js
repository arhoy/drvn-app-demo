import React from 'react';
import { graphql } from 'gatsby';
import { Section } from '../components/reusableStyles/sections/Sections';
import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';
export const query = graphql`
  {
    seo: file(relativePath: { eq: "seo/about.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          src
        }
      }
    }
  }
`;

const AboutPage = () => {
  return (
    <Layout>
      <SEO
        title=" About Page | Gatsby Starter AWS"
        description="Your Gatsby Opinionated AWS Starter Template"
      />

      <Section>This is the about page | Coming Soon</Section>
    </Layout>
  );
};

export default AboutPage;
