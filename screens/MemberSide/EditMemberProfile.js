import React, { useState } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import globalStyles from '../../assets/styles/GlobalStyles';

function EditMemberProfile({ navigation }) {
  const [firstFocused, setFristFocused] = useState(false);
  const [secondFocused, setSecondFocused] = useState(false);

  return (
    <View style = {[globalStyles.flex1, globalStyles.fWidth, globalStyles.bWhite]}>
      <View style = {[globalStyles.rowFlexShow, globalStyles.pt18, globalStyles.algStart]}>
        <View style = {globalStyles.h30}>
          <TouchableHighlight
            style = {[globalStyles.h30, globalStyles.pt5]}
            activeOpacity = {0.6}
            underlayColor = '#ccc'
            onPress={() => navigation.navigate('member_profile')}>
            <Image 
              style = {[globalStyles.resizeContain, globalStyles.h18, globalStyles.ml14, globalStyles.mr14, globalStyles.w18]}
              source={require('../../assets/img/angle-left.png')}/>
          </TouchableHighlight>
        </View>
        <Text
          style = {[globalStyles.fontMont, globalStyles.fs16, globalStyles.fw500, globalStyles.lSpace5, globalStyles.lh24, globalStyles.mt1, {color: 'rgba(0, 0, 0, 0.6)'}]}
        >Edit Profile</Text>
      </View>
      <View style = {[globalStyles.algCtr, globalStyles.mt30]}>
        <View style = {[globalStyles.w56, globalStyles.h56, globalStyles.br56, globalStyles.bw1, globalStyles.algCtr, globalStyles.justCtr, {borderColor: '#EFB057'}]}>
          <Image source={require('../../assets/img/avatar/user14.png')}
            style = {[globalStyles.resizeContain, globalStyles.w48, globalStyles.h48]}/>
        </View>
      </View>
      <View style = {[globalStyles.ml16, globalStyles.mr16]}>
        <Text style = {[globalStyles.posRelative, globalStyles.t10, globalStyles.zIndex3, globalStyles.bWhite, globalStyles.w80, globalStyles.l30, globalStyles.tCenter, globalStyles.customFont1, {color: '#EFB057'}]}>Full Name</Text>
        <TextInput
          onFocus={() => setFristFocused(true)}
          onBlur = {() => setFristFocused(false)}
          placeholder = "Papa Dellis"
          placeholderTextColor={'rgba(0, 0, 0, 0.87)'}
          style = {[globalStyles.bw1, globalStyles.br4, globalStyles.pl16, globalStyles.fs16, globalStyles.lh24, globalStyles.fontMont, globalStyles.lSpace5, {borderColor: firstFocused ? '#EFB057' : 'black', color: 'rgba(0, 0, 0, 0.87)'}]}></TextInput>
      </View>
      <View style = {[globalStyles.ml16, globalStyles.mr16]}>
        <Text style = {[globalStyles.posRelative, globalStyles.t10, globalStyles.zIndex3, globalStyles.bWhite, globalStyles.w50, globalStyles.l30, globalStyles.tCenter, globalStyles.customFont1, {color: '#EFB057'}]}>Email</Text>
        <TextInput
          onFocus={() => setSecondFocused(true)}
          onBlur = {() => setSecondFocused(false)}
          placeholder = "papadellis@gmail.com"
          placeholderTextColor={'rgba(0, 0, 0, 0.87)'}
          style = {[globalStyles.bw1, globalStyles.br4, globalStyles.pl16, globalStyles.fs16, globalStyles.lh24, globalStyles.fontMont, globalStyles.lSpace5, {borderColor: secondFocused ? '#EFB057' : 'black', color: 'rgba(0, 0, 0, 0.87)'}]}></TextInput>
      </View>
      <View style = {globalStyles.flex1}></View>
      <View style = {[globalStyles.mt30, globalStyles.ml16, globalStyles.mr16]}>
        <View style = {[globalStyles.h40, globalStyles.br24, globalStyles.bw1, globalStyles.justCtr, {borderColor: '#EFB057', backgroundColor: '#EFB057'}]}>
          <TouchableHighlight style = {globalStyles.br24}
            activeOpacity = {0.6}
            underlayColor = '#c87d12'
            onPress={() => {
              navigation.navigate('member_profile');
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
              navigation.navigate('member_profile');
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

export default EditMemberProfile;