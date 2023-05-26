import React, {useState} from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import globalStyles from '../../assets/styles/GlobalStyles';
import ReceiveOffers from '../../components/ReceiveOffers';
import AcceptOffers from '../../components/AcceptOffers';

function TabOffers({ navigation }) {
  const [activeIndex, changeActive] = useState(1);

  return (
    <View style={[globalStyles.flex1, globalStyles.algCtr, globalStyles.bWhite]}>
      <View style = {[globalStyles.rowFlexShow, globalStyles.pt18, globalStyles.algStart]}>
        <Image 
          style = {[globalStyles.resizeContain, globalStyles.h18, globalStyles.ml14, globalStyles.mr15]}
          source={require('../../assets/img/menu-right-alt.png')}/>
        <Text
          style = {[globalStyles.flex1, globalStyles.fontMont, globalStyles.fs16, globalStyles.fw500, globalStyles.lSpace5, globalStyles.lh24, globalStyles.mt_4, {color: 'rgba(0, 0, 0, 0.6)'}]}
        >Offer</Text>
        <Image 
          style = {[globalStyles.resizeContain, globalStyles.h18, globalStyles.mr15]}
          source={require('../../assets/img/bell.png')}/>
      </View>
      <View style = {[globalStyles.mt16, globalStyles.ml30, globalStyles.rowFlexShow, globalStyles.algStart, globalStyles.fWidth]}>
        <View style = {[globalStyles.h32, globalStyles.br4, globalStyles.mr8, globalStyles.justCtr, {backgroundColor: activeIndex == 1 ? '#FFE8C8' : '#F5F5F5'}]}>
          <TouchableHighlight style = {globalStyles.br4}
            activeOpacity = {0.6}
            underlayColor = '#ccc'
            onPress={() => {
              changeActive(1);
            }}>
            <View style = {[globalStyles.fWidth, globalStyles.h32]}>
              <Text style = {[{color: activeIndex == 1 ? '#C87D12' : 'rgba(0, 0, 0, 0.6)'}, globalStyles.fontMont, globalStyles.fw400, globalStyles.fs14, globalStyles.lh22, globalStyles.lSpace15, globalStyles.tCenter, globalStyles.br4, globalStyles.vMid, globalStyles.mt3, globalStyles.pl8, globalStyles.pr8]}>Offers</Text>
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
              <Text style = {[{color: activeIndex == 2 ? '#C87D12' : 'rgba(0, 0, 0, 0.6)'}, globalStyles.fontMont, globalStyles.fw400, globalStyles.fs14, globalStyles.lh22, globalStyles.lSpace15, globalStyles.tCenter, globalStyles.br4, globalStyles.vMid, globalStyles.mt3, globalStyles.pl8, globalStyles.pr8]}>Accepted Offers</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
      {
        activeIndex == 1 ? 
        <ReceiveOffers navigation = {navigation}/> : 
        <AcceptOffers navigation = {navigation}/>
      }
    </View>
  );
}

export default TabOffers;