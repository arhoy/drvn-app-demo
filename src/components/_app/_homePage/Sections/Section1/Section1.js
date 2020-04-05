import React from 'react';
import styled from '@emotion/styled';
import { Search } from './Search';
import { TeamList } from './TeamList';

const StyledSection = styled.div`
  padding: 0;
  margin: 0;
  max-width: 100rem;
  margin: 0 auto;
`;

export const Section1 = () => {
  return (
    <StyledSection>
      <Search />
      <TeamList />
    </StyledSection>
  );
};
