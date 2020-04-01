import React from 'react';
import { Section } from '../components/reusableStyles/sections/Sections';
import Layout from '../components/layouts/Layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <Section>
        Oops, looks like we hit a 404. This page currently does not exist.
        Spoooky.
      </Section>
    </Layout>
  );
};

export default NotFoundPage;
