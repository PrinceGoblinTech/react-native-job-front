import React from 'react';
import BaseSplash from '../../components/BaseSplash';

function OwnerHome({ navigation }) {
  return (
    <BaseSplash navigation={navigation} title = "Authentications" link = "auth_account" sublink="owner"/>
  );
}

export default OwnerHome;