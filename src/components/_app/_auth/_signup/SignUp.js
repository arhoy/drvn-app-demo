import React from 'react';
import styled from '@emotion/styled';
import { navigate } from '@reach/router';
import { Link } from 'gatsby';
import { Auth } from 'aws-amplify';
import Error from '../../Error';
import { H3 } from '../../../reusableStyles/typography/Typography';
import { stringContainsMessage } from '../../../../utils/stringContains';
import { FrontEndError } from '../../FrontEndError';

const initialState = {
  username: ``,
  password: ``,
  email: '',
  phone_number: '',
  area_code: '+1',
  role_type: '',
  authCode: '',
  stage: 0,
  frontEndError: '',
  error: '',
  signupSuccess: false,
};

const Container = styled.div`
  max-width: ${props => props.theme.screenSize.mobileL};
  margin: 0 auto;
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormField = styled.div`
  margin-bottom: 1rem;
  & input,
  & select {
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
    &.area_code {
      width: 70px;
      margin-right: 1rem;
    }
  }
`;

const PhoneContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  margin-bottom: 1rem;
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
      frontEndError: '',
    });
  };

  signUpHandler = async e => {
    e.preventDefault();
    const {
      username,
      password,
      email,
      phone_number,
      area_code,
      role_type,
    } = this.state;

    // front end validation
    if (phone_number.length !== 10) {
      this.setState({ frontEndError: 'Phone Number Not Valid' });
      console.log('invalid phne number ', this.state.frontEndError);
      return;
    }

    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          phone_number: area_code + phone_number,
          'custom:role_type': role_type,
        },
      });
      this.setState({ stage: 1 });
    } catch (err) {
      this.setState({ error: err });
      console.error('error signing up...', err);
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
      console.error('error confirming signing up...', err);
    }
  };

  render() {
    console.log('errir', this.state.role_type);
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
                    ? 'Phone number format must be 6045558888'
                    : this.state.error.message
                }
              />
            )}

            {this.state.frontEndError !== '' && (
              <FrontEndError message={this.state.frontEndError} />
            )}

            <FormField>
              <input
                onChange={this.handleUpdate}
                placeholder="Username"
                name="username"
                value={this.state.username}
              />
            </FormField>

            <FormField>
              <input
                onChange={this.handleUpdate}
                placeholder="Password"
                name="password"
                value={this.state.password}
                type="password"
              />
            </FormField>

            <FormField>
              <input
                onChange={this.handleUpdate}
                placeholder="Email"
                name="email"
                value={this.state.email}
              />
            </FormField>

            <FormField>
              <PhoneContainer>
                <select className="area_code">
                  <option className="disabled" value="+1">
                    +1
                  </option>
                </select>
                <input
                  className="phone"
                  onChange={this.handleUpdate}
                  placeholder="5095551212"
                  name="phone_number"
                  value={this.state.phone_number}
                />
              </PhoneContainer>
            </FormField>

            <FormField>
              {/* for user type */}
              <label htmlFor="tags">
                Select Role
                <select
                  name="role_type"
                  onChange={this.handleUpdate}
                  value={this.state.role_type}
                >
                  <option key="0" className="disabled" value="">
                    Select one of the following roles
                  </option>
                  <option key="user" value="user">
                    User
                  </option>
                  <option key="developer" value="developer">
                    Developer
                  </option>
                </select>
              </label>
            </FormField>

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
