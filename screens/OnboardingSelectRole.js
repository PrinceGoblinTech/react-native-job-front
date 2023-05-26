import React from 'react';
import { View, Text, ImageBackground, Image, TouchableHighlight } from 'react-native';
import globalStyles from '../assets/styles/GlobalStyles';

function OnboardingSelectRole({ navigation }) {

  return (
    <ImageBackground
      source={require('../assets/img/Onboarding.png')} style={globalStyles.mainBackImg}>
      <View style = {globalStyles.roleWrapper}>
        <View style = {globalStyles.fl3}></View>
        <Text style = {globalStyles.stepTitle}>Sign In As</Text>
      </View>
      <View style = {globalStyles.roleBtnWrapper}>
        <View style = {globalStyles.flex1}>
          <View style = {globalStyles.roleButton}>
            <TouchableHighlight style = {globalStyles.br8}
              activeOpacity = {0.6}
              underlayColor = '#ccc'
              onPress={() => navigation.navigate('auth_account', {sublink: 'owner'})}>
              <View style = {globalStyles.roleBtnInside}>
                <View style = {[globalStyles.fl3, globalStyles.justCtr, globalStyles.algCtr]}>
                  <View style = {globalStyles.roleBtnImgWrapper}>
                    <Image
                      style = {globalStyles.rolebtnImage}
                      source={require('../assets/img/users-icon.png')}/>
                  </View>
                </View>
                <Text style = {globalStyles.roleBtnText}>Homeowner</Text>
                <View style = {[globalStyles.flex1, globalStyles.justCtr]}>
                  <Image
                    style = {globalStyles.roleSelImg}
                    source={require('../assets/img/Vector.png')}/>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style = {globalStyles.flex1}>
          <View style = {globalStyles.roleButton}>
            <TouchableHighlight style = {globalStyles.br8}
              activeOpacity = {0.6}
              underlayColor = '#ccc'
              onPress={() => navigation.navigate('auth_account', {sublink: 'member'})}>
              <View style = {globalStyles.roleBtnInside}>
                <View style = {[globalStyles.fl3, globalStyles.justCtr, globalStyles.algCtr]}>
                  <View style = {globalStyles.roleBtnImgWrapper}>
                    <Image
                      style = {globalStyles.rolebtnImage}
                      source={require('../assets/img/user-icon.png')}/>
                  </View>
                </View>
                <Text style = {globalStyles.roleBtnText}>Team Member</Text>
                <View style = {[globalStyles.flex1, globalStyles.justCtr]}>
                  <Image
                    style = {globalStyles.roleSelImg}
                    source={require('../assets/img/Vector.png')}/>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style = {globalStyles.flex1}>
          <View style = {globalStyles.roleButton}>
            <TouchableHighlight style = {globalStyles.br8}
              activeOpacity = {0.6}
              underlayColor = '#ccc'
              onPress={() => navigation.navigate('auth_account', {sublink: 'trade'})}>
              <View style = {globalStyles.roleBtnInside}>
                <View style = {[globalStyles.fl3, globalStyles.justCtr, globalStyles.algCtr]}>
                  <View style = {globalStyles.roleBtnImgWrapper}>
                    <Image
                      style = {globalStyles.rolebtnImage}
                      source={require('../assets/img/user-icon.png')}/>
                  </View>
                </View>
                <Text style = {globalStyles.roleBtnText}>Trade Partner</Text>
                <View style = {[globalStyles.flex1, globalStyles.justCtr]}>
                  <Image
                    style = {globalStyles.roleSelImg}
                    source={require('../assets/img/Vector.png')}/>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style = {globalStyles.flex1}></View>
      </View>
    </ImageBackground>
  );
}

export default OnboardingSelectRole;