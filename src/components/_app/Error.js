//https://github.com/wesbos/dump
import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  margin-bottom: 2rem;
  background: #ffdbdb;
  color: #570404;
  display: inline-block;
  padding: 4px;
`;
const Error = props => (
  <Container>
    {Object.entries(props).map(([err, val], i) => (
      <pre key={i} err={err}>
        <strong>{err}: </strong>
        {JSON.stringify(val, '', ' ')}
        <br />
      </pre>
    ))}
  </Container>
);

export default Error;
