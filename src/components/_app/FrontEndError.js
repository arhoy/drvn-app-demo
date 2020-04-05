import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  margin-bottom: 2rem;
  background: #ffdbdb;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  color: #570404;
  overflow-wrap: break-word;
`;

export const FrontEndError = ({ message }) => {
  return <Container>{message}</Container>;
};
