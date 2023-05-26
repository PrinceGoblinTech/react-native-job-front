import React from 'react';
import { ScrollView } from 'react-native';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { Input } from 'react-native-elements';
import globalStyles from '../../assets/styles/GlobalStyles';

function BidMsgDetail({ navigation }) {
  const msgList = [
    {
      date: '27 Jun 2023',
      user: '',
      data: [
        {
          owner: true,
          content: 'Hey how you doing today!',
          time: '10:00 PM'
        },
        {
          owner: false,
          content: 'I am doing good, Wbu?',
          time: '10:00 PM'
        },
        {
          owner: true,
          content: 'so what are you doing now?',
          time: '10:00 PM'
        },
        {
          owner: false,
          content: 'Nothing much',
          time: '12:00 PM'
        },
      ]
    },
    {
      date: '27 Jun 2023',
      user: '',
      data: [
        {
          owner: false,
          content: 'hey can you ask for??',
          time: '2 min ago'
        },
      ]
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
            onPress={() => navigation.navigate('bid_msg')}>
            <Image 
              style = {[globalStyles.resizeContain, globalStyles.h18, globalStyles.ml14, globalStyles.mr5, globalStyles.w18]}
              source={require('../../assets/img/angle-left.png')}/>
          </TouchableHighlight>
        </View>
        <Image 
          style = {[globalStyles.resizeContain, globalStyles.h24, globalStyles.mt2]}
          source={require('../../assets/img/avatar/user7.png')}/>
        <Text
          style = {[globalStyles.fontMont, globalStyles.fs16, globalStyles.fw500, globalStyles.lSpace5, globalStyles.lh24, globalStyles.mt1, {color: 'rgba(0, 0, 0, 0.6)'}]}
        >Christin Arc</Text>
        <View style = {globalStyles.flex1}></View>
        <Image 
          style = {[globalStyles.resizeContain, globalStyles.h18, globalStyles.mr15, globalStyles.mt3]}
          source={require('../../assets/img/more-vertical.png')}/>
      </View>
      <View style = {[globalStyles.flex1, globalStyles.fWidth, globalStyles.mt30]}>
        <ScrollView style = {[globalStyles.ml20, globalStyles.mr20]}>
          {
            msgList.map((item, i) => (
              <View key={i}>
                <View style = {[globalStyles.mt10, globalStyles.algCtr, {borderTopColor: 'rgba(0, 0, 0, 0.12)', borderTopWidth: 1}]}>
                  <Text style = {[globalStyles.posRelative, globalStyles.t_10, globalStyles.zIndex4, globalStyles.bWhite, globalStyles.w80, globalStyles.tCenter, globalStyles.fontMont, globalStyles.fw400, globalStyles.fs12, globalStyles.lh18, globalStyles.pb2, {color: 'rgba(0, 0, 0, 0.38)'}]}>{item.date}</Text>
                  {
                    item.data.map((subItem, j) => (
                      <View key={j} style = {[globalStyles.fWidth, {alignItems: subItem.owner ? 'flex-end' : 'flex-start'}]}>
                        <Text style = {[globalStyles.mh40, globalStyles.br40, globalStyles.p10, globalStyles.pl14, globalStyles.pr14, globalStyles.fontMont, globalStyles.fw400, globalStyles.lSpace5, globalStyles.fs14, globalStyles.lh24, {maxWidth: '70%', textAlign: (subItem.owner) ? 'right' : 'left', backgroundColor: (subItem.owner) ? '#FFE8C8' : '#F5F5F5', color: (subItem.owner) ? '#C87D12' : 'rgba(0, 0, 0, 0.6)'}]}>{subItem.content}</Text>
                        <Text style = {[globalStyles.fontMont, globalStyles.fw400, globalStyles.lSpace5, globalStyles.fs12, globalStyles.lh18, globalStyles.mt8, globalStyles.mb10, {textAlign: (subItem.owner) ? 'right' : 'left', color: 'rgba(0, 0, 0, 0.38)', marginRight: (subItem.owner) ? 16 : 0, marginLeft: (subItem.owner) ? 0 : 16}]}>{subItem.time}</Text>
                      </View>
                    ))
                  }
                </View>
              </View>
            ))
          }
        </ScrollView>
      </View>
      <View style = {[globalStyles.rowFlexShow, globalStyles.algStart, globalStyles.h40]}>
        <View style = {globalStyles.h40}>
          <TouchableHighlight
            style = {[globalStyles.h40, globalStyles.pt5]}
            activeOpacity = {0.6}
            underlayColor = '#ccc'>
            <Image 
              style = {[globalStyles.resizeContain, globalStyles.h18, globalStyles.ml14, globalStyles.mr5, globalStyles.w18]}
              source={require('../../assets/img/image-upload.png')}/>
          </TouchableHighlight>
        </View>
        <View style = {[globalStyles.flex1, globalStyles.h40]}>
          <Input 
            placeholder='You Message'
            style = {[globalStyles.fontMont, globalStyles.fs14, globalStyles.lSpace5, globalStyles.h40, globalStyles.mt_10, globalStyles.pb0, globalStyles.bw1, globalStyles.br10, globalStyles.pl14, {borderBottomWidth: 1, borderColor: '#DCDCDD'}]}/>
        </View>
        <Image 
          style = {[globalStyles.resizeContain, globalStyles.h18, globalStyles.mr15, globalStyles.mt3]}
          source={require('../../assets/img/send-right.png')}/>
      </View>
    </View>
  );
}

export default BidMsgDetail;