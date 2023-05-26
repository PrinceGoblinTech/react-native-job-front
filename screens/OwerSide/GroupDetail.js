import React, { useState } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import PhotoList from '../../components/PhotoList';
import ProjectMembers from '../../components/ProjectMembers';
import globalStyles from '../../assets/styles/GlobalStyles';

function GroupDetail({ navigation, route }) {
  const [activeIndex, changeActive] = useState(1);

  return (
    <View style = {[globalStyles.flex1, globalStyles.fWidth, globalStyles.bWhite]}>
      <View style = {[globalStyles.rowFlexShow, globalStyles.pt18, globalStyles.algStart]}>
        <View style = {globalStyles.h30}>
          <TouchableHighlight
            style = {[globalStyles.h30, globalStyles.pt5]}
            activeOpacity = {0.6}
            underlayColor = '#ccc'
            onPress={() => navigation.navigate('share_group')}>
            <Image 
              style = {[globalStyles.resizeContain, globalStyles.h18, globalStyles.ml14, globalStyles.mr5, globalStyles.w18]}
              source={require('../../assets/img/angle-left.png')}/>
          </TouchableHighlight>
        </View>
        <Text
          style = {[globalStyles.fontMont, globalStyles.fs16, globalStyles.fw500, globalStyles.lSpace5, globalStyles.lh24, globalStyles.ml10, globalStyles.mt1, {color: 'rgba(0, 0, 0, 0.6)'}]}
        >Group Name</Text>
        <View style = {globalStyles.flex1}></View>
        <View style = {globalStyles.h30}>
          <TouchableHighlight
            style = {globalStyles.h30}
            activeOpacity = {0.6}
            underlayColor = '#ccc'
            onPress={() => navigation.navigate('edit_group')}>
            <Image 
              style = {[globalStyles.resizeContain, globalStyles.h18, globalStyles.mr10, globalStyles.mt3]}
              source={require('../../assets/img/edit.png')}/>
          </TouchableHighlight>
        </View>
      </View>
      <View style = {[globalStyles.mt16, globalStyles.ml16, globalStyles.rowFlexShow, globalStyles.algStart, globalStyles.fWidth]}>
        <View style = {[globalStyles.h32, globalStyles.br4, globalStyles.mr8, globalStyles.justCtr, {backgroundColor: activeIndex == 1 ? '#FFE8C8' : '#F5F5F5'}]}>
          <TouchableHighlight style = {globalStyles.br4}
            activeOpacity = {0.6}
            underlayColor = '#ccc'
            onPress={() => {
              changeActive(1);
            }}>
            <View style = {[globalStyles.fWidth, globalStyles.h32]}>
              <Text style = {[globalStyles.fontMont, globalStyles.fw400, globalStyles.fs16, globalStyles.lh24, globalStyles.lSpace5, globalStyles.tCenter, globalStyles.br4, globalStyles.vMid, globalStyles.mt3, globalStyles.pl8, globalStyles.pr8, {color: activeIndex == 1 ? '#C87D12' : 'rgba(0, 0, 0, 0.6)'}]}>Photos(42)</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style = {[globalStyles.h32, globalStyles.br4, globalStyles.justCtr, globalStyles.mr8, {backgroundColor: activeIndex == 2 ? '#FFE8C8' : '#F5F5F5'}]}>
          <TouchableHighlight style = {globalStyles.br4}
            activeOpacity = {0.6}
            underlayColor = '#ccc'
            onPress={() => {
              changeActive(2);
            }}>
            <View style = {[globalStyles.fWidth, globalStyles.h32]}>
              <Text style = {[globalStyles.fontMont, globalStyles.fw400, globalStyles.fs16, globalStyles.lh24, globalStyles.lSpace5, globalStyles.tCenter, globalStyles.br4, globalStyles.vMid, globalStyles.mt3, globalStyles.pl8, globalStyles.pr8, {color: activeIndex == 2 ? '#C87D12' : 'rgba(0, 0, 0, 0.6)'}]}>Members(7)</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
      {
        activeIndex == 1 ? 
        <PhotoList navigation={navigation}/> : 
        <View style = {[globalStyles.ml16, globalStyles.mr16]}>
          <ProjectMembers/>
        </View>
      }
      {
        activeIndex == 1 ? 
        <View style = {[globalStyles.w48, globalStyles.h48, globalStyles.br24, globalStyles.posAbsolute, globalStyles.b8, globalStyles.r8, {backgroundColor: '#EFB057'}]}>
          <TouchableHighlight
            onPress={() => navigation.navigate('create_group')}
            activeOpacity = {0.6}
            underlayColor = '#c87d12'
            style = {[globalStyles.w48, globalStyles.h48, globalStyles.br24, globalStyles.algCtr, globalStyles.justCtr]}>
              <Image 
                source={require('../../assets/img/image-plus.png')}
                style = {[globalStyles.resizeContain, globalStyles.w20]}
              />
          </TouchableHighlight>
        </View> : 
        <View style = {[globalStyles.w48, globalStyles.h48, globalStyles.br24, globalStyles.posAbsolute, globalStyles.b8, globalStyles.r8, {backgroundColor: '#EFB057'}]}>
          <TouchableHighlight
            onPress={() => navigation.navigate('invite_member')}
            activeOpacity = {0.6}
            underlayColor = '#c87d12'
            style = {[globalStyles.w48, globalStyles.h48, globalStyles.br24, globalStyles.algCtr, globalStyles.justCtr]}>
              <Image 
                source={require('../../assets/img/user-plus-alt.png')}
                style = {[globalStyles.resizeContain, globalStyles.w20]}
              />
          </TouchableHighlight>
        </View>
      }
    </View>
  );
}

export default GroupDetail;