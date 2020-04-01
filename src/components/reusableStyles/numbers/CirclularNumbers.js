import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  background: ${props => props.theme.colors.darkgrey};
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  color: ${props => props.theme.colors.white};
  font-weight: bold;
`;

const CirclularNumbers = ({ number }) => {
  return <Container>{number}</Container>;
};
export default CirclularNumbers;
