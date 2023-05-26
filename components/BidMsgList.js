import React from 'react';
import { ScrollView } from 'react-native';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import globalStyles from '../assets/styles/GlobalStyles';

function BidMsgList({ navigation}) {
  const msgList = [
    {
      avatar: require('../assets/img/avatar/user3.png'),
      name: 'Christin Arc',
      isNew: true,
      unreadCnt: 2,
      lastMsg: 'How you doing?',
      lastTime: '10 min ago'
    },
    {
      avatar: require('../assets/img/avatar/user2.png'),
      name: 'John Jacobs',
      isNew: false,
      unreadCnt: 0,
      lastMsg: 'How you doing?',
      lastTime: '10 min ago'
    },
    {
      avatar: require('../assets/img/avatar/user6.png'),
      name: 'Nikola Tesla',
      isNew: false,
      unreadCnt: 0,
      lastMsg: 'How you doing?',
      lastTime: '2 Days ago'
    },
    {
      avatar: require('../assets/img/avatar/user3.png'),
      name: 'Christin Arc',
      isNew: false,
      unreadCnt: 0,
      lastMsg: 'How you doing?',
      lastTime: '2 Days ago'
    },
    {
      avatar: require('../assets/img/avatar/user5.png'),
      name: 'Ronald Edwards',
      isNew: true,
      unreadCnt: 2,
      lastMsg: 'How you doing?',
      lastTime: '2 Days ago'
    },
    {
      avatar: require('../assets/img/avatar/user4.png'),
      name: 'Leman',
      isNew: true,
      unreadCnt: 2,
      lastMsg: 'How you doing?',
      lastTime: '2 days ago'
    },
  ];

  return (
    <ScrollView style = {[globalStyles.flex1, globalStyles.fWidth]}>
      {
        msgList.map((item, i) => (
          <View key={i} style = {[globalStyles.h64, globalStyles.ml20, globalStyles.fWidth, globalStyles.justCtr, globalStyles.mr40, {borderBottomColor: 'rgba(0, 0, 0, 0.08)', borderBottomWidth: 1}]}>
            <TouchableHighlight style = {[globalStyles.h64, globalStyles.mr20]}
              activeOpacity = {0.6}
              underlayColor = '#ccc'
              onPress={() => navigation.navigate('bid_msg_details')}
              >
              <View style = {[globalStyles.h64, globalStyles.justCtr, globalStyles.fWidth, globalStyles.rowFlexShow, globalStyles.algStart, globalStyles.mr20, globalStyles.pr20]}>
                <Image
                  style = {[globalStyles.resizeContain, globalStyles.h32, globalStyles.w32, globalStyles.mt15]}
                  source={item.avatar}/>
                <View style = {[globalStyles.flex1, globalStyles.h64, globalStyles.ml14]}>
                  <View style = {[globalStyles.fWidth, globalStyles.h22, globalStyles.rowFlexShow, globalStyles.mt12]}>
                    <Text style = {[globalStyles.colorBlack, globalStyles.fontMont, globalStyles.fw500, globalStyles.fs14, globalStyles.lh22, globalStyles.lSpace15, globalStyles.tLeft, globalStyles.ml0, globalStyles.pr0, globalStyles.br8, globalStyles.flex1]}>{item.name}</Text>
                    <Text style = {[globalStyles.fontMont, globalStyles.fw400, globalStyles.fs12, globalStyles.lh18, globalStyles.lSpace4, globalStyles.tRight, globalStyles.ml0, globalStyles.pr0, {color: 'rgba(0, 0, 0, 0.38)'}]}>{item.lastTime}</Text>
                  </View>
                  <View style = {[globalStyles.fWidth, globalStyles.h32, globalStyles.rowFlexShow]}>
                    <Text style = {[globalStyles.fontMont, globalStyles.fw400, globalStyles.fs12, globalStyles.lh18, globalStyles.lSpace4, globalStyles.tLeft, globalStyles.ml0, globalStyles.pr0, {color: (item.isNew) ? '#EFB057' : 'rgba(0, 0, 0, 0.6)'}]}>{item.lastMsg}</Text>
                    {
                      item.isNew && item.unreadCnt ? 
                      <Text style = {[globalStyles.br8, globalStyles.colorWhite, globalStyles.h16, globalStyles.w16, globalStyles.tCenter, globalStyles.fontMont, globalStyles.fw400, globalStyles.fs12, globalStyles.lh16, globalStyles.lSpace4, globalStyles.ml10, globalStyles.mt2, {backgroundColor: '#EFB057'}]}>{item.unreadCnt}</Text> : ''
                    }
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

export default BidMsgList;