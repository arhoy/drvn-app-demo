import React from 'react';
import styled from '@emotion/styled';
import { navigate } from '@reach/router';
import { Link } from 'gatsby';
import { Auth } from 'aws-amplify';
import Error from '../Error';
import { H3 } from '../../reusableStyles/typography/Typography';
import { stringContainsMessage } from '../../../utils/stringContains';

const initialState = {
  username: ``,
  password: ``,
  email: '',
  phone_number: '',
  authCode: '',
  stage: 0,
  error: '',
  signupSuccess: false,
};

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

class SignUp extends React.Component {
  state = initialState;

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  signUpHandler = async e => {
    e.preventDefault();
    const { username, password, email, phone_number } = this.state;
    try {
      await Auth.signUp({
        username,
        password,
        attributes: { email, phone_number },
      });
      this.setState({ stage: 1 });
    } catch (err) {
      this.setState({ error: err });
      console.log('error signing up...', err);
    }
  };

  confirmSignUp = async e => {
    e.preventDefault();
    const { username, authCode } = this.state;
    try {
      await Auth.confirmSignUp(username, authCode);
      this.setState({ signupSuccess: true });

      navigate('/app/login');
    } catch (err) {
      this.setState({ error: err });
      console.log('error confirming signing up...', err);
    }
  };

  render() {
    return (
      <Container>
        <TitleContainer>
          <H3>Sign Up</H3>
        </TitleContainer>

        {this.state.stage === 0 && (
          <Form onSubmit={this.signUpHandler}>
            {this.state.error && (
              <Error
                errorMessage={
                  stringContainsMessage(this.state.error.message, 'phone')
                    ? 'Phone number format must be +16045558888'
                    : this.state.error.message
                }
              />
            )}

            <input
              onChange={this.handleUpdate}
              placeholder="Username"
              name="username"
              value={this.state.username}
            />
            <input
              onChange={this.handleUpdate}
              placeholder="Password"
              name="password"
              value={this.state.password}
              type="password"
            />
            <input
              onChange={this.handleUpdate}
              placeholder="Email"
              name="email"
              value={this.state.email}
            />
            <input
              onChange={this.handleUpdate}
              placeholder="+15095551212"
              name="phone_number"
              value={this.state.phone_number}
            />
            <Button type="submit">Sign Up</Button>
          </Form>
        )}
        {this.state.stage === 1 && (
          <Form onSubmit={this.confirmSignUp}>
            <p>Verification code sent to email</p>
            <input
              onChange={this.handleUpdate}
              placeholder="Authorization Code"
              name="authCode"
              value={this.state.authCode}
            />

            <Button type="submit">Confirm Sign Up</Button>
            {this.signupSuccess && <p>Thank you for Signing Up</p>}
          </Form>
        )}
        <Link to="/app/login">Sign In</Link>
      </Container>
    );
  }
}

export default SignUp;
