import React from 'react';
import BaseSplash from '../components/BaseSplash';

function TeamMemberHome({ navigation }) {
  return (
    <BaseSplash navigation={navigation} title = "Auth and Appointments" link = "auth_account" sublink="member"/>
  );
}

export default TeamMemberHome;