import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { navigate } from '@reach/router';
import { setUser, isLoggedIn } from '../../../utils/auth';
import Error from '../Error';
import { Auth } from 'aws-amplify';
import { H3 } from '../../reusableStyles/typography/Typography';

const Container = styled.div`
  max-width: ${props => props.theme.screenSize.mobileL};
  margin: 0 auto;
`;

const Form = styled.form`
  margin: 2rem 0;
  & input {
    width: 100%;
    padding: 5px;
    padding-left: 10px;
    background: transparent;
    border: none;
    border-radius: 5px;
    border: 2px solid rgba(14, 30, 37, 0.15);
    font-family: Poppins, Roboto;
    font-size: 1.4rem;
    font-weight: 400;
    outline-color: ${props => props.theme.colors.secondary};
    margin-bottom: 1rem;
  }
`;

const Button = styled.button`
  outline: none;
  border: 2px solid black;
  padding: 4px 8px;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.colors.lightgrey};
  }
`;

const TitleContainer = styled.div`
  margin-bottom: 1rem;
`;

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const loginHandler = async e => {
    e.preventDefault();
    try {
      await Auth.signIn(username, password);
      const user = await Auth.currentAuthenticatedUser();
      const userInfo = {
        ...user.attributes,
        username: user.username,
      };
      setUser(userInfo);
      navigate('/app/home');
    } catch (err) {
      setError(err);
    }
  };
  if (isLoggedIn()) navigate('/app/dashboard');

  return (
    <Container>
      <TitleContainer>
        <H3>Sign In</H3>
      </TitleContainer>

      {error && <Error errorMessage={error.message} />}
      <Form onSubmit={loginHandler}>
        <input
          onChange={event => setUsername(event.target.value)}
          placeholder="Username"
          name="username"
          value={username}
          required
        />
        <input
          onChange={event => setPassword(event.target.value)}
          placeholder="Password"
          name="password"
          value={password}
          type="password"
          required
        />
        <Button type="submit">Sign In</Button>
      </Form>
      <Link to="/app/signup">Sign Up</Link>
      <br />
    </Container>
  );
};
