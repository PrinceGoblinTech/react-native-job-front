import React from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import globalStyles from '../../assets/styles/GlobalStyles';

function AppointmentDetail({ navigation, route }) {

  return (
    <View style = {[globalStyles.flex1, globalStyles.fWidth, globalStyles.bWhite]}>
      <View style = {[globalStyles.rowFlexShow, globalStyles.pt18, globalStyles.algStart]}>
        <View style = {globalStyles.h30}>
          <TouchableHighlight
            style = {[globalStyles.h30, globalStyles.pt5]}
            activeOpacity = {0.6}
            underlayColor = '#ccc'
            onPress={() => navigation.navigate('appointments')}>
            <Image 
              style = {[globalStyles.resizeContain, globalStyles.h18, globalStyles.ml14, globalStyles.mr5, globalStyles.w18]}
              source={require('../../assets/img/angle-left.png')}/>
          </TouchableHighlight>
        </View>
        <Text
          style = {[globalStyles.fontMont, globalStyles.fs16, globalStyles.fw500, globalStyles.lSpace5, globalStyles.lh24, globalStyles.ml10, globalStyles.mt1, {color: 'rgba(0, 0, 0, 0.6)'}]}
        >Appointment</Text>
        <View style = {globalStyles.flex1}></View>
        <View style = {globalStyles.h30}>
          <TouchableHighlight
            style = {globalStyles.h30}
            activeOpacity = {0.6}
            underlayColor = '#ccc'
            onPress={() => navigation.navigate('edit_appointment')}>
            <Image 
              style = {[globalStyles.resizeContain, globalStyles.h18, globalStyles.mr10, globalStyles.mt3]}
              source={require('../../assets/img/edit.png')}/>
          </TouchableHighlight>
        </View>
      </View>
      <ScrollView>
        <View style = {[globalStyles.ml16, globalStyles.mr16, globalStyles.mt20, globalStyles.pl4]}>
          <View style = {styles.itemSubWrapper}>
            <Text style = {[globalStyles.fontMont, globalStyles.fw400, globalStyles.fs12, globalStyles.lh18, globalStyles.lSpace4, globalStyles.tLeft, {color: 'rgba(0, 0, 0, 0.6)'}]}>Appointment Title</Text>
            <Text style = {[globalStyles.fontMont, globalStyles.fw400, globalStyles.fs14, globalStyles.lh24, globalStyles.lSpace5, globalStyles.tLeft, {color: 'rgba(0, 0, 0, 0.87)'}]}>Risk Management Description</Text>
          </View>
        </View>
        <View style = {[globalStyles.ml16, globalStyles.mr16, globalStyles.mt20, globalStyles.pl4]}>
          <View style = {styles.itemSubWrapper}>
            <Text style = {[globalStyles.fontMont, globalStyles.fw400, globalStyles.fs12, globalStyles.lh18, globalStyles.lSpace4, globalStyles.tLeft, {color: 'rgba(0, 0, 0, 0.6)'}]}>Date</Text>
            <Text style = {[globalStyles.fontMont, globalStyles.fw400, globalStyles.fs14, globalStyles.lh24, globalStyles.lSpace5, globalStyles.tLeft, {color: 'rgba(0, 0, 0, 0.87)'}]}>07/07/23</Text>
          </View>
        </View>
        <View style = {[globalStyles.ml16, globalStyles.mr16, globalStyles.mt20, globalStyles.pl4]}>
          <View style = {styles.itemSubWrapper}>
            <Text style = {[globalStyles.fontMont, globalStyles.fw400, globalStyles.fs12, globalStyles.lh18, globalStyles.lSpace4, globalStyles.tLeft, {color: 'rgba(0, 0, 0, 0.6)'}]}>Start Time     End Time</Text>
            <Text style = {[globalStyles.fontMont, globalStyles.fw400, globalStyles.fs14, globalStyles.lh24, globalStyles.lSpace5, globalStyles.tLeft, {color: 'rgba(0, 0, 0, 0.87)'}]}>9:00 Am     9:30 Am</Text>
          </View>
        </View>
        <View style = {[globalStyles.ml16, globalStyles.mr16, globalStyles.mt20, globalStyles.pl4]}>
          <View style = {styles.itemSubWrapper}>
            <Text style = {[globalStyles.fontMont, globalStyles.fw400, globalStyles.fs12, globalStyles.lh18, globalStyles.lSpace4, globalStyles.tLeft, {color: 'rgba(0, 0, 0, 0.6)'}]}>Room or Location</Text>
            <Text style = {[globalStyles.fontMont, globalStyles.fw400, globalStyles.fs14, globalStyles.lh24, globalStyles.lSpace5, globalStyles.tLeft, {color: 'rgba(0, 0, 0, 0.87)'}]}>Room 05, Building XYZ</Text>
          </View>
        </View>
        <View style = {[globalStyles.ml16, globalStyles.mr16, globalStyles.mt20, globalStyles.pl4]}>
          <View style = {styles.itemSubWrapper}>
            <Text style = {[globalStyles.fontMont, globalStyles.fw400, globalStyles.fs12, globalStyles.lh18, globalStyles.lSpace4, globalStyles.tLeft, {color: 'rgba(0, 0, 0, 0.6)'}]}>Notes</Text>
            <Text style = {[globalStyles.fontMont, globalStyles.fw400, globalStyles.fs14, globalStyles.lh24, globalStyles.lSpace5, globalStyles.tLeft, {color: 'rgba(0, 0, 0, 0.87)'}]}>There is two storied house that need to be rebuilt using new technologies and the main aim is to ...</Text>
          </View>
        </View>
        <View style = {globalStyles.flex1}></View>
        <View style = {[globalStyles.ml16, globalStyles.mr16, globalStyles.mt40]}>
          <View style = {[globalStyles.h40, globalStyles.br24, globalStyles.bw1, globalStyles.justCtr, {borderColor: '#EFB057', backgroundColor: '#EFB057'}]}>
            <TouchableHighlight style = {globalStyles.br24}
              activeOpacity = {0.6}
              underlayColor = '#c87d12'
              onPress={() => {
                navigation.navigate('appointments');
              }}>
              <View style = {[globalStyles.fWidth, globalStyles.h40]}>
                <Text style = {[globalStyles.colorWhite, globalStyles.fontMont, globalStyles.fw500, globalStyles.fs16, globalStyles.lh24, globalStyles.lSpace125, globalStyles.tCenter, globalStyles.br24, globalStyles.vMid, globalStyles.mt6]}>Delete</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style = {[globalStyles.h40, globalStyles.mt10, globalStyles.br24, globalStyles.bw1, globalStyles.bWhite, globalStyles.justCtr, globalStyles.mb10, {borderColor: '#EFB057'}]}>
            <TouchableHighlight style = {globalStyles.br24}
              activeOpacity = {0.6}
              underlayColor = '#ccc'
              onPress={() => {
                navigation.navigate('appointments');
              }}>
              <View style = {[globalStyles.fWidth, globalStyles.h40]}>
                <Text style = {[globalStyles.fontMont, globalStyles.fw500, globalStyles.fs16, globalStyles.lh24, globalStyles.lSpace125, globalStyles.tCenter, globalStyles.br24, globalStyles.vMid, globalStyles.mt6, {color: '#EFB057'}]}>Cancel</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  itemSubWrapper: {
    borderBottomColor: 'rgba(0, 0, 0, 0.08)',
    borderBottomWidth: 1,
    paddingBottom: 8
  },
});

export default AppointmentDetail;