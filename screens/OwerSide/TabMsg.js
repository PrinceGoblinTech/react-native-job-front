import React, { useState } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import MsgList from '../../components/MsgList';
import globalStyles from '../../assets/styles/GlobalStyles';

function TabMsg({ navigation }) {
  const [activeIndex, changeActive] = useState(true);

  return (
    <View style={[globalStyles.flex1, globalStyles.algCtr, globalStyles.bWhite]}>
      <View style = {[globalStyles.rowFlexShow, globalStyles.pt18, globalStyles.algStart]}>
        <Image 
          style = {[globalStyles.resizeContain, globalStyles.h18, globalStyles.ml14, globalStyles.mr15]}
          source={require('../../assets/img/menu-right-alt.png')}/>
        <Text
          style = {[globalStyles.flex1, globalStyles.fontMont, globalStyles.fs16, globalStyles.fw500, globalStyles.lSpace5, globalStyles.lh24, globalStyles.mt_4, {color: 'rgba(0, 0, 0, 0.6)'}]}
        >Message</Text>
        <Image 
          style = {[globalStyles.resizeContain, globalStyles.h18, globalStyles.mr15]}
          source={require('../../assets/img/bell.png')}/>
      </View>
      <View style = {[globalStyles.mt20, globalStyles.ml30, globalStyles.rowFlexShow, globalStyles.algStart, globalStyles.fWidth]}>
        <View style = {[globalStyles.h32, globalStyles.br4, globalStyles.mr8, globalStyles.justCtr, {backgroundColor: activeIndex ? '#FFE8C8' : '#F5F5F5'}]}>
          <TouchableHighlight style = {globalStyles.br4}
            activeOpacity = {0.6}
            underlayColor = '#ccc'
            onPress={() => {
              changeActive(true);
            }}>
            <View style = {[globalStyles.fWidth, globalStyles.h32]}>
              <Text style = {[{color: activeIndex ? '#C87D12' : 'rgba(0, 0, 0, 0.6)'}, globalStyles.fontMont, globalStyles.fw400, globalStyles.fs16, globalStyles.lh24, globalStyles.lSpace5, globalStyles.tCenter, globalStyles.br4, globalStyles.vMid, globalStyles.mt3, globalStyles.pl8, globalStyles.pr8]}>Internal</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style = {[globalStyles.h32, globalStyles.br4, globalStyles.justCtr, {backgroundColor: activeIndex ? '#F5F5F5' : '#FFE8C8'}]}>
          <TouchableHighlight style = {globalStyles.br4}
            activeOpacity = {0.6}
            underlayColor = '#ccc'
            onPress={() => {
              changeActive(false);
            }}>
            <View style = {[globalStyles.fWidth, globalStyles.h32]}>
              <Text style = {[{color: activeIndex ? 'rgba(0, 0, 0, 0.6)' : '#C87D12'}, globalStyles.fontMont, globalStyles.fw400, globalStyles.fs16, globalStyles.lh24, globalStyles.lSpace5, globalStyles.tCenter, globalStyles.br4, globalStyles.vMid, globalStyles.mt3, globalStyles.pl8, globalStyles.pr8]}>Customers</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
      <View style = {[globalStyles.mt15, globalStyles.h36, globalStyles.ml40, globalStyles.mb10, globalStyles.rowFlexShow, globalStyles.algStart, globalStyles.fWidth]}>
        <Image
          style = {[globalStyles.resizeContain, globalStyles.h32, globalStyles.w32, globalStyles.mr8]}
          source={require('../../assets/img/avatar/user1.png')}/>
        <View style = {[globalStyles.h36, globalStyles.flex1, globalStyles.br34, globalStyles.justCtr, globalStyles.mt_2, globalStyles.mr30, {backgroundColor: '#F5F5F5', flexDirection: 'row'}]}>
          <Image
            source={require('../../assets/img/search.png')}
            style = {[globalStyles.w20, globalStyles.resizeContain, globalStyles.h16, globalStyles.mt10, globalStyles.ml14]} />
          <TextInput
            placeholder = "Start a new Chat"
            placeholderTextColor={'rgba(0, 0, 0, 0.6)'}
            style = {[globalStyles.br34, globalStyles.pl10, globalStyles.flex1, globalStyles.fs14, globalStyles.lh24, globalStyles.fontMont, globalStyles.lSpace5, {color: 'rgba(0, 0, 0, 0.6)'}]}></TextInput>
        </View>
      </View>
      <MsgList navigation = {navigation} currentState = {activeIndex}/>
    </View>
  );
}

export default TabMsg;