import React from 'react';
import { Search } from './Search';
import { TeamList } from './TeamList';
import { Section } from '../../../../reusableStyles/sections/Sections';

export const Section1 = () => {
  return (
    <Section>
      <Search />
      <TeamList />
    </Section>
  );
};
