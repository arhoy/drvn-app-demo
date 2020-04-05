import React from 'react';
import { Router } from '@reach/router';

// AWS
import Amplify from 'aws-amplify';
import config from '../aws-exports';

// Layouts
import Layout from '../components/layouts/Layout';

// auth
import { Login } from '../components/_app/_auth/_signin/Login';
import SignUp from '../components/_app/_auth/_signup/SignUp';

// components
import { ProfilePage } from '../components/_app/_profilePage/ProfilePage';
import { HomePage } from '../components/_app/_homePage/HomePage';

// Utils

import PrivateRoute from '../components/_app/PrivateRoute';

// Styling

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

Amplify.configure(config);

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/home" component={HomePage} />
      <PrivateRoute path="/app/profile" component={ProfilePage} />
      <Login path="/app/login" />
      <SignUp path="/app/signup" />
    </Router>
  </Layout>
);

export default App;
