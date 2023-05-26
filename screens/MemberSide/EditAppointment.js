import React, { useState } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import globalStyles from '../../assets/styles/GlobalStyles';

function EditAppointment({ navigation, route }) {
  const [titleFocused, setTitleFocused] = useState(false);
  const [dateFocused, setDateFocused] = useState(false);
  const [locationFocused, setLocationFocused] = useState(false);
  const [startFocused, setStartFocused] = useState(false);
  const [endFocused, setEndFocused] = useState(false);
  const [noteFocused, setNoteFocused] = useState(false);

  return (
    <ScrollView style = {[globalStyles.flex1, globalStyles.fWidth, globalStyles.bWhite]}>
      <View style = {[globalStyles.rowFlexShow, globalStyles.pt18, globalStyles.algStart]}>
        <View style = {globalStyles.h30}>
          <TouchableHighlight
            style = {[globalStyles.h30, globalStyles.pt5]}
            activeOpacity = {0.6}
            underlayColor = '#ccc'
            onPress={() => navigation.navigate('appointment_detail')}>
            <Image 
              style = {[globalStyles.resizeContain, globalStyles.h18, globalStyles.ml14, globalStyles.mr14, globalStyles.w18]}
              source={require('../../assets/img/angle-left.png')}/>
          </TouchableHighlight>
        </View>
        <Text
          style = {[globalStyles.fontMont, globalStyles.fs16, globalStyles.fw500, globalStyles.lSpace5, globalStyles.lh24, globalStyles.mt1, {color: 'rgba(0, 0, 0, 0.6)'}]}
        >Edit Appointment</Text>
      </View>
      <View style = {[globalStyles.fWidth, globalStyles.mt15]}>
        <View style = {[globalStyles.ml20, globalStyles.mr20, globalStyles.mb5]}>
          <Text style = {[globalStyles.posRelative, globalStyles.t10, globalStyles.zIndex3, globalStyles.bWhite, globalStyles.w120, globalStyles.l30, globalStyles.tCenter, globalStyles.customFont1, {color: '#EFB057'}]}>Appointment Title</Text>
          <TextInput
            onFocus={() => setTitleFocused(true)}
            onBlur = {() => setTitleFocused(false)}
            placeholder = "Risk Management Description"
            placeholderTextColor={'rgba(0, 0, 0, 0.87)'}
            style = {[globalStyles.bw1, globalStyles.br4, globalStyles.pl16, globalStyles.fs14, globalStyles.lh24, globalStyles.fontMont, globalStyles.lSpace5, {borderColor: titleFocused ? '#EFB057' : 'black', color: 'rgba(0, 0, 0, 0.87)'}]}></TextInput>
        </View>
        <View style = {[globalStyles.ml20, globalStyles.mr20]}>
          <Text style = {[globalStyles.posRelative, globalStyles.t10, globalStyles.zIndex3, globalStyles.bWhite, globalStyles.w40, globalStyles.l30, globalStyles.tCenter, globalStyles.customFont1, {color: '#EFB057'}]}>Date</Text>
          <TextInput
            onFocus={() => setDateFocused(true)}
            onBlur = {() => setDateFocused(false)}
            placeholder = "07/07/2023"
            placeholderTextColor={'rgba(0, 0, 0, 0.87)'}
            style = {[globalStyles.bw1, globalStyles.br4, globalStyles.pl16, globalStyles.fs14, globalStyles.lh24, globalStyles.fontMont, globalStyles.lSpace5, {borderColor: dateFocused ? '#EFB057' : 'black', color: 'rgba(0, 0, 0, 0.87)'}]}></TextInput>
          <View
            style = {[globalStyles.posRelative, globalStyles.zIndex4, globalStyles.t_34, globalStyles.algEnd, globalStyles.r18]}>
            <Image
              source={require('../../assets/img/calendar.png')}
              style = {[globalStyles.w20, globalStyles.resizeContain, globalStyles.h16]} />
          </View>
        </View>
        <View style = {[globalStyles.ml20, globalStyles.mr20, globalStyles.rowFlexShow, globalStyles.mt_10]}>
          <View style = {[globalStyles.flex1, globalStyles.mr8]}>
            <Text style = {[globalStyles.posRelative, globalStyles.t10, globalStyles.zIndex3, globalStyles.bWhite, globalStyles.w80, globalStyles.l30, globalStyles.tCenter, globalStyles.customFont1, {color: '#EFB057'}]}>Start Time</Text>
            <TextInput
              onFocus={() => setStartFocused(true)}
              onBlur = {() => setStartFocused(false)}
              placeholder = "9:00 AM"
              placeholderTextColor={'rgba(0, 0, 0, 0.87)'}
              style = {[globalStyles.bw1, globalStyles.br4, globalStyles.pl16, globalStyles.fs14, globalStyles.lh24, globalStyles.fontMont, globalStyles.lSpace5, {borderColor: startFocused ? '#EFB057' : 'black', color: 'rgba(0, 0, 0, 0.87)'}]}></TextInput>
            <View
              style = {[globalStyles.posRelative, globalStyles.zIndex4, globalStyles.t_34, globalStyles.algEnd, globalStyles.r18]}>
              <Image
                source={require('../../assets/img/clock.png')}
                style = {[globalStyles.w21, globalStyles.resizeContain, globalStyles.h21]} />
            </View>
          </View>
          <View style = {[globalStyles.flex1, globalStyles.ml8]}>
            <Text style = {[globalStyles.posRelative, globalStyles.t10, globalStyles.zIndex3, globalStyles.bWhite, globalStyles.w70, globalStyles.l30, globalStyles.tCenter, globalStyles.customFont1, {color: '#EFB057'}]}>End Time</Text>
            <TextInput
              onFocus={() => setEndFocused(true)}
              onBlur = {() => setEndFocused(false)}
              placeholder = "9:30 AM"
              placeholderTextColor={'rgba(0, 0, 0, 0.87)'}
              style = {[globalStyles.bw1, globalStyles.br4, globalStyles.pl16, globalStyles.fs14, globalStyles.lh24, globalStyles.fontMont, globalStyles.lSpace5, {borderColor: endFocused ? '#EFB057' : 'black', color: 'rgba(0, 0, 0, 0.87)'}]}></TextInput>
            <View
              style = {[globalStyles.posRelative, globalStyles.zIndex4, globalStyles.t_34, globalStyles.algEnd, globalStyles.r18]}>
              <Image
                source={require('../../assets/img/clock.png')}
                style = {[globalStyles.w21, globalStyles.resizeContain, globalStyles.h21]} />
            </View>
          </View>
        </View>
        <View style = {[globalStyles.ml20, globalStyles.mr20, globalStyles.mt_10]}>
          <Text style = {[globalStyles.posRelative, globalStyles.t10, globalStyles.zIndex3, globalStyles.bWhite, globalStyles.w40, globalStyles.l30, globalStyles.tCenter, globalStyles.customFont1, {color: '#EFB057'}]}>Room</Text>
          <TextInput
            onFocus={() => setLocationFocused(true)}
            onBlur = {() => setLocationFocused(false)}
            placeholder = "Room 05, Building XYZ"
            placeholderTextColor={'rgba(0, 0, 0, 0.87)'}
            style = {[globalStyles.bw1, globalStyles.br4, globalStyles.pl16, globalStyles.fs14, globalStyles.lh24, globalStyles.fontMont, globalStyles.lSpace5, {borderColor: locationFocused ? '#EFB057' : 'black', color: 'rgba(0, 0, 0, 0.87)'}]}></TextInput>
        </View>
        <View style = {[globalStyles.ml20, globalStyles.mr20, globalStyles.mt10]}>
          <Text style = {[globalStyles.posRelative, globalStyles.t10, globalStyles.zIndex3, globalStyles.bWhite, globalStyles.w40, globalStyles.l30, globalStyles.tCenter, globalStyles.customFont1, {color: '#EFB057'}]}>Room</Text>
          <TextInput
            onFocus={() => setNoteFocused(true)}
            onBlur = {() => setNoteFocused(false)}
            multiline = {true}
            numberOfLines={4}
            placeholderTextColor={'rgba(0, 0, 0, 0.6)'}
            placeholder = "There is two storied house that need to be rebuilt using new technologies and the main aim is to ..."
            style = {[globalStyles.bw1, globalStyles.br4, globalStyles.pl16, globalStyles.fs14, globalStyles.lh24, globalStyles.pt13, globalStyles.fontMont, globalStyles.lSpace5, {borderColor: noteFocused ? '#EFB057' : 'black', textAlignVertical: 'top', color: 'rgba(0, 0, 0, 0.6)'}]}></TextInput>
        </View>
      </View>
      <View style = {[globalStyles.ml16, globalStyles.mr16, globalStyles.mt40]}>
        <View style = {[globalStyles.h40, globalStyles.br24, globalStyles.bw1, globalStyles.justCtr, {borderColor: '#EFB057', backgroundColor: '#EFB057'}]}>
          <TouchableHighlight style = {globalStyles.br24}
            activeOpacity = {0.6}
            underlayColor = '#c87d12'
            onPress={() => {
              navigation.navigate('appointment_detail');
            }}>
            <View style = {[globalStyles.fWidth, globalStyles.h40]}>
              <Text style = {[globalStyles.colorWhite, globalStyles.fontMont, globalStyles.fw500, globalStyles.fs16, globalStyles.lh24, globalStyles.lSpace125, globalStyles.tCenter, globalStyles.br24, globalStyles.vMid, globalStyles.mt6]}>Save Changes</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style = {[globalStyles.h40, globalStyles.mt10, globalStyles.br24, globalStyles.bw1, globalStyles.bWhite, globalStyles.justCtr, globalStyles.mb10, {borderColor: '#EFB057'}]}>
          <TouchableHighlight style = {globalStyles.br24}
            activeOpacity = {0.6}
            underlayColor = '#ccc'
            onPress={() => {
              navigation.navigate('appointment_detail');
            }}>
            <View style = {[globalStyles.fWidth, globalStyles.h40]}>
              <Text style = {[globalStyles.fontMont, globalStyles.fw500, globalStyles.fs16, globalStyles.lh24, globalStyles.lSpace125, globalStyles.tCenter, globalStyles.br24, globalStyles.vMid, globalStyles.mt6, {color: '#EFB057'}]}>Cancel</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
}

export default EditAppointment;