import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import globalStyles from '../../assets/styles/GlobalStyles';

function TabMemberProfile({ navigation }) {

  return (
    <ScrollView style={[globalStyles.flex1, globalStyles.bWhite]}>
      <View style = {[globalStyles.rowFlexShow, globalStyles.pt18, globalStyles.algStart]}>
        <Image 
          style = {[globalStyles.resizeContain, globalStyles.h18, globalStyles.ml14, globalStyles.mr15]}
          source={require('../../assets/img/menu-right-alt.png')}/>
        <Text
          style = {[globalStyles.flex1, globalStyles.fontMont, globalStyles.fs16, globalStyles.fw500, globalStyles.lSpace5, globalStyles.lh24, globalStyles.mt_4, {color: 'rgba(0, 0, 0, 0.6)'}]}
        >Profile Details</Text>
        <Image 
          style = {[globalStyles.resizeContain, globalStyles.h18, globalStyles.mr15]}
          source={require('../../assets/img/bell.png')}/>
      </View>
      <View style = {[globalStyles.h24, globalStyles.ml16, globalStyles.mr16, globalStyles.mt28, {borderTopLeftRadius: 8, borderTopRightRadius: 8, backgroundColor: '#FFE8C8'}]}>
      </View>
      <View style = {[globalStyles.fWidth, globalStyles.algCtr, globalStyles.pt20]}>
        <View style = {[{borderColor: '#EFB057'}, globalStyles.w56, globalStyles.h56, globalStyles.br56, globalStyles.bw1, globalStyles.algCtr, globalStyles.justCtr]}>
          <Image source={require('../../assets/img/avatar/user14.png')}
            style = {[globalStyles.resizeContain, globalStyles.w48, globalStyles.h48]}/>
        </View>
        <Text style = {[globalStyles.fontMont, globalStyles.fw500, globalStyles.fs16, globalStyles.lh24, globalStyles.lSpace15, {color: 'rgba(0, 0, 0, 0.6)'}]}>Jean Carla</Text>
        <TouchableHighlight
          activeOpacity = {0.2}
          underlayColor = '#ccc'
          onPress={() => {
            navigation.navigate('edit_member_profile');
          }}
          style = {[globalStyles.w20, globalStyles.h20]}>
          <Image source={require('../../assets/img/profile_edit.png')}
            style = {[globalStyles.resizeContain, globalStyles.w20, globalStyles.h20]}/>
        </TouchableHighlight>
      </View>
      <View style= {[globalStyles.h206, globalStyles.p8, globalStyles.ml16, globalStyles.mr16, globalStyles.mt16, globalStyles.br14, {backgroundColor: '#F5F5F5'}]}>
        <View style = {[globalStyles.h63, globalStyles.ml14, globalStyles.mt6]}>
          <Text style = {[globalStyles.fontMont, globalStyles.fs12, globalStyles.lh18, globalStyles.lSpace4, {color: 'rgba(0, 0, 0, 0.6)'}]}>Name</Text>
          <Text style = {[globalStyles.lSpace5, globalStyles.fontMont, globalStyles.fw400, globalStyles.fs14, globalStyles.lh24, globalStyles.colorBlack]}>Jean Carla</Text>
        </View>
        <View style = {[globalStyles.h63, globalStyles.ml14, globalStyles.mt6]}>
          <Text style = {[globalStyles.fontMont, globalStyles.fs12, globalStyles.lh18, globalStyles.lSpace4, {color: 'rgba(0, 0, 0, 0.6)'}]}>Email</Text>
          <Text style = {[globalStyles.lSpace5, globalStyles.fontMont, globalStyles.fw400, globalStyles.fs14, globalStyles.lh24, globalStyles.colorBlack]}>jean@gmail.com</Text>
        </View>
        <View style = {[globalStyles.h63, globalStyles.ml14, globalStyles.mt6]}>
          <Text style = {[globalStyles.fontMont, globalStyles.fs12, globalStyles.lh18, globalStyles.lSpace4, {color: 'rgba(0, 0, 0, 0.6)'}]}>Phone</Text>
          <Text style = {[globalStyles.lSpace5, globalStyles.fontMont, globalStyles.fw400, globalStyles.fs14, globalStyles.lh24, globalStyles.colorBlack]}>+894 345355</Text>
        </View>
      </View>
      <View style = {[globalStyles.mt50, globalStyles.ml16, globalStyles.mr16]}>
        <View style = {[globalStyles.h40, globalStyles.mt20, globalStyles.br24, globalStyles.bw1, globalStyles.bWhite, globalStyles.justCtr, globalStyles.mb10, {borderColor: '#EFB057'}]}>
          <TouchableHighlight style = {globalStyles.br24}
            activeOpacity = {0.6}
            underlayColor = '#ccc'
            onPress={() => {
              navigation.navigate('change_member_psw');
            }}>
            <View style = {[globalStyles.fWidth, globalStyles.h40]}>
              <Text style = {[{color: '#EFB057'}, globalStyles.fontMont, globalStyles.fw500, globalStyles.fs16, globalStyles.lh24, globalStyles.lSpace125, globalStyles.tCenter, globalStyles.br24, globalStyles.vMid, globalStyles.mt6]}>Change Password</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
}

export default TabMemberProfile;