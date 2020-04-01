import React from 'react';
import styled from '@emotion/styled';

import footerLinks from './FooterLinks';
import NoStyleLink from '../../../Links/NoStyleLink';

const Container = styled.div`
  min-width: 20rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const LinkHeaders = styled.h6`
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 700;
`;

const CustomLinks = styled(NoStyleLink)`
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;

export const FooterNavigation = () => {
  return (
    <Container>
      <LinkHeaders>Navigation</LinkHeaders>
      {footerLinks &&
        footerLinks.map((link, i) => (
          <CustomLinks key={i} to={`/${link.slug}`}>
            {link.title}
          </CustomLinks>
        ))}
      <CustomLinks to="/privacy-policy">Privacy Policy</CustomLinks>
      <CustomLinks to="/terms-and-conditions">Terms & Conditions</CustomLinks>
    </Container>
  );
};
