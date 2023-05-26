import React from 'react';
import { View, Text, Image } from 'react-native';
import globalStyles from '../assets/styles/GlobalStyles';

function ProjectDetails({ navigation }) {
  return (
    <View style={[globalStyles.flex1, globalStyles.ml16, globalStyles.mr16, globalStyles.mt16]}>
      <Text style = {[globalStyles.fontMont, globalStyles.fs14, globalStyles.lh22, globalStyles.fw500, globalStyles.lSpace15, globalStyles.colorBlack, globalStyles.mb5]}>Descriptions</Text>
      <Text style = {[globalStyles.fontMont, globalStyles.fs14, globalStyles.lh22, globalStyles.fw400, globalStyles.lSpace5, globalStyles.mb5, {color: 'rgba(0, 0, 0, 0.87)'}]}>Do you have an original Social App idea that does not exist? We are searching for an original idea for a Patent.{`\n\n`}Submit an original Social App idea for people to make friends and share videos, photos, and music</Text>
      <Text style = {[globalStyles.fontMont, globalStyles.fs14, globalStyles.lh22, globalStyles.fw500, globalStyles.lSpace15, globalStyles.colorBlack, globalStyles.mb5, globalStyles.mt12]}>Attachments</Text>
      <View style= {[globalStyles.h54, globalStyles.br8, globalStyles.mb8, globalStyles.justCtr, {backgroundColor: '#F5F5F5'}]}>
        <Text style = {[globalStyles.lSpace4, globalStyles.fontMont, globalStyles.fw500, globalStyles.fs12, globalStyles.lh18, globalStyles.colorBlack, globalStyles.mt20, globalStyles.ml10]}>SampleLaunch ...pdf</Text>
        <Text style = {[globalStyles.fontMont, globalStyles.fs12, globalStyles.lh18, globalStyles.lSpace4, globalStyles.ml10, {color: 'rgba(0, 0, 0, 0.38)'}]}>12 MB</Text>
        <View style = {[globalStyles.fWidth, globalStyles.algEnd]}>
          <Image source={require('../assets/img/download-alt.png')}
            style = {globalStyles.downImg}/>
        </View>
      </View>
    </View>
  );
}

export default ProjectDetails;