import React from 'react';
import styled from '@emotion/styled';
import { Section } from '../../reusableStyles/sections/Sections';
import { H1 } from '../../reusableStyles/typography/Typography';
import NoStyleLink from '../../Links/NoStyleLink';

const LinkContainer = styled.div``;

const Link = styled(NoStyleLink)`
  &:hover {
    background: linear-gradient(
      0deg,
      ${props => props.theme.colors.secondaryVeryLight} 50%,
      transparent 50%
    );
  }
`;

export const Section0 = () => {
  return (
    <div>
      <Section>
        <H1>DEMO 4 DRVN</H1>
        <LinkContainer>
          <Link to="/app/home"> View Your Dashboard</Link>
        </LinkContainer>
      </Section>
    </div>
  );
};
