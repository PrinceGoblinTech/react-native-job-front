import React from 'react';
import { View, Text, Button } from 'react-native';
import globalStyles from '../assets/styles/GlobalStyles';

function TabBid({ navigation }) {
  return (
    <View style={[globalStyles.flex1, globalStyles.algCtr, globalStyles.justCtr ]}>
      <Text>Authentications</Text>
      <Button title="Go to" onPress={() => navigation.navigate('auth_account')} />
    </View>
  );
}

export default TabBid;