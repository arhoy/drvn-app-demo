import React from 'react';

import styled from '@emotion/styled';
import { FaChartBar, FaCode, FaCodeBranch, FaChessKing } from 'react-icons/fa';

import CirclularNumbers from '../../numbers/CirclularNumbers';

import Blob2 from './blobShapes/BlobShape2';

const Container = styled.div``;

const SubContainer = styled.div`
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
    justify-content: space-between;
    background: ${props => props.theme.colors.white};
    padding: 0.5rem 1rem;
    width: 18rem;
    margin: 1.3rem 0;
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

const ChartBarIcon = styled(FaChartBar)`
  font-size: 2rem;
  margin-left: 1rem;
  color: ${props => props.theme.colors.primary};
`;

const CodeIcon = styled(FaCode)`
  font-size: 2rem;
  margin-left: 1rem;
  color: ${props => props.theme.colors.primary};
`;

const CodeBranchIcon = styled(FaCodeBranch)`
  font-size: 2rem;
  margin-left: 1rem;
  color: ${props => props.theme.colors.primary};
`;

const ChessKingIcon = styled(FaChessKing)`
  font-size: 2rem;
  margin-left: 1rem;
  color: ${props => props.theme.colors.primary};
`;

const NetlifyBlob2 = () => {
  return (
    <Container>
      <TitleContainer>
        <CirclularNumbers number={2} />
        <Title> Add you CP Stats</Title>
      </TitleContainer>

      <SubContainer>
        <UL>
          <li>
            Code It <CodeIcon />
          </li>

          <li>
            Analyze <ChartBarIcon />
          </li>

          <li>
            Deploy <CodeBranchIcon />
          </li>

          <li>
            Conquer <ChessKingIcon />
          </li>
        </UL>
        <Blob2 />
      </SubContainer>
    </Container>
  );
};

export default NetlifyBlob2;
