import React from 'react';
import styled from '@emotion/styled';
import { ButtonSweepToRight } from '../../buttons/Button';
import Image from 'gatsby-image';
import NoStyleLink from '../../../Links/NoStyleLink';

const Container = styled.div`
  background: ${props => props.theme.colors.white};
  border-radius: 1rem;
  box-shadow: 5px 5px 25px rgba(118, 118, 118, 0.15);
  display: grid;
  grid-template-columns: 12fr 5fr;
  grid-gap: 1rem;
  max-width: 100rem;
  margin: 0 auto;
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    grid-template-columns: 1fr;
  }
`;

const ContentContainer = styled.div`
  padding: 2rem;
  height: min-content;
`;

const PictureContainer = styled.div`
  clip-path: polygon(0 0, 100% 0, 100% 100%, 28% 100%);
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    display: none;
  }
`;

const CardImage = styled(Image)`
  width: 100%;
  height: 100%;
  over-flow: hidden;
  object-fit: cover;
  border-radius: 1rem;
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  & h4 {
    color: ${props => props.theme.colors.white};
    font-weight: bold;
    margin: 2rem;
  }
`;

const Title = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h4`
  color: ${props => props.theme.colors.grey};
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const Blurb = styled.p`
  font-weight: 300;
  color: ${props => props.theme.colors.grey};
  width: 90%;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const Link = styled(NoStyleLink)``;

const Button = styled(ButtonSweepToRight)`
  margin-top: 1rem;
  color: ${props => props.theme.colors.white};
`;

const NetlifyCard2 = ({ title, subtitle, blurb, link, linkURL, picture }) => {
  return (
    <Container>
      <ContentContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Blurb>{blurb}</Blurb>
        <Link to={linkURL}>
          <Button>{link}</Button>
        </Link>
      </ContentContainer>
      <PictureContainer>
        {picture && <CardImage fluid={picture}></CardImage>}
      </PictureContainer>
    </Container>
  );
};

export default NetlifyCard2;
