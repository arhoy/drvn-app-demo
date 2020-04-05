import React from 'react';
import { Link } from 'gatsby';
import { getCurrentUser } from '../../../utils/auth';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { Section } from '../../reusableStyles/sections/Sections';

export const ProfilePage = () => {
  const user = getCurrentUser();
  console.log(user);
  return (
    <DashboardLayout>
      <Section>
        <h1>Profile Details</h1>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone_number}</p>
        <p>Username: {user.username}</p>
        <Link to="/app/home">Home</Link>
      </Section>
    </DashboardLayout>
  );
};
