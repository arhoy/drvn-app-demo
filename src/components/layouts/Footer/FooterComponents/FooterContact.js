import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  margin-right: 2rem;
`;

const LinkHeaders = styled.h6`
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 700;
`;

const TelephoneLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

const LinkDescription = styled.p`
  color: inherit;
`;

export const FooterContact = () => {
  return (
    <Container>
      <LinkHeaders>Contact Us</LinkHeaders>
      <LinkDescription>aquasar2020@gmail.com</LinkDescription>
      <TelephoneLink href="tel:587-7725-5536">587.772.5536</TelephoneLink>
    </Container>
  );
};
