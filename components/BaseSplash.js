import React from 'react';
import { Text, ImageBackground, TouchableHighlight, Image } from 'react-native';
import globalStyles from '../assets/styles/GlobalStyles';

function BaseSplash({ navigation, title, link, sublink }) {
  let backPath = '';
  switch(link)
  {
    case 'onboarding_first':
      backPath = require('../assets/img/main-back.png');
      break;
    case 'auth_account':
      if(sublink == 'owner')
        backPath = require('../assets/img/owner-back.png');
      else if(sublink == 'member')
        backPath = require('../assets/img/member-back.png');
      else
        backPath = require('../assets/img/trade-back.png');
      break;
  }

  return (
    <ImageBackground
      source={backPath} style={globalStyles.splashbBackground}>
      <Text style = {globalStyles.splashText}>{title}</Text>
      <TouchableHighlight style = {globalStyles.splashButton}
        activeOpacity = {0.8}
        underlayColor = '#ccc'
        onPress={() => navigation.navigate(link, link == 'auth_account' ? {sublink: sublink} : {})}>
        <Image 
          source={require('../assets/img/doublearrow.png')}
        />
      </TouchableHighlight>
    </ImageBackground>
  );
}

export default BaseSplash;