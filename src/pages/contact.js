import React from 'react';
import { graphql } from 'gatsby';
import { Section } from '../components/reusableStyles/sections/Sections';
import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';
export const query = graphql`
  {
    seo: file(relativePath: { eq: "seo/contact.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          src
        }
      }
    }
  }
`;

const ContactPage = () => {
  return (
    <Layout>
      <SEO
        title=" Blog Page | Gatsby Starter AWS"
        description="Your Gatsby Opinionated AWS Starter Template"
      />

      <Section>This is the contact page | coming Soon</Section>
    </Layout>
  );
};

export default ContactPage;
