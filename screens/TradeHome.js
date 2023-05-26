import React from 'react';
import BaseSplash from '../components/BaseSplash';

function TradeHome({ navigation }) {
  return (
    <BaseSplash navigation={navigation} title = "Auth and Appointments" link = "auth_account" sublink="trade"/>
  );
}

export default TradeHome;