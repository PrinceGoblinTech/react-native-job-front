import React from 'react';
import { View, Image, TouchableHighlight } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import globalStyles from '../../assets/styles/GlobalStyles';

function ViewPhoto({ navigation, route }) {
  const photoList = {
    1: {
      id: '1',
      url: '../../assets/img/photo1.png',
      photo: require('../../assets/img/photo1.png'),
    },
    2: {
      id: '2',
      photo: require('../../assets/img/photo2.png'),
      url: '../../assets/img/photo2.png',
    },
    3: {
      id: '3',
      photo: require('../../assets/img/photo3.png'),
      url: '../../assets/img/photo3.png',
    },
    4: {
      id: '4',
      photo: require('../../assets/img/photo4.png'),
      url: '../../assets/img/photo4.png',
    },
    5: {
      id: '5',
      photo: require('../../assets/img/photo5.png'),
      url: '../../assets/img/photo5.png',
    },
    6: {
      id: '6',
      photo: require('../../assets/img/photo6.png'),
      url: '../../assets/img/photo6.png',
    },
    7: {
      id: '7',
      photo: require('../../assets/img/photo7.png'),
      url: '../../assets/img/photo7.png',
    },
    8: {
      id: '8',
      photo: require('../../assets/img/photo8.png'),
      url: '../../assets/img/photo8.png',
    },
    9: {
      id: '9',
      photo: require('../../assets/img/photo9.png'),
      url: '../../assets/img/photo9.png',
    },
    10: {
      id: '10',
      photo: require('../../assets/img/photo2.png'),
      url: '../../assets/img/photo2.png',
    },
    11: {
      id: '11',
      photo: require('../../assets/img/photo9.png'),
      url: '../../assets/img/photo9.png',
    },
    12: {
      id: '12',
      photo: require('../../assets/img/photo7.png'),
      url: '../../assets/img/photo7.png',
    },
  };
  
  return (
    <View style={globalStyles.flex1}>
      <Image
        style = {[globalStyles.fWidth, globalStyles.flex1, globalStyles.hFull, globalStyles.resizeCover]}
        source={photoList[route.params.id].photo}
      />
      <View style = {[globalStyles.w30, globalStyles.h30, {backgroundColor: 'rgba(0, 0, 0, 0.32)'}, globalStyles.br15, globalStyles.posAbsolute, globalStyles.t8, globalStyles.l8]}>
        <TouchableHighlight
          onPress={() => navigation.navigate('group_detail')}
          activeOpacity = {0.6}
          underlayColor = '#c87d12'
          style = {[globalStyles.w30, globalStyles.h30, globalStyles.br15, globalStyles.algCtr, globalStyles.justCtr]}>
            <MaterialCommunityIcons
              name='chevron-left'
              color='white'
              size = {20}
            />
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default ViewPhoto;