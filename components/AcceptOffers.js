import React from 'react';
import { ScrollView } from 'react-native';
import { View, Text, TouchableHighlight } from 'react-native';
import globalStyles from '../assets/styles/GlobalStyles';

function AcceptOffers({ navigation, currentState }) {
  const boardList = [
    {
      title: 'App Patent Idea: Social Network',
      content: 'Do you have an original Social App idea that does not exist? We are ...',
      price: '$1500',
      accepted: 'Accept on 09/03/2023',
      bidCnt: 7,
      state: 1
    },
    {
      title: 'App Patent Idea: Social Network',
      content: 'Do you have an original Social App idea that does not exist? We are ...',
      price: '$1500',
      accepted: 'Accept on 09/03/2023',
      bidCnt: 7,
      state: 1
    },
    {
      title: 'App Patent Idea: Social Network',
      content: 'Do you have an original Social App idea that does not exist? We are ...',
      price: '$1500',
      accepted: 'Accept on 09/03/2023',
      bidCnt: 7,
      state: 1
    },
    {
      title: 'App Patent Idea: Social Network',
      content: 'Do you have an original Social App idea that does not exist? We are ...',
      price: '$1500',
      accepted: 'Accept on 09/03/2023',
      bidCnt: 7,
      state: 1
    },
  ];

  return (
    <ScrollView style = {[globalStyles.flex1, globalStyles.mt16, globalStyles.fWidth]}>
    {
      boardList.map((item, i) => (
        <View key={i} style = {[globalStyles.h163, globalStyles.mb12, globalStyles.br16, globalStyles.ml16, globalStyles.mr16, {backgroundColor: '#F5F5F5'}]}>
          <TouchableHighlight style = {[globalStyles.br16, globalStyles.h163]}
            activeOpacity = {0.6}
            underlayColor = '#ccc'
            // onPress={() => navigation.navigate('partner_bid_details', {state: item.state})}
            >
            <View style = {[globalStyles.h163, globalStyles.pr16, globalStyles.pl16, globalStyles.pt13]}>
              <View style = {globalStyles.rowFlexShow}>
                <Text style = {[globalStyles.fontMont, globalStyles.fs12, globalStyles.lh18, globalStyles.lSpace15, globalStyles.fw400, globalStyles.flex1, {color: 'rgba(0, 0, 0, 0.38)'}]}>{item.accepted}</Text>
                <View style = {[globalStyles.mt_5, globalStyles.w80, globalStyles.h26, globalStyles.br4, globalStyles.algCtr, globalStyles.justCtr, {backgroundColor: '#C4F1D2'}]}>
                  <Text style = {[globalStyles.fontMont, globalStyles.fs12, globalStyles.lh18, globalStyles.lSpace4, globalStyles.fw400, {color: '#00B53A'}]}>Accepted</Text>
                </View>
              </View>
              <Text style = {[globalStyles.fontMont, globalStyles.fw500, globalStyles.fs14, globalStyles.lh22, globalStyles.lSpace15, globalStyles.tLeft, globalStyles.mt10, globalStyles.pr0, {color: '#333333'}]}>{item.title}</Text>
              <Text style = {[globalStyles.fontMont, globalStyles.fw400, globalStyles.fs14, globalStyles.lh24, globalStyles.lSpace5, globalStyles.tLeft, globalStyles.mt10, globalStyles.pr0, {color: 'rgba(0, 0, 0, 0.6)'}]}>{item.content}</Text>
              <View style = {[globalStyles.rowFlexShow, globalStyles.mt12]}>
                <Text style = {[globalStyles.colorBlack, globalStyles.fontMont, globalStyles.fw500, globalStyles.fs14, globalStyles.lh22, globalStyles.lSpace15, globalStyles.tLeft, globalStyles.flex1]}>{item.price}</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
      ))
    }
    </ScrollView>
  );
}

export default AcceptOffers;