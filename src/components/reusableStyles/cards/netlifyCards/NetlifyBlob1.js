import React from 'react';
import styled from '@emotion/styled';

import CirclularNumbers from '../../numbers/CirclularNumbers';

import { FaGithub, FaBitbucket, FaGitlab } from 'react-icons/fa';
import Blob1 from './blobShapes/BlobShape1';

const Container = styled.div``;

const SubContainer = styled.div`
  position: relative;
  z-index: 0;
  width: 30rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UL = styled.ul`
  list-style: none;

  & li {
    display: flex;
    align-items: center;
    background: ${props => props.theme.colors.white};
    padding: 0.5rem 1rem;
    width: 18rem;
    margin: 2rem 0;
    box-shadow: 5px 5px 25px rgba(118, 118, 118, 0.15);
    border: 1px solid ${props => props.theme.colors.lightgrey2};
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h4`
  font-size: 2rem;
  margin: 1rem 0;
`;

const GitHubIcon = styled(FaGithub)`
  font-size: 2rem;
  margin-right: 1rem;
  color: ${props => props.theme.colors.primary};
`;

const BitbucketIcon = styled(FaBitbucket)`
  font-size: 2rem;
  margin-right: 1rem;
  color: ${props => props.theme.colors.primary};
`;

const GitlabIcon = styled(FaGitlab)`
  font-size: 2rem;
  margin-right: 1rem;
  color: ${props => props.theme.colors.primary};
`;

const NetlifyBlob1 = () => {
  return (
    <Container>
      <TitleContainer>
        <CirclularNumbers number={1} />
        <Title> Connect Your depository</Title>
      </TitleContainer>

      <SubContainer>
        <UL>
          <li>
            <GitHubIcon /> GitHubby
          </li>
          <li>
            <BitbucketIcon /> MicroBucket
          </li>
          <li>
            <GitlabIcon /> GitLove
          </li>
        </UL>
        <Blob1 />
      </SubContainer>
    </Container>
  );
};

export default NetlifyBlob1;
