import React from 'react';
import styled from '@emotion/styled';
import socialIcons from '../../../../constants/socialIcons';

const Container = styled.div`
  margin-right: 2rem;
`;

const LinkContainers = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
`;

const LinkHeaders = styled.h6`
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 700;
`;

const SocialIconContainer = styled.div``;

const SocialIcon = styled.a`
  color: inherit;
  font-size: 3rem;
  margin-right: 1rem;
  opacity: 0.6;
  transition: all 0.45s ease-in;
  &:hover {
    opacity: 1;
  }
`;

export const FooterFollow = () => {
  return (
    <Container>
      <LinkContainers>
        <LinkHeaders>Follow Us</LinkHeaders>
        <SocialIconContainer>
          {socialIcons.map(icon => (
            <SocialIcon
              key={icon.url}
              href={icon.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon.icon}
            </SocialIcon>
          ))}
        </SocialIconContainer>
      </LinkContainers>
    </Container>
  );
};
