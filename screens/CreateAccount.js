import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, TouchableHighlight } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import globalStyles from '../assets/styles/GlobalStyles';

function CreateAccount({ navigation, route }) {
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setIsFocused] = useState(false);
  const [pswFocused, setPswFocused] = useState(false);
  const [confirmFocused, setConfirmFocused] = useState(false);
  const [eyeEnabled, setEyeState] = useState(false);
  const [confirmEnabled, setConfirmState] = useState(false);

  return (
    <ImageBackground
      source={require('../assets/img/Onboarding.png')} style={globalStyles.signBackImg}>
      <View style = {[globalStyles.algCtr, globalStyles.justCtr, globalStyles.pl32, globalStyles.pr32, globalStyles.pt30, globalStyles.mt10]}>
        <View style = {globalStyles.algCtr}>
          <Image 
            style = {globalStyles.logoImg}
            source={require('../assets/img/tinyhomes_logo.png')}/>
          <Text style = {globalStyles.signTitle}>Create an Account</Text>
        </View>
      </View>
      <View style = {globalStyles.fullWidthJust}>
        <View style = {globalStyles.mHorizontal24}>
          <Text style = {[globalStyles.posRelative, globalStyles.t10, globalStyles.zIndex3, globalStyles.bWhite, globalStyles.w80, globalStyles.l30, globalStyles.tCenter, globalStyles.customFont1, {color: '#EFB057'}]}>Full Name</Text>
          <TextInput
            onFocus={() => setNameFocused(true)}
            onBlur = {() => setNameFocused(false)}
            placeholder = "your full name"
            placeholderTextColor={'rgba(0, 0, 0, 0.87)'}
            style = {[globalStyles.bw1, globalStyles.br4, globalStyles.pl16, globalStyles.fs16, globalStyles.lh24, globalStyles.fontMont, globalStyles.lSpace5, {borderColor: nameFocused ? '#EFB057' : 'black', color: 'rgba(0, 0, 0, 0.87)'}]}></TextInput>
        </View>
        <View style = {globalStyles.mHorizontal24}>
          <Text style = {[globalStyles.posRelative, globalStyles.t10, globalStyles.zIndex3, globalStyles.bWhite, globalStyles.w50, globalStyles.l30, globalStyles.tCenter, globalStyles.customFont1, {color: '#EFB057'}]}>Email</Text>
          <TextInput
            onFocus={() => setIsFocused(true)}
            onBlur = {() => setIsFocused(false)}
            placeholder = "your email address"
            placeholderTextColor={'rgba(0, 0, 0, 0.87)'}
            style = {[globalStyles.bw1, globalStyles.br4, globalStyles.pl16, globalStyles.fs16, globalStyles.lh24, globalStyles.fontMont, globalStyles.lSpace5, {borderColor: emailFocused ? '#EFB057' : 'black', color: 'rgba(0, 0, 0, 0.87)'}]}></TextInput>
        </View>
        <View style = {globalStyles.mHorizontal24}>
          <Text style = {[globalStyles.posRelative, globalStyles.t10, globalStyles.zIndex3, globalStyles.bWhite, globalStyles.w80, globalStyles.l30, globalStyles.tCenter, globalStyles.customFont1, {color: '#EFB057'}]}>Password</Text>
          <TextInput
            onFocus={() => setPswFocused(true)}
            onBlur = {() => setPswFocused(false)}
            placeholder = "your password"
            textContentType='password'
            placeholderTextColor={'rgba(0, 0, 0, 0.87)'}
            style = {[globalStyles.bw1, globalStyles.br4, globalStyles.pl16, globalStyles.fs16, globalStyles.lh24, globalStyles.fontMont, globalStyles.lSpace5, {borderColor: pswFocused ? '#EFB057' : 'black', color: 'rgba(0, 0, 0, 0.87)'}]}></TextInput>
          <View
            style = {[globalStyles.posRelative, globalStyles.zIndex4, globalStyles.t_34, globalStyles.algEnd, globalStyles.r15]}>
            <TouchableHighlight
              activeOpacity = {0.6}
              underlayColor = 'transparent'
              onPress={() => setEyeState(!eyeEnabled)}>
              <View>
                <Image
                  source={eyeEnabled ? require('../assets/img/eye-enable.png') : require('../assets/img/eye-disable.png')}
                  style = {[globalStyles.w20, globalStyles.resizeContain, globalStyles.h16]} />
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style = {[globalStyles.mHorizontal24, globalStyles.mt_15]}>
          <Text style = {[globalStyles.posRelative, globalStyles.t10, globalStyles.zIndex3, globalStyles.bWhite, globalStyles.w130, globalStyles.l30, globalStyles.tCenter, globalStyles.customFont1, {color: '#EFB057'}]}>Confirm Password</Text>
          <TextInput
            onFocus={() => setConfirmFocused(true)}
            onBlur = {() => setConfirmFocused(false)}
            placeholder = "confirm your password"
            textContentType='password'
            placeholderTextColor={'rgba(0, 0, 0, 0.87)'}
            style = {[globalStyles.bw1, globalStyles.br4, globalStyles.pl16, globalStyles.fs16, globalStyles.lh24, globalStyles.fontMont, globalStyles.lSpace5, {borderColor: confirmFocused ? '#EFB057' : 'black', color: 'rgba(0, 0, 0, 0.87)'}]}></TextInput>
          <View
            style = {[globalStyles.posRelative, globalStyles.zIndex4, globalStyles.t_34, globalStyles.algEnd, globalStyles.r15]}>
            <TouchableHighlight
              activeOpacity = {0.6}
              underlayColor = 'transparent'
              onPress={() => setConfirmState(!confirmEnabled)}>
              <View>
                <Image
                  source={eyeEnabled ? require('../assets/img/eye-enable.png') : require('../assets/img/eye-disable.png')}
                  style = {[globalStyles.w20, globalStyles.resizeContain, globalStyles.h16]} />
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style = {[globalStyles.mt20, globalStyles.mHorizontal24]}>
          <View style = {[globalStyles.h40, globalStyles.br24, globalStyles.bw1, globalStyles.justCtr, {borderColor: '#EFB057', backgroundColor: '#EFB057'}]}>
            <TouchableHighlight style = {globalStyles.br24}
              activeOpacity = {0.6}
              underlayColor = '#c87d12'
              onPress={() => {
                if(route.params.sublink == 'owner')
                  navigation.navigate('owner_tabs');
                else if(route.params.sublink == 'member')
                  navigation.navigate('teammember_tabs');
                else
                  navigation.navigate('trade_tabs');
              }}>
              <View style = {[globalStyles.fWidth, globalStyles.h40]}>
                <Text style = {[globalStyles.colorWhite, globalStyles.fontMont, globalStyles.fw500, globalStyles.fs16, globalStyles.lh24, globalStyles.lSpace125, globalStyles.tCenter, globalStyles.br24, globalStyles.vMid, globalStyles.mt6]}>Sign Up</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style = {[globalStyles.mHorizontal24, globalStyles.mt30, globalStyles.rowFlexShow, globalStyles.algCtr]}>
          <View style = {globalStyles.flex1}></View>
          <View style = {[globalStyles.algEnd, globalStyles.mr5]}>
            <Text
              style = {[globalStyles.fontMont, globalStyles.lh22, globalStyles.fs14, globalStyles.lSpace15, globalStyles.tRight, {color: 'rgba(0, 0, 0, 0.6)'}]}>Already have an account?</Text>
          </View>
          <View
            style = {[globalStyles.algStart, globalStyles.ml5]}>
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

export default CreateAccount;