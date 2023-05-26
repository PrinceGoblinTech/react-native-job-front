import React from 'react';
import { ScrollView } from 'react-native';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import globalStyles from '../assets/styles/GlobalStyles';

function GroupList({ navigation, currentState }) {
  const grpList = [
    {
      name: 'Maintenance Group',
      avatars: [
        require('../assets/img/avatar/user11.png'),
        require('../assets/img/avatar/user13.png'),
        require('../assets/img/avatar/user12.png')
      ],
      memberCnt: '12 Members',
      photoCnt: '40 Photos',
    },
    {
      name: 'Family Group',
      avatars: [
        require('../assets/img/avatar/user11.png'),
        require('../assets/img/avatar/user13.png'),
        require('../assets/img/avatar/user12.png')
      ],
      memberCnt: '12 Members',
      photoCnt: '40 Photos',
    },
    {
      name: 'Professional Group',
      avatars: [
        require('../assets/img/avatar/user11.png'),
        require('../assets/img/avatar/user13.png'),
        require('../assets/img/avatar/user12.png')
      ],
      memberCnt: '12 Members',
      photoCnt: '40 Photos',
    },
    {
      name: 'Pro Group',
      avatars: [
        require('../assets/img/avatar/user11.png'),
        require('../assets/img/avatar/user13.png'),
        require('../assets/img/avatar/user12.png')
      ],
      memberCnt: '12 Members',
      photoCnt: '40 Photos',
    },
  ];

  return (
    <ScrollView style = {[globalStyles.flex1, globalStyles.mt16, globalStyles.fWidth]}>
    {
      grpList.map((item, i) => (
        <View key={i} style = {[globalStyles.h105, globalStyles.mb12, globalStyles.br16, globalStyles.ml16, globalStyles.mr16, {backgroundColor: '#F5F5F5'}]}>
          <TouchableHighlight style = {[globalStyles.br16, globalStyles.h105]}
            activeOpacity = {0.6}
            underlayColor = '#ccc'
            onPress={() => navigation.navigate('group_detail')}
            >
            <View style = {[globalStyles.h105, globalStyles.justCtr, globalStyles.fWidth, globalStyles.mr20, globalStyles.pr20, globalStyles.pl10]}>
              <Text style = {[globalStyles.fontMont, globalStyles.fw500, globalStyles.fs14, globalStyles.lh22, globalStyles.lSpace15, globalStyles.tLeft, globalStyles.ml10, globalStyles.mt10, globalStyles.pr0, {color: '#333333'}]}>{item.name}</Text>
              <View style = {[globalStyles.rowFlexShow, globalStyles.ml6]}>
                {
                  item.avatars.map((avatar, j) => (
                    <Image
                      key={j}
                      style = {[globalStyles.resizeContain, globalStyles.h28, globalStyles.w28, globalStyles.mt15, {marginLeft: j == 0 ? 0 : -5}]}
                      source={avatar}/>
                  ))
                }
                <View style = {[globalStyles.h28, globalStyles.w28, globalStyles.mt15, globalStyles.ml_5, globalStyles.br14, globalStyles.algCtr, globalStyles.justCtr, {backgroundColor: '#D9D9D9'}]}>
                  <Text style = {[globalStyles.fs14, globalStyles.lh20, globalStyles.fw700, {color: '#19504B', fontFamily: 'Bloom Speak OT'}]}>+12</Text>
                </View>
              </View>
              <View style = {globalStyles.flex1}>
                <View style = {[globalStyles.fWidth, globalStyles.h22, globalStyles.rowFlexShow, globalStyles.mt12]}>
                  <View style = {globalStyles.mt_8}>
                    <View style = {globalStyles.rowFlexShow}>
                      <Image
                        style = {[globalStyles.resizeContain, globalStyles.h13, globalStyles.mt7]}
                        source={require('../assets/img/users-group-alt.png')}/>
                      <Text style = {[globalStyles.fontMont, globalStyles.fw400, globalStyles.fs12, globalStyles.lh18, globalStyles.lSpace4, globalStyles.tLeft, globalStyles.ml0, globalStyles.pr0, globalStyles.mt5, {color: 'rgba(0, 0, 0, 0.64)'}]}>{item.memberCnt}</Text>
                    </View>
                  </View>
                  <View style = {[globalStyles.mt_8, globalStyles.ml12]}>
                    <View style = {globalStyles.rowFlexShow}>
                      <Image
                        style = {[globalStyles.resizeContain, globalStyles.h13, globalStyles.mt7]}
                        source={require('../assets/img/image-gallery.png')}/>
                      <Text style = {[globalStyles.fontMont, globalStyles.fw400, globalStyles.fs12, globalStyles.lh18, globalStyles.lSpace4, globalStyles.tLeft, globalStyles.ml0, globalStyles.pr0, globalStyles.mt5, {color: 'rgba(0, 0, 0, 0.64)'}]}>{item.photoCnt}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </TouchableHighlight>
        </View>
      ))
    }
    </ScrollView>
  );
}

export default GroupList;