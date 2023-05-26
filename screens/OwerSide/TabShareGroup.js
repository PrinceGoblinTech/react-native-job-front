import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import GroupList from '../../components/GroupList';
import globalStyles from '../../assets/styles/GlobalStyles';

function TabShareGroup({ navigation }) {

  return (
    <View style={[globalStyles.flex1, globalStyles.algCtr, globalStyles.bWhite]}>
      <View style = {[globalStyles.rowFlexShow, globalStyles.pt18, globalStyles.algStart]}>
        <Image 
          style = {[globalStyles.resizeContain, globalStyles.h18, globalStyles.ml14, globalStyles.mr15]}
          source={require('../../assets/img/menu-right-alt.png')}/>
        <Text
          style = {[globalStyles.flex1, globalStyles.fontMont, globalStyles.fs16, globalStyles.fw500, globalStyles.lSpace5, globalStyles.lh24, globalStyles.mt_4, {color: 'rgba(0, 0, 0, 0.6)'}]}
        >Share Photo</Text>
        <Image 
          style = {[globalStyles.resizeContain, globalStyles.h18, globalStyles.mr15]}
          source={require('../../assets/img/bell.png')}/>
      </View>
      <View style = {[globalStyles.h36, globalStyles.br34, globalStyles.ml16, globalStyles.mt20, globalStyles.mr16, {backgroundColor: '#F5F5F5'}, globalStyles.justCtr, globalStyles.rowFlexShow]}>
        <Image
          source={require('../../assets/img/search.png')}
          style = {[globalStyles.w20, globalStyles.resizeContain, globalStyles.h16, globalStyles.mt8, globalStyles.ml14]}/>
        <TextInput
          placeholder = "Search Groups"
          placeholderTextColor={'rgba(0, 0, 0, 0.6)'}
          style = {[globalStyles.br34, globalStyles.pl10, globalStyles.flex1, globalStyles.fs14, globalStyles.lh24, globalStyles.fontMont, globalStyles.lSpace5, {color: 'rgba(0, 0, 0, 0.6)'}]}></TextInput>
      </View>
      <GroupList navigation = {navigation}/>
      <View style = {[globalStyles.w48, globalStyles.h48, {backgroundColor: '#EFB057'}, globalStyles.br24, globalStyles.posAbsolute, globalStyles.b8, globalStyles.r8]}>
        <TouchableHighlight
          onPress={() => navigation.navigate('create_group')}
          activeOpacity = {0.6}
          underlayColor = '#c87d12'
          style = {[globalStyles.w48, globalStyles.h48, globalStyles.br24, globalStyles.algCtr, globalStyles.justCtr]}>
          <MaterialCommunityIcons
            name='plus'
            color='white'
            size = {28}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default TabShareGroup;