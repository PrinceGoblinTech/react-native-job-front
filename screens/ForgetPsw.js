import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, TouchableHighlight } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import globalStyles from '../assets/styles/GlobalStyles';

function ForgetPsw({ navigation, route }) {
  const [emailFocused, setIsFocused] = useState(false);

  return (
    <ImageBackground
      source={require('../assets/img/Onboarding.png')} style={globalStyles.signBackImg}>
      <View style = {globalStyles.logoWrapper}>
        <View style = {globalStyles.algCtr}>
          <Image 
            style = {globalStyles.logoImg}
            source={require('../assets/img/tinyhomes_logo.png')}/>
          <Text style = {globalStyles.signTitle}>Forget Password?</Text>
        </View>
      </View>
      <View style = {globalStyles.fullWidthJust}>
        <View style = {globalStyles.mHorizontal24}>
          <Text style = {[globalStyles.posRelative, globalStyles.t10, globalStyles.zIndex3, globalStyles.bWhite, globalStyles.w50, globalStyles.l30, globalStyles.tCenter, globalStyles.customFont1, {color: '#EFB057'}]}>Email</Text>
          <TextInput
            onFocus={() => setIsFocused(true)}
            onBlur = {() => setIsFocused(false)}
            placeholder = "your email address"
            placeholderTextColor={'rgba(0, 0, 0, 0.87)'}
            style = {[globalStyles.bw1, globalStyles.br4, globalStyles.pl16, globalStyles.fs16, globalStyles.lh24, globalStyles.fontMont, globalStyles.lSpace5, {borderColor: emailFocused ? '#EFB057' : 'black', color: 'rgba(0, 0, 0, 0.87)'}]}></TextInput>
        </View>
        <View style = {[globalStyles.mt30, globalStyles.mHorizontal24]}>
          <View style = {[globalStyles.h40, globalStyles.br24, globalStyles.bw1, globalStyles.justCtr, {borderColor: '#EFB057', backgroundColor: '#EFB057'}]}>
            <TouchableHighlight style = {globalStyles.br24}
              activeOpacity = {0.6}
              underlayColor = '#c87d12'
              onPress={() => {}}>
              <View style = {[globalStyles.fWidth, globalStyles.h40]}>
                <Text style = {[globalStyles.colorWhite, globalStyles.fontMont, globalStyles.fw500, globalStyles.fs16, globalStyles.lh24, globalStyles.lSpace125, globalStyles.tCenter, globalStyles.br24, globalStyles.vMid, globalStyles.mt6]}>Send Reset Link</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style = {[globalStyles.mHorizontal24, globalStyles.mt30, globalStyles.rowFlexShow, globalStyles.algCtr]}>
          <View style = {globalStyles.flex1}></View>
          <View style = {[globalStyles.algEnd, globalStyles.mr5]}>
            <Text
              style = {[globalStyles.fontMont, globalStyles.lh22, globalStyles.fs14, globalStyles.lSpace15, globalStyles.tRight, {color: 'rgba(0, 0, 0, 0.6)'}]}>Return to </Text>
          </View>
          <View
            style = {[globalStyles.ml5, globalStyles.algStart]}>
            <TouchableHighlight
              activeOpacity = {0.6}
              underlayColor = 'transparent'
              onPress={() => navigation.navigate('auth_account', {sublink: route.params.sublink})}>
              <View>
                <Text style = {[globalStyles.bWhite, globalStyles.tCenter, globalStyles.fontMont, globalStyles.fw500, globalStyles.fs14, globalStyles.lh22, globalStyles.lSpace15, {color: '#C87D12'}]}>Sign In</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style = {globalStyles.flex1}></View>
        </View>
        <View style = {globalStyles.flex1}></View>
      </View>
    </ImageBackground>
  );
}

export default ForgetPsw;