import React from 'react';
import { View, Text, Button } from 'react-native';
import globalStyles from '../assets/styles/GlobalStyles';

function OwnerSignIn({ navigation }) {
  return (
    <View style={[globalStyles.flex1, globalStyles.algCtr, globalStyles.justCtr]}>
      <Text>Sign In to your Account</Text>
      <Button title="Sign In" onPress={() => navigation.navigate('msg_box')} />
    </View>
  );
}

export default OwnerSignIn;