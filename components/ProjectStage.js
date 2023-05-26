import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProgressCircle from 'react-native-progress-circle-updated';
import globalStyles from '../assets/styles/GlobalStyles';

function ProjectStage({ navigation }) {

  return (
    <View style={[globalStyles.flex1, globalStyles.ml16, globalStyles.mr16, globalStyles.mt16]}>
      <Text style = {[globalStyles.fontMont, globalStyles.fs14, globalStyles.lh22, globalStyles.fw500, globalStyles.lSpace15, globalStyles.colorBlack, globalStyles.mb5]}>Stages</Text>
      <View>
        <View style = {globalStyles.rowFlexShow}>
          <MaterialCommunityIcons
            name='check-circle'
            color='rgba(0, 181, 58, 0.56)'
            size = {28}
          />
          <View style = {[globalStyles.ml10, globalStyles.mt2]}>
            <Text style = {[globalStyles.fontMont, globalStyles.fs16, globalStyles.lh24, globalStyles.fw500, globalStyles.lSpace15, {color: 'rgba(0, 0, 0, 0.6)'}]}>Planning</Text>
            <Text style = {[globalStyles.fontMont, globalStyles.fs12, globalStyles.lh18, globalStyles.fw400, globalStyles.lSpace4, {color: 'rgba(0, 0, 0, 0.38)'}]}>Completed</Text>
          </View>
        </View>
        <View style = {[globalStyles.w2, globalStyles.h52, globalStyles.ml12, globalStyles.mt_18, globalStyles.mb_3, {backgroundColor: '#00B53A'}]}></View>
      </View>
      <View>
        <View style = {globalStyles.rowFlexShow}>
          <MaterialCommunityIcons
            name='check-circle'
            color='rgba(0, 181, 58, 0.56)'
            size = {28}
          />
          <View style = {[globalStyles.ml10, globalStyles.mt2]}>
            <Text style = {[globalStyles.fontMont, globalStyles.fs16, globalStyles.lh24, globalStyles.fw500, globalStyles.lSpace15, {color: 'rgba(0, 0, 0, 0.6)'}]}>Acquisition</Text>
            <Text style = {[globalStyles.fontMont, globalStyles.fs12, globalStyles.lh18, globalStyles.fw400, globalStyles.lSpace4, {color: 'rgba(0, 0, 0, 0.38)'}]}>Completed</Text>
          </View>
        </View>
        <View style = {[globalStyles.w2, globalStyles.h52, globalStyles.ml12, globalStyles.mt_18, globalStyles.mb_3, {backgroundColor: '#00B53A'}]}></View>
      </View>
      <View>
        <View style = {globalStyles.rowFlexShow}>
          <View style = {{marginLeft: -9}}>
            <ProgressCircle
                percent={30}
                radius={24}
                borderWidth={6}
                color="#00C256"
                shadowColor="#C5F9B8"
                bgColor="#fff"
            >
              <Text style={[globalStyles.fs14, globalStyles.lh20, {fontWeight: 800, fontFamily: 'Bloom Speak OT', color: '#00C256'}]}>{'27%'}</Text>
            </ProgressCircle>
          </View>
          <View style = {[globalStyles.ml10, globalStyles.mt2]}>
            <Text style = {[globalStyles.fontMont, globalStyles.fs16, globalStyles.lh24, globalStyles.fw500, globalStyles.lSpace15, {color: '#333333'}]}>Construction</Text>
            <Text style = {[globalStyles.fontMont, globalStyles.fs12, globalStyles.lh18, globalStyles.fw400, globalStyles.lSpace4, {color: '#00B53A'}]}>In Progress</Text>
          </View>
        </View>
        <View style = {globalStyles.waitingConnector}></View>
      </View>
      <View>
        <View style = {globalStyles.rowFlexShow}>
          <MaterialCommunityIcons
            name='clock'
            color='#E0E0E0'
            size = {28}
          />
          <View style = {[globalStyles.ml10, globalStyles.mt2]}>
            <Text style = {[globalStyles.fontMont, globalStyles.fs16, globalStyles.lh24, globalStyles.fw500, globalStyles.lSpace15, {color: 'rgba(0, 0, 0, 0.6)'}]}>Review</Text>
            <Text style = {[globalStyles.fontMont, globalStyles.fs12, globalStyles.lh18, globalStyles.fw400, globalStyles.lSpace4, {color: 'rgba(0, 0, 0, 0.38)'}]}>Awaiting</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default ProjectStage;