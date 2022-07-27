import React from 'react';
import LandingPage from './LandingPage';

export default {
  component: LandingPage,
  title: 'LandingPage',
};

const Template = (args) => (
 
  <LandingPage {...args} />
);

export const NotAuthenticated = Template.bind({});

export const Authenticated = Template.bind({});
Authenticated.parameters = {
  auth0: {
    isLoading: false,
    isAuthenticated: true,
    user: {
      name: 'ClubQ',
    },
  },
};