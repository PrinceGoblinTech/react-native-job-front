import React, { useState } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AppointmentTimeline from '../../components/AppointmentTimeline';
import globalStyles from '../../assets/styles/GlobalStyles';

function TabAppointments({ navigation }) {
  const [activeIndex, changeActive] = useState(1);

  return (
    <View style={[globalStyles.flex1, globalStyles.bWhite]}>
      <ScrollView>
        <View style = {[globalStyles.rowFlexShow, globalStyles.pt18, globalStyles.algStart]}>
          <Image 
            style = {[globalStyles.resizeContain, globalStyles.h18, globalStyles.ml14, globalStyles.mr15]}
            source={require('../../assets/img/menu-right-alt.png')}/>
          <Text
            style = {[globalStyles.flex1, globalStyles.fontMont, globalStyles.fs16, globalStyles.fw500, globalStyles.lSpace5, globalStyles.lh24, globalStyles.mt_4, {color: 'rgba(0, 0, 0, 0.6)'}]}
          >Appointments</Text>
          <Image 
            style = {[globalStyles.resizeContain, globalStyles.h18, globalStyles.mr15]}
            source={require('../../assets/img/bell.png')}/>
        </View>
        <View style = {[globalStyles.mt16, globalStyles.ml16, globalStyles.rowFlexShow, globalStyles.algStart]}>
          <View style = {[globalStyles.h24, globalStyles.br4, globalStyles.mr8, globalStyles.justCtr, {backgroundColor: '#EFB057'}]}>
            <TouchableHighlight style = {globalStyles.br4}
              activeOpacity = {0.6}
              underlayColor = '#c87d12'
              onPress={() => {
              }}>
              <View style = {[globalStyles.fWidth, globalStyles.h24]}>
                <Text style = {[globalStyles.colorWhite, globalStyles.fontMont, globalStyles.fw400, globalStyles.fs12, globalStyles.lh18, globalStyles.lSpace4, globalStyles.tCenter, globalStyles.br4, globalStyles.vMid, globalStyles.mt3, globalStyles.pl8, globalStyles.pr8]}>Today</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style = {globalStyles.flex1}></View>
          <View style = {[globalStyles.h24, globalStyles.br4, globalStyles.justCtr, globalStyles.mr8, {backgroundColor: '#F5F5F5'}]}>
            <TouchableHighlight style = {globalStyles.br4}
              activeOpacity = {0.6}
              underlayColor = '#ccc'
              onPress={() => {
              }}>
              <View style = {[globalStyles.w24, globalStyles.h24, globalStyles.algCtr, globalStyles.justCtr]}>
                <Image
                  source={require('../../assets/img/angle-left.png')}
                  style = {[globalStyles.resizeContain, globalStyles.w16, globalStyles.h16]}
                />
              </View>
            </TouchableHighlight>
          </View>
          <Text style = {[globalStyles.fontMont, globalStyles.fs12, globalStyles.fw400, globalStyles.lSpace4, globalStyles.lh18, globalStyles.pt3, globalStyles.mr5, globalStyles.ml3, {color: 'rgba(0, 0, 0, 0.6)'}]}>07 Jan - 13 Jan 2023</Text>
          <View style = {[globalStyles.h24, globalStyles.br4, globalStyles.mr16, globalStyles.justCtr, {backgroundColor: '#F5F5F5'}]}>
            <TouchableHighlight style = {globalStyles.br4}
              activeOpacity = {0.6}
              underlayColor = '#ccc'
              onPress={() => {
              }}>
              <View style = {[globalStyles.w24, globalStyles.h24, globalStyles.algCtr, globalStyles.justCtr]}>
                <Image
                  source={require('../../assets/img/angle-right.png')}
                  style = {[globalStyles.resizeContain, globalStyles.w16, globalStyles.h16]}
                />
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style = {[globalStyles.mt16, globalStyles.ml16, globalStyles.rowFlexShow, globalStyles.algStart, globalStyles.mr6]}>
          <View style = {[globalStyles.h50, globalStyles.br4, globalStyles.mr8, globalStyles.justCtr, globalStyles.flex1, {backgroundColor: activeIndex == 1 ? '#FFE8C8' : '#F5F5F5'}]}>
            <TouchableHighlight style = {globalStyles.br4}
              activeOpacity = {0.6}
              underlayColor = '#f9d6a6'
              onPress={() => {
                changeActive(1);
              }}>
              <View style = {[globalStyles.fWidth, globalStyles.h50]}>
                <Text style = {[globalStyles.fontMont, globalStyles.fw700, globalStyles.fs12, globalStyles.lh18, globalStyles.lSpace4, globalStyles.tCenter, globalStyles.mt5, {color: activeIndex == 1 ? '#C87D12' : 'rgba(0, 0, 0, 0.6)'}]}>07</Text>
                <Text style = {[globalStyles.fontMont, globalStyles.fw400, globalStyles.fs10, globalStyles.lh16, globalStyles.lSpace4, globalStyles.tCenter, globalStyles.mt5, {color: activeIndex == 1 ? '#EFB057' : 'rgba(0, 0, 0, 0.38)'}]}>Mon</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style = {[globalStyles.h50, globalStyles.br4, globalStyles.mr8, globalStyles.justCtr, globalStyles.flex1, {backgroundColor: activeIndex == 2 ? '#FFE8C8' : '#F5F5F5'}]}>
            <TouchableHighlight style = {globalStyles.br4}
              activeOpacity = {0.6}
              underlayColor = '#f9d6a6'
              onPress={() => {
                changeActive(2);
              }}>
              <View style = {[globalStyles.fWidth, globalStyles.h50]}>
                <Text style = {[globalStyles.fontMont, globalStyles.fw700, globalStyles.fs12, globalStyles.lh18, globalStyles.lSpace4, globalStyles.tCenter, globalStyles.mt5, {color: activeIndex == 2 ? '#C87D12' : 'rgba(0, 0, 0, 0.6)'}]}>08</Text>
                <Text style = {[globalStyles.fontMont, globalStyles.fw400, globalStyles.fs10, globalStyles.lh16, globalStyles.lSpace4, globalStyles.tCenter, globalStyles.mt5, {color: activeIndex == 2 ? '#EFB057' : 'rgba(0, 0, 0, 0.38)'}]}>Tue</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style = {[globalStyles.h50, globalStyles.br4, globalStyles.mr8, globalStyles.justCtr, globalStyles.flex1, {backgroundColor: activeIndex == 3 ? '#FFE8C8' : '#F5F5F5'}]}>
            <TouchableHighlight style = {globalStyles.br4}
              activeOpacity = {0.6}
              underlayColor = '#f9d6a6'
              onPress={() => {
                changeActive(3);
              }}>
              <View style = {[globalStyles.fWidth, globalStyles.h50]}>
                <Text style = {[globalStyles.fontMont, globalStyles.fw700, globalStyles.fs12, globalStyles.lh18, globalStyles.lSpace4, globalStyles.tCenter, globalStyles.mt5, {color: activeIndex == 3 ? '#C87D12' : 'rgba(0, 0, 0, 0.6)'}]}>09</Text>
                <Text style = {[globalStyles.fontMont, globalStyles.fw400, globalStyles.fs10, globalStyles.lh16, globalStyles.lSpace4, globalStyles.tCenter, globalStyles.mt5, {color: activeIndex == 3 ? '#EFB057' : 'rgba(0, 0, 0, 0.38)'}]}>Wed</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style = {[globalStyles.h50, globalStyles.br4, globalStyles.mr8, globalStyles.justCtr, globalStyles.flex1, {backgroundColor: activeIndex == 4 ? '#FFE8C8' : '#F5F5F5'}]}>
            <TouchableHighlight style = {globalStyles.br4}
              activeOpacity = {0.6}
              underlayColor = '#f9d6a6'
              onPress={() => {
                changeActive(4);
              }}>
              <View style = {[globalStyles.fWidth, globalStyles.h50]}>
                <Text style = {[globalStyles.fontMont, globalStyles.fw700, globalStyles.fs12, globalStyles.lh18, globalStyles.lSpace4, globalStyles.tCenter, globalStyles.mt5, {color: activeIndex == 4 ? '#C87D12' : 'rgba(0, 0, 0, 0.6)'}]}>10</Text>
                <Text style = {[globalStyles.fontMont, globalStyles.fw400, globalStyles.fs10, globalStyles.lh16, globalStyles.lSpace4, globalStyles.tCenter, globalStyles.mt5, {color: activeIndex == 4 ? '#EFB057' : 'rgba(0, 0, 0, 0.38)'}]}>Thu</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style = {[globalStyles.h50, globalStyles.br4, globalStyles.mr8, globalStyles.justCtr, globalStyles.flex1, {backgroundColor: activeIndex == 5 ? '#FFE8C8' : '#F5F5F5'}]}>
            <TouchableHighlight style = {globalStyles.br4}
              activeOpacity = {0.6}
              underlayColor = '#f9d6a6'
              onPress={() => {
                changeActive(5);
              }}>
              <View style = {[globalStyles.fWidth, globalStyles.h50]}>
                <Text style = {[globalStyles.fontMont, globalStyles.fw700, globalStyles.fs12, globalStyles.lh18, globalStyles.lSpace4, globalStyles.tCenter, globalStyles.mt5, {color: activeIndex == 5 ? '#C87D12' : 'rgba(0, 0, 0, 0.6)'}]}>11</Text>
                <Text style = {[{color: activeIndex == 5 ? '#EFB057' : 'rgba(0, 0, 0, 0.38)'}, globalStyles.fontMont, globalStyles.fw400, globalStyles.fs10, globalStyles.lh16, globalStyles.lSpace4, globalStyles.tCenter, globalStyles.mt5]}>Fri</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style = {[globalStyles.h50, globalStyles.br4, globalStyles.mr8, globalStyles.justCtr, globalStyles.flex1, {backgroundColor: activeIndex == 6 ? '#FFE8C8' : '#F5F5F5'}]}>
            <TouchableHighlight style = {globalStyles.br4}
              activeOpacity = {0.6}
              underlayColor = '#f9d6a6'
              onPress={() => {
                changeActive(6);
              }}>
              <View style = {[globalStyles.fWidth, globalStyles.h50]}>
                <Text style = {[globalStyles.fontMont, globalStyles.fw700, globalStyles.fs12, globalStyles.lh18, globalStyles.lSpace4, globalStyles.tCenter, globalStyles.mt5, {color: activeIndex == 6 ? '#C87D12' : 'rgba(0, 0, 0, 0.6)'}]}>12</Text>
                <Text style = {[{color: activeIndex == 6 ? '#EFB057' : 'rgba(0, 0, 0, 0.38)'}, globalStyles.fontMont, globalStyles.fw400, globalStyles.fs10, globalStyles.lh16, globalStyles.lSpace4, globalStyles.tCenter, globalStyles.mt5]}>Sat</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style = {[globalStyles.h50, globalStyles.br4, globalStyles.mr8, globalStyles.justCtr, globalStyles.flex1, {backgroundColor: activeIndex == 7 ? '#FFE8C8' : '#F5F5F5'}]}>
            <TouchableHighlight style = {globalStyles.br4}
              activeOpacity = {0.6}
              underlayColor = '#f9d6a6'
              onPress={() => {
                changeActive(7);
              }}>
              <View style = {[globalStyles.fWidth, globalStyles.h50]}>
                <Text style = {[globalStyles.fontMont, globalStyles.fw700, globalStyles.fs12, globalStyles.lh18, globalStyles.lSpace4, globalStyles.tCenter, globalStyles.mt5, {color: activeIndex == 7 ? '#C87D12' : 'rgba(0, 0, 0, 0.6)'}]}>13</Text>
                <Text style = {[{color: activeIndex == 7 ? '#EFB057' : 'rgba(0, 0, 0, 0.38)'}, globalStyles.fontMont, globalStyles.fw400, globalStyles.fs10, globalStyles.lh16, globalStyles.lSpace4, globalStyles.tCenter, globalStyles.mt5]}>Sun</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View>
          <AppointmentTimeline navigation={navigation}/>
        </View>
      </ScrollView>
      <View style = {[globalStyles.w48, globalStyles.h48, globalStyles.br24, globalStyles.posAbsolute, globalStyles.b8, globalStyles.r8, {backgroundColor: '#EFB057'}]}>
        <TouchableHighlight
          onPress={() => navigation.navigate('new_schedule')}
          activeOpacity = {0.6}
          underlayColor = '#c87d12'
          style = {[globalStyles.w48, globalStyles.h48, globalStyles.br24, globalStyles.algCtr, globalStyles.justCtr]}>
            <Image 
              source={require('../../assets/img/calendar-plus.png')}
              style = {[globalStyles.resizeContain, globalStyles.w20]}
            />
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default TabAppointments;