import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import globalStyles from '../assets/styles/GlobalStyles';

function AppointmentTimeline({ navigation }) {

  return (
    <View style={[globalStyles.flex1, globalStyles.ml16, globalStyles.mr16, globalStyles.mt16]}>
      <View style = {globalStyles.rowFlexShow}>
        <View>
          <Text style = {globalStyles.timeLineText}>9 AM</Text>
          <View style = {[globalStyles.w2, globalStyles.h95, globalStyles.ml15, globalStyles.mt5, globalStyles.mb5, {backgroundColor: '#E0E0E0'}]}></View>
        </View>
        <View style= {globalStyles.flex1}>
          <View style= {[globalStyles.h54, globalStyles.ml16, globalStyles.br8, globalStyles.mb8, {backgroundColor: '#F5F5F5'}]}>
            <TouchableHighlight
              onPress={() => navigation.navigate('appointment_detail')}
              activeOpacity = {0.6}
              underlayColor = '#ccc'
              style = {[globalStyles.h54, globalStyles.br8]}
            >
              <View style = {[globalStyles.h54, globalStyles.p8, globalStyles.pl18]}>
                <View style = {[globalStyles.hHalf, globalStyles.fWidth]}>
                  <Text style = {[globalStyles.lSpace15, globalStyles.fontMont, globalStyles.fw500, globalStyles.fs12, globalStyles.lh18, globalStyles.colorBlack]}>Risk Management Discussion</Text>
                </View>
                <View style = {[globalStyles.hHalf, globalStyles.fWidth]}>
                  <View style = {[globalStyles.mt5, globalStyles.rowFlexShow]}>
                    <Image source={require('../assets/img/location-pin.png')}
                      style = {globalStyles.pmImg}/>
                    <Text style = {[globalStyles.fontMont, globalStyles.fw400, globalStyles.fs10, globalStyles.lh16, globalStyles.lSpace4, globalStyles.ml7, globalStyles.mt_2, {color: 'rgba(0, 0, 0, 0.6)'}]}>Room 05, Building XYZ</Text>
                  </View>
                </View>
                <View style = {globalStyles.leftBorderSign}></View>
              </View>
            </TouchableHighlight>
          </View>
          <View style= {[globalStyles.h54, globalStyles.ml16, globalStyles.br8, globalStyles.mb8, {backgroundColor: '#F5F5F5'}]}>
            <TouchableHighlight
              onPress={() => navigation.navigate('appointment_detail')}
              activeOpacity = {0.6}
              underlayColor = '#ccc'
              style = {[globalStyles.h54, globalStyles.br8]}
            >
              <View style = {[globalStyles.h54, globalStyles.p8, globalStyles.pl18]}>
                <View style = {[globalStyles.hHalf, globalStyles.fWidth]}>
                  <Text style = {[globalStyles.lSpace15, globalStyles.fontMont, globalStyles.fw500, globalStyles.fs12, globalStyles.lh18, globalStyles.colorBlack]}>Risk Management Discussion</Text>
                </View>
                <View style = {[globalStyles.hHalf, globalStyles.fWidth]}>
                  <View style = {[globalStyles.mt5, globalStyles.rowFlexShow]}>
                    <Image source={require('../assets/img/location-pin.png')}
                      style = {globalStyles.pmImg}/>
                    <Text style = {[globalStyles.fontMont, globalStyles.fw400, globalStyles.fs10, globalStyles.lh16, globalStyles.lSpace4, globalStyles.ml7, globalStyles.mt_2, {color: 'rgba(0, 0, 0, 0.6)'}]}>Room 05, Building XYZ</Text>
                  </View>
                </View>
                <View style = {globalStyles.leftBorderSign}></View>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <View style = {globalStyles.rowFlexShow}>
        <View>
          <Text style = {globalStyles.timeLineText}>10 AM</Text>
          <View style = {[globalStyles.w2, globalStyles.h95, globalStyles.ml15, globalStyles.mt5, globalStyles.mb5, {backgroundColor: '#E0E0E0'}]}></View>
        </View>
        <View style= {globalStyles.flex1}>
          <View style= {[globalStyles.h54, globalStyles.ml16, globalStyles.br8, globalStyles.mb8, {backgroundColor: '#F5F5F5'}]}>
            <TouchableHighlight
              onPress={() => navigation.navigate('appointment_detail')}
              activeOpacity = {0.6}
              underlayColor = '#ccc'
              style = {[globalStyles.h54, globalStyles.br8]}
            >
              <View style = {[globalStyles.h54, globalStyles.p8, globalStyles.pl18]}>
                <View style = {[globalStyles.hHalf, globalStyles.fWidth]}>
                  <Text style = {[globalStyles.lSpace15, globalStyles.fontMont, globalStyles.fw500, globalStyles.fs12, globalStyles.lh18, globalStyles.colorBlack]}>Risk Management Discussion</Text>
                </View>
                <View style = {[globalStyles.hHalf, globalStyles.fWidth]}>
                  <View style = {[globalStyles.mt5, globalStyles.rowFlexShow]}>
                    <Image source={require('../assets/img/location-pin.png')}
                      style = {globalStyles.pmImg}/>
                    <Text style = {[globalStyles.fontMont, globalStyles.fw400, globalStyles.fs10, globalStyles.lh16, globalStyles.lSpace4, globalStyles.ml7, globalStyles.mt_2, {color: 'rgba(0, 0, 0, 0.6)'}]}>Room 05, Building XYZ</Text>
                  </View>
                </View>
                <View style = {globalStyles.leftBorderSign}></View>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <View style = {globalStyles.rowFlexShow}>
        <View>
          <Text style = {globalStyles.timeLineText}>11 AM</Text>
          <View style = {[globalStyles.w2, globalStyles.h95, globalStyles.ml15, globalStyles.mt5, globalStyles.mb5, {backgroundColor: '#E0E0E0'}]}></View>
        </View>
        <View style= {globalStyles.flex1}>
          <View style= {[globalStyles.h54, globalStyles.ml16, globalStyles.br8, globalStyles.mb8, {backgroundColor: '#F5F5F5'}]}>
            <TouchableHighlight
              onPress={() => navigation.navigate('appointment_detail')}
              activeOpacity = {0.6}
              underlayColor = '#ccc'
              style = {[globalStyles.h54, globalStyles.br8]}
            >
              <View style = {[globalStyles.h54, globalStyles.p8, globalStyles.pl18]}>
                <View style = {[globalStyles.hHalf, globalStyles.fWidth]}>
                  <Text style = {[globalStyles.lSpace15, globalStyles.fontMont, globalStyles.fw500, globalStyles.fs12, globalStyles.lh18, globalStyles.colorBlack]}>Risk Management Discussion</Text>
                </View>
                <View style = {[globalStyles.hHalf, globalStyles.fWidth]}>
                  <View style = {[globalStyles.mt5, globalStyles.rowFlexShow]}>
                    <Image source={require('../assets/img/location-pin.png')}
                      style = {globalStyles.pmImg}/>
                    <Text style = {[globalStyles.fontMont, globalStyles.fw400, globalStyles.fs10, globalStyles.lh16, globalStyles.lSpace4, globalStyles.ml7, globalStyles.mt_2, {color: 'rgba(0, 0, 0, 0.6)'}]}>Room 05, Building XYZ</Text>
                  </View>
                </View>
                <View style = {globalStyles.leftBorderSign}></View>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <View style = {globalStyles.rowFlexShow}>
        <View>
          <Text style = {globalStyles.timeLineText}>12 PM</Text>
          <View style = {[globalStyles.w2, globalStyles.h95, globalStyles.ml15, globalStyles.mt5, globalStyles.mb5, {backgroundColor: '#E0E0E0'}]}></View>
        </View>
        <View style= {globalStyles.flex1}>
          <View style= {[globalStyles.h54, globalStyles.ml16, globalStyles.br8, globalStyles.mb8, {backgroundColor: '#F5F5F5'}]}>
            <TouchableHighlight
              onPress={() => navigation.navigate('appointment_detail')}
              activeOpacity = {0.6}
              underlayColor = '#ccc'
              style = {[globalStyles.h54, globalStyles.br8]}
            >
              <View style = {[globalStyles.h54, globalStyles.p8, globalStyles.pl18]}>
                <View style = {[globalStyles.hHalf, globalStyles.fWidth]}>
                  <Text style = {[globalStyles.lSpace15, globalStyles.fontMont, globalStyles.fw500, globalStyles.fs12, globalStyles.lh18, globalStyles.colorBlack]}>Risk Management Discussion</Text>
                </View>
                <View style = {[globalStyles.hHalf, globalStyles.fWidth]}>
                  <View style = {[globalStyles.mt5, globalStyles.rowFlexShow]}>
                    <Image source={require('../assets/img/location-pin.png')}
                      style = {globalStyles.pmImg}/>
                    <Text style = {[globalStyles.fontMont, globalStyles.fw400, globalStyles.fs10, globalStyles.lh16, globalStyles.lSpace4, globalStyles.ml7, globalStyles.mt_2, {color: 'rgba(0, 0, 0, 0.6)'}]}>Room 05, Building XYZ</Text>
                  </View>
                </View>
                <View style = {globalStyles.leftBorderSign}></View>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <View style = {globalStyles.rowFlexShow}>
        <View>
          <Text style = {globalStyles.timeLineText}>01 PM</Text>
        </View>
        <View style= {globalStyles.flex1}>
          <View style= {[globalStyles.h54, globalStyles.ml16, globalStyles.br8, globalStyles.mb8, {backgroundColor: '#F5F5F5'}]}>
            <TouchableHighlight
              onPress={() => navigation.navigate('appointment_detail')}
              activeOpacity = {0.6}
              underlayColor = '#ccc'
              style = {[globalStyles.h54, globalStyles.br8]}
            >
              <View style = {[globalStyles.h54, globalStyles.p8, globalStyles.pl18]}>
                <View style = {[globalStyles.hHalf, globalStyles.fWidth]}>
                  <Text style = {[globalStyles.lSpace15, globalStyles.fontMont, globalStyles.fw500, globalStyles.fs12, globalStyles.lh18, globalStyles.colorBlack]}>Risk Management Discussion</Text>
                </View>
                <View style = {[globalStyles.hHalf, globalStyles.fWidth]}>
                  <View style = {[globalStyles.mt5, globalStyles.rowFlexShow]}>
                    <Image source={require('../assets/img/location-pin.png')}
                      style = {globalStyles.pmImg}/>
                    <Text style = {[globalStyles.fontMont, globalStyles.fw400, globalStyles.fs10, globalStyles.lh16, globalStyles.lSpace4, globalStyles.ml7, globalStyles.mt_2, {color: 'rgba(0, 0, 0, 0.6)'}]}>Room 05, Building XYZ</Text>
                  </View>
                </View>
                <View style = {globalStyles.leftBorderSign}></View>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </View>
  );
}

export default AppointmentTimeline;