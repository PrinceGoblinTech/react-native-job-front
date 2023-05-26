import React from 'react';
import { View, Text, Button } from 'react-native';
import globalStyles from '../assets/styles/GlobalStyles';

function OwnerSignUp({ navigation }) {
  return (
    <View style={[globalStyles.flex1, globalStyles.algCtr, globalStyles.justCtr]}>
      <Text>Create an Account</Text>
      <Button title="Sign Up" onPress={() => navigation.navigate('msg_box')} />
    </View>
  );
}

export default OwnerSignUp;