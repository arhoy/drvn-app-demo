import React from 'react';

import styled from '@emotion/styled';
import { Link } from '@reach/router';
import { Signout } from '../../reusableStyles/auth/signout/Signout';

const Container = styled.div`
  margin: 2rem 0;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.black};
  margin-right: 0.5rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  max-width: 30rem;
  margin: 0 auto;
`;

export const AppNav = () => {
  return (
    <Container>
      <Navigation>
        <StyledLink to="/app/login">Login</StyledLink>
        <StyledLink to="/app/signup">Sign Up</StyledLink>
        <Signout />
      </Navigation>
    </Container>
  );
};
