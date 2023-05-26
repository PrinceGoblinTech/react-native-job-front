import React, {useState} from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import PartnerBidsList from '../../components/PartnerBidsList';
import MyProposals from '../../components/MyProposals';
import AcceptedBids from '../../components/AcceptedBids';
import globalStyles from '../../assets/styles/GlobalStyles';

function TabPartnerBids({ navigation }) {
  const [activeIndex, changeActive] = useState(1);

  return (
    <View style={[globalStyles.flex1, globalStyles.algCtr, globalStyles.bWhite]}>
      <View style = {[globalStyles.rowFlexShow, globalStyles.pt18, globalStyles.algStart]}>
        <Image 
          style = {[globalStyles.resizeContain, globalStyles.h18, globalStyles.ml14, globalStyles.mr15]}
          source={require('../../assets/img/menu-right-alt.png')}/>
        <Text
          style = {[globalStyles.flex1, globalStyles.fontMont, globalStyles.fs16, globalStyles.fw500, globalStyles.lSpace5, globalStyles.lh24, globalStyles.mt_4, {color: 'rgba(0, 0, 0, 0.6)'}]}
        >Bid Boards</Text>
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
              <Text style = {[{color: activeIndex == 1 ? '#C87D12' : 'rgba(0, 0, 0, 0.6)'}, globalStyles.fontMont, globalStyles.fw400, globalStyles.fs14, globalStyles.lh22, globalStyles.lSpace15, globalStyles.tCenter, globalStyles.br4, globalStyles.vMid, globalStyles.mt3, globalStyles.pl8, globalStyles.pr8]}>Boards</Text>
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
              <Text style = {[{color: activeIndex == 2 ? '#C87D12' : 'rgba(0, 0, 0, 0.6)'}, globalStyles.fontMont, globalStyles.fw400, globalStyles.fs14, globalStyles.lh22, globalStyles.lSpace15, globalStyles.tCenter, globalStyles.br4, globalStyles.vMid, globalStyles.mt3, globalStyles.pl8, globalStyles.pr8]}>My Proposals</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style = {[globalStyles.h32, globalStyles.br4, globalStyles.justCtr, {backgroundColor: activeIndex == 3 ? '#FFE8C8' : '#F5F5F5'}]}>
          <TouchableHighlight style = {globalStyles.br4}
            activeOpacity = {0.6}
            underlayColor = '#ccc'
            onPress={() => {
              changeActive(3);
            }}>
            <View style = {[globalStyles.fWidth, globalStyles.h32]}>
              <Text style = {[{color: activeIndex == 3 ? '#C87D12' : 'rgba(0, 0, 0, 0.6)'}, globalStyles.fontMont, globalStyles.fw400, globalStyles.fs14, globalStyles.lh22, globalStyles.lSpace15, globalStyles.tCenter, globalStyles.br4, globalStyles.vMid, globalStyles.mt3, globalStyles.pl8, globalStyles.pr8]}>Accepted Bids</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
      {
        activeIndex == 1 ? 
        <View style = {[globalStyles.h36, globalStyles.br34, globalStyles.ml16, globalStyles.mt20, globalStyles.mr16, globalStyles.justCtr, globalStyles.rowFlexShow, {backgroundColor: '#F5F5F5'}]}>
          <Image
            source={require('../../assets/img/search.png')}
            style = {[globalStyles.w20, globalStyles.resizeContain, globalStyles.h16, globalStyles.mt8, globalStyles.ml14]} />
          <TextInput
            placeholder = "Search Boards"
            placeholderTextColor={'rgba(0, 0, 0, 0.6)'}
            style = {[globalStyles.br34, globalStyles.pl10, globalStyles.flex1, globalStyles.fs14, globalStyles.lh24, globalStyles.fontMont, globalStyles.lSpace5, {color: 'rgba(0, 0, 0, 0.6)'}]}></TextInput>
        </View> : ''
      }
      {
        activeIndex == 1 ? 
        <PartnerBidsList navigation = {navigation}/> : 
        (activeIndex == 2 ? <MyProposals /> : <AcceptedBids />)
      }
    </View>
  );
}

export default TabPartnerBids;