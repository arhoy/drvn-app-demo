//https://github.com/wesbos/dump
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
const Error = props => (
  <Container>
    {Object.entries(props).map(([err, val], i) => (
      <div key={i} err={err}>
        <strong>{err}: </strong>
        {JSON.stringify(val, '', ' ')}
        <br />
      </div>
    ))}
  </Container>
);

export default Error;
