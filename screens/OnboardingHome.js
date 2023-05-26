import React from 'react';
import BaseSplash from '../components/BaseSplash';

function OnboardingHome({ navigation }) {
  return (
    <BaseSplash navigation={navigation} title = "User Onboarding" link = "onboarding_first"/>
  );
}

export default OnboardingHome;