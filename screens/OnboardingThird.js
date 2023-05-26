import React from 'react';
import { View, Text, ImageBackground, Image, TouchableHighlight } from 'react-native';
import globalStyles from '../assets/styles/GlobalStyles';

function OnboardingThird({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/img/Onboarding.png')} style={globalStyles.mainBackImg}>
      <View style={globalStyles.stepImgWrapper}>
        <View style = {globalStyles.fdRow}>
          <View style = {globalStyles.flex1}></View>
          <Image source={require('../assets/img/onboarding-third-back.png')} style = {globalStyles.stepTopImg}/>
          <View style = {globalStyles.flex1}></View>
        </View>
      </View>
      <View style = {globalStyles.stepTextWrapper}>
        <Text style = {globalStyles.stepTitle}>Getting Started</Text>
        <Text style = {globalStyles.stepContent}>Stay organized, and make the most of the app's project tracking, messaging, scheduling appointment, and bid board.</Text>
      </View>
      <View style = {globalStyles.stepBottomWrapper}>
        <View style = {globalStyles.algCtr}>
          <Image style = {globalStyles.stepImg} source = {require('../assets/img/Group6923.png')}></Image> 
        </View>
        <TouchableHighlight
        style = {[globalStyles.ml30, globalStyles.mr30, globalStyles.mb16, globalStyles.br16]}
        activeOpacity = {0.6}
        underlayColor = '#c87d12'
        onPress={() => navigation.navigate('onboarding_role')}>
          <View style = {globalStyles.stepNextBtn}>
            <Text style = {globalStyles.stepNextText}>NEXT</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
        style = {[globalStyles.ml30, globalStyles.mr30, globalStyles.br16]}
        activeOpacity = {0.6}
        underlayColor = '#ccc'
        onPress={() => navigation.navigate('onboarding_role')}>
          <View style = {globalStyles.stepSkipBtn}>
            <Text style = {globalStyles.stepSkipText}>Skip</Text>
          </View>
        </TouchableHighlight>
      </View>
    </ImageBackground>
  );
}

export default OnboardingThird;