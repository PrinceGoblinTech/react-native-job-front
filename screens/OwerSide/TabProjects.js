import React, { useState } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ProjectDetails from '../../components/ProjectDetails';
import ProjectMembers from '../../components/ProjectMembers';
import ProjectStage from '../../components/ProjectStage';
import globalStyles from '../../assets/styles/GlobalStyles';

function TabProjects({ navigation }) {
  const [activeIndex, changeActive] = useState(1);

  return (
    <ScrollView style={[globalStyles.flex1, globalStyles.bWhite]}>
      <View style = {[globalStyles.rowFlexShow, globalStyles.pt18, globalStyles.algStart]}>
        <Image 
          style = {[globalStyles.resizeContain, globalStyles.h18, globalStyles.ml14, globalStyles.mr15]}
          source={require('../../assets/img/menu-right-alt.png')}/>
        <Text
          style = {[globalStyles.flex1, globalStyles.fontMont, globalStyles.fs16, globalStyles.fw500, globalStyles.lSpace5, globalStyles.lh24, globalStyles.mt_4, {color: 'rgba(0, 0, 0, 0.6)'}]}
        >Projects</Text>
        <Image 
          style = {[globalStyles.resizeContain, globalStyles.h18, globalStyles.mr15]}
          source={require('../../assets/img/bell.png')}/>
      </View>
      <Text style = {[globalStyles.tLeft, globalStyles.fWidth, globalStyles.ml16, globalStyles.fontMont, globalStyles.fs16, globalStyles.fw500, globalStyles.lSpace15, globalStyles.lh24, globalStyles.colorBlack, globalStyles.mt20]}>Construction of Tiny Home</Text>
      <View style = {[globalStyles.h62, globalStyles.ml16, globalStyles.mr16, globalStyles.mt10, {borderColor: 'rgba(0, 0, 0, 0.08)'}, globalStyles.bw1, globalStyles.br8]}>
        <Text style = {[globalStyles.fontMont, globalStyles.fw400, globalStyles.fs12, globalStyles.lh18, globalStyles.lSpace4, globalStyles.ml10, globalStyles.mt6, globalStyles.mb10, {color: 'rgba(0, 0, 0, 0.6)'}]}>Overall Progress</Text>
        <View style = {[globalStyles.h8, globalStyles.bWhite, globalStyles.br8, globalStyles.ml20, globalStyles.mr60, {borderWidth: 4, borderColor: '#BAE9B2', flexDirection: 'row', borderLeftWidth: 0, borderRightWidth: 0}]}>
          <View style = {[globalStyles.h8, globalStyles.posRelative, globalStyles.zIndex4, globalStyles.br8, globalStyles.t_4, {borderWidth: 4, borderColor: '#00B53A', width: '23%'}]}></View>
        </View>
        <Text style = {[globalStyles.posRelative, globalStyles.t_18, globalStyles.r15, globalStyles.fontMont, globalStyles.fw500, globalStyles.fs16, globalStyles.lh24, globalStyles.lSpace15, globalStyles.fWidth, globalStyles.tRight, {color: '#00B53A'}]}>23%</Text>
      </View>
      <View style= {[globalStyles.h114, globalStyles.ml16, globalStyles.br8, globalStyles.mb8, globalStyles.mt15, globalStyles.mr16, globalStyles.pl10, globalStyles.pt13, {backgroundColor: '#F5F5F5'}]}>
        <View style = {[globalStyles.hHalf, globalStyles.fWidth]}>
          <Text style = {[globalStyles.fontMont, globalStyles.fs12, globalStyles.lh18, globalStyles.lSpace4, {color: 'rgba(0, 0, 0, 0.6)'}]}>Project Duration</Text>
          <Text style = {[globalStyles.lSpace15, globalStyles.fontMont, globalStyles.fw500, globalStyles.fs14, globalStyles.lh22, globalStyles.colorBlack]}>27 Dec 2022 - 23 Nov 2025</Text>
        </View>
        <View style = {[globalStyles.hHalf, globalStyles.fWidth]}>
          <Text style = {[globalStyles.fontMont, globalStyles.fs12, globalStyles.lh18, globalStyles.lSpace4, {color: 'rgba(0, 0, 0, 0.6)'}]}>Project Manager</Text>
          <View style = {[globalStyles.mt5, globalStyles.rowFlexShow]}>
            <Image source={require('../../assets/img/avatar/user3.png')}
              style = {[globalStyles.resizeContain, globalStyles.w24, globalStyles.h24]}/>
            <Text style = {[globalStyles.fontMont, globalStyles.fw500, globalStyles.fs14, globalStyles.lh22, globalStyles.lSpace15, globalStyles.ml7, globalStyles.mt_2, {color: 'rgba(0, 0, 0, 0.6)'}]}>Christin Arc</Text>
          </View>
        </View>
      </View>
      <View style = {[globalStyles.mt16, globalStyles.ml16, globalStyles.rowFlexShow, globalStyles.algStart, globalStyles.fWidth]}>
        <View style = {[globalStyles.h32, globalStyles.br4, globalStyles.mr8, {backgroundColor: activeIndex == 1 ? '#FFE8C8' : '#F5F5F5'}, globalStyles.justCtr]}>
          <TouchableHighlight style = {globalStyles.br4}
            activeOpacity = {0.6}
            underlayColor = '#ccc'
            onPress={() => {
              changeActive(1);
              // navigation.navigate('owner_tabs')
            }}>
            <View style = {[globalStyles.fWidth, globalStyles.h32]}>
              <Text style = {[{color: activeIndex == 1 ? '#C87D12' : 'rgba(0, 0, 0, 0.6)'}, globalStyles.fontMont, globalStyles.fw400, globalStyles.fs16, globalStyles.lh24, globalStyles.lSpace5, globalStyles.tCenter, globalStyles.br4, globalStyles.vMid, globalStyles.mt3, globalStyles.pl8, globalStyles.pr8]}>Project Stage</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style = {[globalStyles.h32, globalStyles.br4, {backgroundColor: activeIndex == 2 ? '#FFE8C8' : '#F5F5F5'}, globalStyles.justCtr, globalStyles.mr8]}>
          <TouchableHighlight style = {globalStyles.br4}
            activeOpacity = {0.6}
            underlayColor = '#ccc'
            onPress={() => {
              changeActive(2);
              // navigation.navigate('owner_tabs')
            }}>
            <View style = {[globalStyles.fWidth, globalStyles.h32]}>
              <Text style = {[{color: activeIndex == 2 ? '#C87D12' : 'rgba(0, 0, 0, 0.6)'}, globalStyles.fontMont, globalStyles.fw400, globalStyles.fs16, globalStyles.lh24, globalStyles.lSpace5, globalStyles.tCenter, globalStyles.br4, globalStyles.vMid, globalStyles.mt3, globalStyles.pl8, globalStyles.pr8]}>Details</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style = {[globalStyles.h32, globalStyles.br4, {backgroundColor: activeIndex == 3 ? '#FFE8C8' : '#F5F5F5'}, globalStyles.justCtr]}>
          <TouchableHighlight style = {globalStyles.br4}
            activeOpacity = {0.6}
            underlayColor = '#ccc'
            onPress={() => {
              changeActive(3);
              // navigation.navigate('owner_tabs')
            }}>
            <View style = {[globalStyles.fWidth, globalStyles.h32]}>
              <Text style = {[{color: activeIndex == 3 ? '#C87D12' : 'rgba(0, 0, 0, 0.6)'}, globalStyles.fontMont, globalStyles.fw400, globalStyles.fs16, globalStyles.lh24, globalStyles.lSpace5, globalStyles.tCenter, globalStyles.br4, globalStyles.vMid, globalStyles.mt3, globalStyles.pl8, globalStyles.pr8]}>Members(4)</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
      <View style = {[globalStyles.ml16, globalStyles.mr16]}>
        {
          activeIndex == 1 ? 
          <ProjectStage /> : 
          (
            activeIndex == 2 ? 
            <ProjectDetails /> : <ProjectMembers />
          )
        }
      </View>
    </ScrollView>
  );
}

export default TabProjects;