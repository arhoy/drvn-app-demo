import React from 'react';

import styled from '@emotion/styled';

import blobshape from '../../../../../images/svg/blob-shape-3.svg';
import CirclularNumbers from '../../numbers/CirclularNumbers';
import Blob3 from './blobShapes/BlobShap3';

const Container = styled.div``;

const SubContainer = styled.div`
  z-index: 0;
  background: url(${blobshape}) no-repeat center;
  width: 30rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const CodeBlob = styled.div`
  border-radius: 1rem;
  & ul {
    box-shadow: 5px 5px 25px rgba(118, 118, 118, 0.15);
    width: 25rem;
    padding: 0.5rem;
    display: flex;
    list-style: none;
    flex-direction: column;
    justify-content: center;
  }

  & li {
    margin: 2px;
    padding: 0.5rem 1rem;
    background: ${props => props.theme.colors.whiteTrans9};
    color: ${props => props.theme.colors.darkGrey};
    border: 1px dashed ${props => props.theme.colors.grey};
    font-size: 1.3rem;
  }
`;

const NetlifyBlob3 = () => {
  return (
    <Container>
      <TitleContainer>
        <CirclularNumbers number={3} />
        <Title> Deploy Your Unit</Title>
      </TitleContainer>

      <SubContainer>
        <CodeBlob>
          <ul>
            <li> Preparing preprocessor</li>
            <li> Preparing core processor</li>
            <li> Gathering all data </li>
            <li> Compressing files into enginex </li>
            <li> Optimizing data and deploying </li>
          </ul>
        </CodeBlob>
        <Blob3 />
      </SubContainer>
    </Container>
  );
};

export default NetlifyBlob3;
