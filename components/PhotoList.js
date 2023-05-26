import React from 'react';
import { Dimensions, ScrollView } from 'react-native';
import { View, TouchableHighlight, Image } from 'react-native';
import globalStyles from '../assets/styles/GlobalStyles';

function PhotoList({ navigation, currentState }) {
  const photoList = [
    {
      id: '1',
      url: '../assets/img/photo1.png',
      photo: require('../assets/img/photo1.png'),
    },
    {
      id: '2',
      photo: require('../assets/img/photo2.png'),
      url: '../assets/img/photo2.png',
    },
    {
      id: '3',
      photo: require('../assets/img/photo3.png'),
      url: '../assets/img/photo3.png',
    },
    {
      id: '4',
      photo: require('../assets/img/photo4.png'),
      url: '../assets/img/photo4.png',
    },
    {
      id: '5',
      photo: require('../assets/img/photo5.png'),
      url: '../assets/img/photo5.png',
    },
    {
      id: '6',
      photo: require('../assets/img/photo6.png'),
      url: '../assets/img/photo6.png',
    },
    {
      id: '7',
      photo: require('../assets/img/photo7.png'),
      url: '../assets/img/photo7.png',
    },
    {
      id: '8',
      photo: require('../assets/img/photo8.png'),
      url: '../assets/img/photo8.png',
    },
    {
      id: '9',
      photo: require('../assets/img/photo9.png'),
      url: '../assets/img/photo9.png',
    },
    {
      id: '10',
      photo: require('../assets/img/photo2.png'),
      url: '../assets/img/photo2.png',
    },
    {
      id: '11',
      photo: require('../assets/img/photo9.png'),
      url: '../assets/img/photo9.png',
    },
    {
      id: '12',
      photo: require('../assets/img/photo7.png'),
      url: '../assets/img/photo7.png',
    },
    {
      id: '13',
      photo: require('../assets/img/photo2.png'),
      url: '../assets/img/photo2.png',
    },
    {
      id: '14',
      photo: require('../assets/img/photo9.png'),
      url: '../assets/img/photo9.png',
    },
    {
      id: '15',
      photo: require('../assets/img/photo7.png'),
      url: '../assets/img/photo7.png',
    },
  ];

  const screenWidth = Dimensions.get('window').width;
  const imgWidth = (screenWidth - 8) / 3;
  const imgHeight = imgWidth * 276 / 236;

  return (
    <ScrollView style = {[globalStyles.flex1, globalStyles.mt10, globalStyles.fWidth]}>
      <View style = {[globalStyles.flex1, globalStyles.fWidth, globalStyles.rowFlexShow, {flexWrap: 'wrap'}]}>
      {
        photoList.map((item, i) => (
          <View key={i} style = {[globalStyles.flex1, globalStyles.mb4, {marginRight: i % 3 == 2 ? 0 : 4, minWidth: '30%'}]}>
            <TouchableHighlight style = {globalStyles.fWidth}
              activeOpacity = {0.6}
              underlayColor = '#ccc'
              onPress={() => navigation.navigate('photo_detail', {id: item.id})}
              >
              <Image
                style = {[globalStyles.resizeContain, {width: imgWidth, height: imgHeight}]}
                source={item.photo}/>
            </TouchableHighlight>
          </View>
        ))
      }
      </View>
    </ScrollView>
  );
}

export default PhotoList;