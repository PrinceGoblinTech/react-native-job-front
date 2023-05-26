import React, { useState } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import DocumentPicker from 'react-native-document-picker';
import globalStyles from '../../assets/styles/GlobalStyles';

function AcceptOffer({ navigation }) {
  const [firstFocused, setFristFocused] = useState(false);
  const [secondFocused, setSecondFocused] = useState(false);
  const [amountFocused, setAmountFocused] = useState(false);
  const [fileUri, setFileUri] = useState(null);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setFileUri(result.uri);
    } catch (err) {
      console.log('Document Picker Error:', err);
    }
  };

  return (
    <ScrollView style = {[globalStyles.flex1, globalStyles.fWidth, globalStyles.bWhite]}>
      <View style = {[globalStyles.rowFlexShow, globalStyles.pt18, globalStyles.algStart]}>
        <View style = {globalStyles.h30}>
          <TouchableHighlight
            style = {[globalStyles.h30, globalStyles.pt5]}
            activeOpacity = {0.6}
            underlayColor = '#ccc'
            onPress={() => navigation.navigate('offer_details')}>
            <Image 
              style = {[globalStyles.resizeContain, globalStyles.h18, globalStyles.ml14, globalStyles.mr14, globalStyles.w18]}
              source={require('../../assets/img/angle-left.png')}/>
          </TouchableHighlight>
        </View>
        <Text
          style = {[globalStyles.fontMont, globalStyles.fs16, globalStyles.fw500, globalStyles.lSpace5, globalStyles.lh24, globalStyles.mt1, {color: 'rgba(0, 0, 0, 0.6)'}]}
        >Place a Bid</Text>
      </View>
      <View style = {[globalStyles.ml16, globalStyles.mr16, globalStyles.mt16]}>
        <Text style = {[globalStyles.posRelative, globalStyles.t10, globalStyles.zIndex3, globalStyles.bWhite, globalStyles.w70, globalStyles.l30, globalStyles.tCenter, globalStyles.customFont1, {color: '#EFB057'}]}>Bid Title</Text>
        <TextInput
          onFocus={() => setFristFocused(true)}
          onBlur = {() => setFristFocused(false)}
          placeholder = "Tiny Homes"
          placeholderTextColor={'rgba(0, 0, 0, 0.87)'}
          style = {[globalStyles.bw1, globalStyles.br4, globalStyles.pl16, globalStyles.fs16, globalStyles.lh24, globalStyles.fontMont, globalStyles.lSpace5, {borderColor: firstFocused ? '#EFB057' : 'black', color: 'rgba(0, 0, 0, 0.87)'}]}></TextInput>
      </View>
      <View style = {[globalStyles.ml16, globalStyles.mr16]}>
        <Text style = {[globalStyles.posRelative, globalStyles.t10, globalStyles.zIndex3, globalStyles.bWhite, globalStyles.w110, globalStyles.l30, globalStyles.tCenter, globalStyles.customFont1, {color: '#EFB057'}]}>Bid Description</Text>
        <TextInput
          multiline = {true}
          numberOfLines={6}
          onFocus={() => setSecondFocused(true)}
          onBlur = {() => setSecondFocused(false)}
          placeholderTextColor={'rgba(0, 0, 0, 0.6)'}
          placeholder = "There is two storied house that need to be rebuilt using new technologies and the main aim is to ..."
          style = {[globalStyles.bw1, globalStyles.br4, globalStyles.pl16, globalStyles.h120, globalStyles.fs16, globalStyles.lh24, globalStyles.fontMont, globalStyles.lSpace5, {borderColor: secondFocused ? '#EFB057' : 'black', textAlignVertical: 'top', color: 'rgba(0, 0, 0, 0.6)'}]}></TextInput>
      </View>
      <View style = {[globalStyles.ml16, globalStyles.mr16]}>
        <Text style = {[globalStyles.posRelative, globalStyles.t10, globalStyles.zIndex3, globalStyles.bWhite, globalStyles.w90, globalStyles.l30, globalStyles.tCenter, globalStyles.customFont1, {color: '#EFB057'}]}>Bid Amount</Text>
        <TextInput
          onFocus={() => setAmountFocused(true)}
          onBlur = {() => setAmountFocused(false)}
          placeholder = "14000"
          placeholderTextColor={'rgba(0, 0, 0, 0.87)'}
          style = {[globalStyles.bw1, globalStyles.br4, globalStyles.pl24, globalStyles.fs16, globalStyles.lh24, globalStyles.fontMont, globalStyles.lSpace5, {borderColor: amountFocused ? '#EFB057' : 'black', color: 'rgba(0, 0, 0, 0.87)'}]}></TextInput>
        <Text style = {[globalStyles.posRelative, globalStyles.t_38, globalStyles.l10, globalStyles.fs16, globalStyles.lh24, globalStyles.fontMont, globalStyles.lSpace5, globalStyles.w10, {color: 'rgba(0, 0, 0, 0.38)'}]}>$</Text>
      </View>
      <Text style = {[globalStyles.fs14, globalStyles.lh22, globalStyles.fontMont, globalStyles.lSpace5, globalStyles.fw500, globalStyles.ml16, globalStyles.mt4, globalStyles.colorBlack]}>Attachments (Optional)</Text>
      <View style = {[globalStyles.ml16, globalStyles.mr16, globalStyles.mt16, globalStyles.br8, globalStyles.bw1, globalStyles.h156, globalStyles.dashBorder, globalStyles.algCtr, {borderColor: '#EFB057'}]}>
        <Image 
          source={require('../../assets/img/project-upload.png')}
          style = {[globalStyles.resizeContain, globalStyles.h33, globalStyles.mt25]}
        />
        <View style = {[globalStyles.rowFlexShow, globalStyles.mt15]}>
          <Text style = {[globalStyles.fs14, globalStyles.lh24, globalStyles.fontMont, globalStyles.lSpace5, globalStyles.fw400, {color: 'rgba(0, 0, 0, 0.6)'}]}>Drop your files here or</Text>
          <TouchableHighlight onPress={pickDocument}
            activeOpacity = {0.6}
            underlayColor = '#ccc'>
            <Text style = {[globalStyles.fs14, globalStyles.lh24, globalStyles.fontMont, globalStyles.lSpace5, globalStyles.fw400, {color: '#C87D12', textDecorationLine: 'underline'}]}> Choose File{fileUri}</Text>
          </TouchableHighlight>
        </View>
        <Text style = {[globalStyles.fs12, globalStyles.lh18, globalStyles.fontMont, globalStyles.fw400, globalStyles.lSpace4, globalStyles.mt5, {color: 'rgba(0, 0, 0, 0.6)'}]}>upload file up to 10 mb</Text>
      </View>
      <View style = {[globalStyles.mt30, globalStyles.ml16, globalStyles.mr16]}>
        <View style = {[globalStyles.h40, globalStyles.br24, globalStyles.bw1, globalStyles.justCtr, {borderColor: '#EFB057', backgroundColor: '#EFB057'}]}>
          <TouchableHighlight style = {globalStyles.br24}
            activeOpacity = {0.6}
            underlayColor = '#c87d12'
            onPress={() => {
              navigation.navigate('offer_details');
            }}>
            <View style = {[globalStyles.fWidth, globalStyles.h40]}>
              <Text style = {[globalStyles.colorWhite, globalStyles.fontMont, globalStyles.fw500, globalStyles.fs16, globalStyles.lh24, globalStyles.lSpace125, globalStyles.tCenter, globalStyles.br24, globalStyles.vMid, globalStyles.mt6]}>Accept Offer</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style = {[globalStyles.h40, globalStyles.mt10, globalStyles.br24, globalStyles.bw1, globalStyles.bWhite, globalStyles.justCtr, globalStyles.mb10, {borderColor: '#EFB057'}]}>
          <TouchableHighlight style = {globalStyles.br24}
            activeOpacity = {0.6}
            underlayColor = '#ccc'
            onPress={() => {
              navigation.navigate('offer_details');
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

export default AcceptOffer;