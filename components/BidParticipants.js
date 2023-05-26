import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import globalStyles from '../assets/styles/GlobalStyles';

function BidParticipants({ navigation }) {
  const bidList = [
    {
      avatar: require('../assets/img/avatar/user15.png'),
      name: 'Lina Moretti',
      placed: 'Placed on 12 Jan 2020',
      bid: 1300,
      content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout ...'
    },
    {
      avatar: require('../assets/img/avatar/user16.png'),
      name: 'Janik Gehrig',
      placed: 'Placed on 12 Jan 2020',
      bid: 1300,
      content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout ...'
    },
    {
      avatar: require('../assets/img/avatar/user17.png'),
      name: 'Samuel Keller',
      placed: 'Placed on 12 Jan 2020',
      bid: 1300,
      content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout ...'
    },
    {
      avatar: require('../assets/img/avatar/user18.png'),
      name: 'Sabine Fah',
      placed: 'Placed on 12 Jan 2020',
      bid: 1300,
      content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout ...'
    },
  ];

  return (
    <View style={[globalStyles.flex1, globalStyles.ml16, globalStyles.mr16, globalStyles.mt16]}>
    {
      bidList.map((item, i) => (
        <View key={i} style = {[globalStyles.h124, globalStyles.fWidth, globalStyles.mr40, globalStyles.mb12, globalStyles.br16, globalStyles.bw1, {borderColor: 'rgba(0, 0, 0, 0.08)'}]}>
          <TouchableHighlight style = {[globalStyles.br16, globalStyles.h124]}
            activeOpacity = {0.6}
            underlayColor = '#ccc'
            onPress={() => {}}
            >
            <View style = {[globalStyles.h124, globalStyles.fWidth]}>
              <View style = {[globalStyles.fWidth, globalStyles.rowFlexShow, globalStyles.algStart, globalStyles.mr20, globalStyles.pr16, globalStyles.pl16]}>
                <Image
                  style = {[globalStyles.resizeContain, globalStyles.h32, globalStyles.w32, globalStyles.mt10]}
                  source={item.avatar}/>
                <View style = {[globalStyles.flex1, globalStyles.h64, globalStyles.ml14]}>
                  <View style = {[globalStyles.fWidth, globalStyles.h22, globalStyles.rowFlexShow, globalStyles.mt8]}>
                    <View style = {globalStyles.flex1}>
                      <Text style = {[globalStyles.fontMont, globalStyles.fw500, globalStyles.fs14, globalStyles.lh24, globalStyles.lSpace5, globalStyles.tLeft, globalStyles.ml0, globalStyles.pr0, {color: 'rgba(0, 0, 0, 0.89)'}]}>{item.name}</Text>
                      <Text style = {[globalStyles.fontMont, globalStyles.fw400, globalStyles.fs10, globalStyles.lh16, globalStyles.lSpace4, globalStyles.tLeft, globalStyles.ml0, globalStyles.pr0, {color: 'rgba(0, 0, 0, 0.64)'}]}>{item.placed}</Text>
                    </View>
                    <View style = {globalStyles.mt4}>
                      <Text style = {[globalStyles.tRight, globalStyles.colorBlack, globalStyles.fontMont, globalStyles.fw400, globalStyles.fs10, globalStyles.lh16, globalStyles.lSpace4]}>Bid</Text>
                      <Text style = {[globalStyles.tRight, globalStyles.colorBlack, globalStyles.fontMont, globalStyles.fw500, globalStyles.fs14, globalStyles.lh16, globalStyles.lSpace15]}>$ {item.bid}</Text>
                    </View>
                  </View>
                </View>
              </View>
              <Text style = {[globalStyles.fontMont, globalStyles.fw400, globalStyles.fs12, globalStyles.lh18, globalStyles.lSpace14, globalStyles.ml16, globalStyles.mr16, {color: 'rgba(0, 0, 0, 0.6)'}]}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout ...</Text>
            </View>
          </TouchableHighlight>
        </View>
      ))
    }
    </View>
  );
}

export default BidParticipants;