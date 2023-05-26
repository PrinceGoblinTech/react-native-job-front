import React, { useState } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import globalStyles from '../../assets/styles/GlobalStyles';

function ChangePsw({ navigation, route }) {
  const [pswFocused, setPswFocused] = useState(false);
  const [confirmFocused, setConfirmFocused] = useState(false);
  const [eyeEnabled, setEyeState] = useState(false);
  const [confirmEnabled, setConfirmState] = useState(false);

  return (
    <View style = {[globalStyles.flex1, globalStyles.fWidth, globalStyles.bWhite]}>
      <View style = {[globalStyles.rowFlexShow, globalStyles.pt18, globalStyles.algStart]}>
        <View style = {globalStyles.h30}>
          <TouchableHighlight
            style = {[globalStyles.h30, globalStyles.pt5]}
            activeOpacity = {0.6}
            underlayColor = '#ccc'
            onPress={() => navigation.navigate('owner_profile')}>
            <Image 
              style = {[globalStyles.resizeContain, globalStyles.h18, globalStyles.ml14, globalStyles.mr14, globalStyles.w18]}
              source={require('../../assets/img/angle-left.png')}/>
          </TouchableHighlight>
        </View>
        <Text
          style = {[globalStyles.fontMont, globalStyles.fs16, globalStyles.fw500, globalStyles.lSpace5, globalStyles.lh24, globalStyles.mt1, {color: 'rgba(0, 0, 0, 0.6)'}]}
        >Change Password</Text>
      </View>
      <View style = {[globalStyles.fWidth, globalStyles.mt15]}>
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
                  source={eyeEnabled ? require('../../assets/img/eye-enable.png') : require('../../assets/img/eye-disable.png')}
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
                  source={eyeEnabled ? require('../../assets/img/eye-enable.png') : require('../../assets/img/eye-disable.png')}
                  style = {[globalStyles.w20, globalStyles.resizeContain, globalStyles.h16]} />
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <View style = {globalStyles.flex1}></View>
      <View style = {[globalStyles.ml16, globalStyles.mr16]}>
        <View style = {[globalStyles.h40, globalStyles.br24, globalStyles.bw1, globalStyles.justCtr, {borderColor: '#EFB057', backgroundColor: '#EFB057'}]}>
          <TouchableHighlight style = {globalStyles.br24}
            activeOpacity = {0.6}
            underlayColor = '#c87d12'
            onPress={() => {
              navigation.navigate('owner_profile');
            }}>
            <View style = {[globalStyles.fWidth, globalStyles.h40]}>
              <Text style = {[globalStyles.colorWhite, globalStyles.fontMont, globalStyles.fw500, globalStyles.fs16, globalStyles.lh24, globalStyles.lSpace125, globalStyles.tCenter, globalStyles.br24, globalStyles.vMid, globalStyles.mt6]}>Save Changes</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style = {[globalStyles.h40, globalStyles.mt10, globalStyles.br24, globalStyles.bw1, globalStyles.bWhite, globalStyles.justCtr, globalStyles.mb10, {borderColor: '#EFB057'}]}>
          <TouchableHighlight style = {globalStyles.br24}
            activeOpacity = {0.6}
            underlayColor = '#ccc'
            onPress={() => {
              navigation.navigate('owner_profile');
            }}>
            <View style = {[globalStyles.fWidth, globalStyles.h40]}>
              <Text style = {[globalStyles.fontMont, globalStyles.fw500, globalStyles.fs16, globalStyles.lh24, globalStyles.lSpace125, globalStyles.tCenter, globalStyles.br24, globalStyles.vMid, globalStyles.mt6, {color: '#EFB057'}]}>Cancel</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

export default ChangePsw;