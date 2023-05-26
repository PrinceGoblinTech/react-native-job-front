import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import globalStyles from '../../assets/styles/GlobalStyles';

function InviteMember({ navigation, route }) {
  const memberList = [
    {
      avatar: require('../../assets/img/avatar/user11.png'),
      name: 'Nina Schenk',
      phone: '+975 134455435',
    },
    {
      avatar: require('../../assets/img/avatar/user9.png'),
      name: 'Nicole Kanel',
      phone: '+975 134455435',
    },
    {
      avatar: require('../../assets/img/avatar/user10.png'),
      name: 'Peter Waldvogel',
      phone: '+975 134455435',
    },
    {
      avatar: require('../../assets/img/avatar/user8.png'),
      name: 'Julia Lehmann',
      phone: '+975 134455435',
    },
  ];

  return (
    <View style = {[globalStyles.flex1, globalStyles.fWidth, globalStyles.bWhite]}>
      <View style = {[globalStyles.rowFlexShow, globalStyles.pt18, globalStyles.algStart]}>
        <View style = {globalStyles.h30}>
          <TouchableHighlight
            style = {[globalStyles.h30, globalStyles.pt5]}
            activeOpacity = {0.6}
            underlayColor = '#ccc'
            onPress={() => navigation.navigate('group_detail')}>
            <Image 
              style = {[globalStyles.resizeContain, globalStyles.h18, globalStyles.ml14, globalStyles.mr5, globalStyles.w18]}
              source={require('../../assets/img/angle-left.png')}/>
          </TouchableHighlight>
        </View>
        <Text
          style = {[globalStyles.fontMont, globalStyles.fs16, globalStyles.fw500, globalStyles.lSpace5, globalStyles.lh24, globalStyles.ml10, globalStyles.mt1, {color: 'rgba(0, 0, 0, 0.6)'}]}
        >Invite Members</Text>
        <View style = {globalStyles.flex1}></View>
      </View>
      <View style = {[globalStyles.h36, globalStyles.br34, globalStyles.ml16, globalStyles.mt20, globalStyles.mr16, globalStyles.justCtr, globalStyles.rowFlexShow, {backgroundColor: '#F5F5F5'}]}>
        <Image
          source={require('../../assets/img/search.png')}
          style = {[globalStyles.w20, globalStyles.resizeContain, globalStyles.h16, globalStyles.mt8, globalStyles.ml14]} />
        <TextInput
          placeholder = "Search People"
          placeholderTextColor={'rgba(0, 0, 0, 0.6)'}
          style = {[globalStyles.br34, globalStyles.pl10, globalStyles.flex1, globalStyles.fs14, globalStyles.lh24, globalStyles.fontMont, globalStyles.lSpace5, {color: 'rgba(0, 0, 0, 0.6)'}]}></TextInput>
      </View>
      <View style={[globalStyles.flex1, globalStyles.ml16, globalStyles.mr16, globalStyles.mt16]}>
      {
        memberList.map((item, i) => (
          <View key={i} style = {[globalStyles.h68, globalStyles.fWidth, globalStyles.justCtr, globalStyles.mr40, globalStyles.mb12, globalStyles.br16, {backgroundColor: '#F5F5F5'}]}>
            <TouchableHighlight style = {[globalStyles.br16, globalStyles.h64]}
              // // activeOpacity = {0.6}
              // // underlayColor = '#c87d12'
              // onPress={() => {}}
              >
              <View style = {[globalStyles.h68, globalStyles.justCtr, globalStyles.fWidth, globalStyles.rowFlexShow, globalStyles.algStart, globalStyles.mr20, globalStyles.pr20, globalStyles.pl10]}>
                <Image
                  style = {[globalStyles.resizeContain, globalStyles.h32, globalStyles.w32, globalStyles.mt15]}
                  source={item.avatar}/>
                <View style = {[globalStyles.flex1, globalStyles.h64, globalStyles.ml14]}>
                  <View style = {[globalStyles.fWidth, globalStyles.h22, globalStyles.rowFlexShow, globalStyles.mt12]}>
                    <View style = {[globalStyles.flex1, globalStyles.mt_8]}>
                      <Text style = {[globalStyles.fontMont, globalStyles.fw500, globalStyles.fs14, globalStyles.lh24, globalStyles.lSpace5, globalStyles.tLeft, globalStyles.ml0, globalStyles.pr0, {color: 'rgba(0, 0, 0, 0.89)'}]}>{item.name}</Text>
                      <View style = {globalStyles.rowFlexShow}>
                        <Image
                          style = {[globalStyles.resizeContain, globalStyles.h13, globalStyles.mt7, globalStyles.mr5]}
                          source={require('../../assets/img/mobile.png')}/>
                        <Text style = {[globalStyles.fontMont, globalStyles.fw400, globalStyles.fs12, globalStyles.lh18, globalStyles.lSpace4, globalStyles.tLeft, globalStyles.ml0, globalStyles.pr0, globalStyles.mt5, {color: 'rgba(0, 0, 0, 0.64)'}]}>{item.phone}</Text>
                      </View>
                    </View>
                    <BouncyCheckbox 
                      style = {[globalStyles.mt15, globalStyles.mr_10]}
                      size = {16}
                      innerIconStyle = {[globalStyles.borderBlack, globalStyles.br2, globalStyles.mr0]}
                      iconStyle = {[globalStyles.borderBlack, globalStyles.br2, globalStyles.mr_5]}/>
                  </View>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        ))
      }
      </View>
      <View style = {[globalStyles.mt30, globalStyles.ml16, globalStyles.mr16]}>
        <View style = {[globalStyles.h40, globalStyles.br24, globalStyles.bw1, globalStyles.justCtr, {borderColor: '#EFB057', backgroundColor: '#EFB057'}]}>
          <TouchableHighlight style = {globalStyles.br24}
            activeOpacity = {0.6}
            underlayColor = '#c87d12'
            onPress={() => {
              navigation.navigate('group_detail');
            }}>
            <View style = {[globalStyles.fWidth, globalStyles.h40]}>
              <Text style = {[globalStyles.colorWhite, globalStyles.fontMont, globalStyles.fw500, globalStyles.fs16, globalStyles.lh24, globalStyles.lSpace125, globalStyles.tCenter, globalStyles.br24, globalStyles.vMid, globalStyles.mt6]}>Invite Members</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style = {[globalStyles.h40, globalStyles.mt10, globalStyles.br24, globalStyles.bw1, globalStyles.bWhite, globalStyles.justCtr, globalStyles.mb10, {borderColor: '#EFB057'}]}>
          <TouchableHighlight style = {globalStyles.br24}
            activeOpacity = {0.6}
            underlayColor = '#ccc'
            onPress={() => {
              navigation.navigate('group_detail');
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

export default InviteMember;