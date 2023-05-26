import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import globalStyles from '../assets/styles/GlobalStyles';

function ProjectMembers({ navigation }) {
  const memberList = [
    {
      avatar: require('../assets/img/avatar/user11.png'),
      name: 'Nina Schenk',
      phone: '+975 134455435',
    },
    {
      avatar: require('../assets/img/avatar/user9.png'),
      name: 'Nicole Kanel',
      phone: '+975 134455435',
    },
    {
      avatar: require('../assets/img/avatar/user10.png'),
      name: 'Peter Waldvogel',
      phone: '+975 134455435',
    },
    {
      avatar: require('../assets/img/avatar/user8.png'),
      name: 'Julia Lehmann',
      phone: '+975 134455435',
    },
  ];

  return (
    <View style={[globalStyles.flex1, globalStyles.mt16 ]}>
    {
      memberList.map((item, i) => (
        <View key={i} style = {[globalStyles.h68, globalStyles.fWidth, globalStyles.justCtr, globalStyles.mr40, globalStyles.mb12, globalStyles.br16, {backgroundColor: '#F5F5F5'}]}>
          <TouchableHighlight style = {[globalStyles.br16, globalStyles.h64]}
            activeOpacity = {0.6}
            underlayColor = '#ccc'
            onPress={() => {}}
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
                        source={require('../assets/img/mobile.png')}/>
                      <Text style = {[globalStyles.fontMont, globalStyles.fw400, globalStyles.fs12, globalStyles.lh18, globalStyles.lSpace4, globalStyles.tLeft, globalStyles.ml0, globalStyles.pr0, globalStyles.mt5, {color: 'rgba(0, 0, 0, 0.64)'}]}>{item.phone}</Text>
                    </View>
                  </View>
                  <Image 
                    style = {[globalStyles.resizeContain, globalStyles.h19, globalStyles.mt10]}
                    source={require('../assets/img/more-vertical.png')}/>
                </View>
              </View>
            </View>
          </TouchableHighlight>
        </View>
      ))
    }
    </View>
  );
}

export default ProjectMembers;