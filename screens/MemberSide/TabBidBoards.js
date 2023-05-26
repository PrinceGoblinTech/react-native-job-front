import React from 'react';
import { View, Text, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import BidBoardList from '../../components/BidBoardList';
import globalStyles from '../../assets/styles/GlobalStyles';

function TabBidBoards({ navigation }) {

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
      <View style = {[globalStyles.h36, globalStyles.br34, globalStyles.ml16, globalStyles.mt20, globalStyles.mr16, globalStyles.justCtr, globalStyles.rowFlexShow, {backgroundColor: '#F5F5F5'}]}>
        <Image
          source={require('../../assets/img/search.png')}
          style = {[globalStyles.w20, globalStyles.resizeContain, globalStyles.h16, globalStyles.mt8, globalStyles.ml14]} />
        <TextInput
          placeholder = "Search Boards"
          placeholderTextColor={'rgba(0, 0, 0, 0.6)'}
          style = {[globalStyles.br34, globalStyles.pl10, globalStyles.flex1, globalStyles.fs14, globalStyles.lh24, globalStyles.fontMont, globalStyles.lSpace5, {color: 'rgba(0, 0, 0, 0.6)'}]}></TextInput>
      </View>
      <BidBoardList navigation = {navigation}/>
    </View>
  );
}

export default TabBidBoards;