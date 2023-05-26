import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import BidDetailsList from '../../components/BidDetailsList';
import BidParticipants from '../../components/BidParticipants';
import globalStyles from '../../assets/styles/GlobalStyles';

function OfferDetail({ navigation, route }) {
  const [activeIndex, changeActive] = useState(1);

  return (
    <ScrollView style={[globalStyles.flex1, globalStyles.bWhite]}>
      <View style = {[globalStyles.rowFlexShow, globalStyles.pt18, globalStyles.algStart]}>
        <View style = {globalStyles.h30}>
          <TouchableHighlight
            style = {[globalStyles.h30, globalStyles.pt5]}
            activeOpacity = {0.6}
            underlayColor = '#ccc'
            onPress={() => navigation.navigate('offers')}>
            <Image 
              style = {[globalStyles.resizeContain, globalStyles.h18, globalStyles.ml14, globalStyles.mr5, globalStyles.w18]}
              source={require('../../assets/img/angle-left.png')}/>
          </TouchableHighlight>
        </View>
        <Text
          style = {[globalStyles.fontMont, globalStyles.fs16, globalStyles.fw500, globalStyles.lSpace5, globalStyles.lh24, globalStyles.mt1, globalStyles.ml10, {color: 'rgba(0, 0, 0, 0.6)'}]}
        >Offer Details</Text>
        <View style = {[globalStyles.w50, globalStyles.h24, globalStyles.mt1, globalStyles.ml10, globalStyles.algCtr, globalStyles.justCtr, globalStyles.br4, {backgroundColor: '#D7F7F9'}]}>
          <Text
            style = {[globalStyles.fontMont, globalStyles.fs12, globalStyles.fw400, globalStyles.lSpace4, globalStyles.lh18, {color: '#1B7176'}]}
          >Open</Text>
        </View>
      </View>
      <Text style = {[globalStyles.tLeft, globalStyles.fWidth, globalStyles.ml16, globalStyles.fontMont, globalStyles.fs18, globalStyles.fw600, globalStyles.lSpace15, globalStyles.lh30, globalStyles.colorBlack, globalStyles.mt20]}>App Patent Idea: Social Network</Text>
      <View style = {[globalStyles.rowFlexShow, globalStyles.ml16, globalStyles.mr16]}>
        <View style= {[globalStyles.h120, globalStyles.mb8, globalStyles.flex1, globalStyles.pt13, globalStyles.pl14, {backgroundColor: '#F5F5F5', borderTopLeftRadius: 8, borderBottomLeftRadius: 8}]}>
          <View style = {[globalStyles.hHalf, globalStyles.fWidth]}>
            <Text style = {[globalStyles.fontMont, globalStyles.fs10, globalStyles.lh16, globalStyles.lSpace4, {color: 'black'}]}>Amount</Text>
            <Text style = {[globalStyles.lSpace15, globalStyles.fontMont, globalStyles.fw500, globalStyles.fs14, globalStyles.lh22, globalStyles.colorBlack]}>$1500</Text>
          </View>
          <View style = {[globalStyles.hHalf, globalStyles.fWidth]}>
            <Text style = {[globalStyles.fontMont, globalStyles.fs10, globalStyles.lh16, globalStyles.lSpace4, {color: 'black'}]}>Owner</Text>
            <View style = {[globalStyles.mt5, globalStyles.rowFlexShow]}>
              <Image source={require('../../assets/img/avatar/user3.png')}
                style = {[globalStyles.resizeContain, globalStyles.h24, globalStyles.w24]}/>
              <Text style = {[globalStyles.fontMont, globalStyles.fw400, globalStyles.fs12, globalStyles.lh18, globalStyles.lSpace4, globalStyles.ml7, globalStyles.mt2, {color: 'rgba(0, 0, 0, 0.6)'}]}>Christin Arc</Text>
            </View>
          </View>
        </View>
        <View style= {[globalStyles.h120, globalStyles.mb8, globalStyles.flex1, globalStyles.pt13, {backgroundColor: '#F5F5F5', borderTopRightRadius: 8, borderBottomRightRadius: 8}]}>
          <View style = {[globalStyles.hHalf, globalStyles.fWidth]}>
            <Text style = {[globalStyles.fontMont, globalStyles.fs10, globalStyles.lh16, globalStyles.lSpace4, {color: 'black'}]}>Ends in</Text>
            <View style = {[globalStyles.rowFlexShow]}>
              <Text style = {[globalStyles.lSpace15, globalStyles.fontMont, globalStyles.fw500, globalStyles.fs14, globalStyles.lh22, globalStyles.colorBlack]}>7 Days- </Text>
              <Text style = {[globalStyles.fontMont, globalStyles.fs10, globalStyles.lh16, globalStyles.lSpace4, globalStyles.colorBlack, globalStyles.fw400, globalStyles.mt7]}>14 Jan 2023</Text>
            </View>
          </View>
        </View>
      </View>
      <View style = {[globalStyles.mt15, globalStyles.ml16, globalStyles.mr16]}>
        <View style = {[globalStyles.h40, globalStyles.br24, globalStyles.bw1, globalStyles.justCtr, {borderColor: '#EFB057', backgroundColor: '#EFB057'}]}>
          <TouchableHighlight style = {globalStyles.br24}
            activeOpacity = {0.6}
            underlayColor = '#c87d12'
            onPress={() => {
              navigation.navigate('accept_offer');
            }}>
            <View style = {[globalStyles.fWidth, globalStyles.h40]}>
              <Text style = {[globalStyles.colorWhite, globalStyles.fontMont, globalStyles.fw500, globalStyles.fs16, globalStyles.lh24, globalStyles.lSpace125, globalStyles.tCenter, globalStyles.br24, globalStyles.vMid, globalStyles.mt6]}>Accept Offer</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
      <View style = {[globalStyles.ml6, globalStyles.mr6]}>
        <BidDetailsList />
      </View>
    </ScrollView>
  );
}

export default OfferDetail;