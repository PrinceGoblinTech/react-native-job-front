import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import OnboardingHome from '../screens/OnboardingHome';
import LoginScreen from '../screens/LoginScreen';
import OnboardingSelectRole from '../screens/OnboardingSelectRole';
import OnboardingFirst from '../screens/OnboardingFirst';
import OnboardingThird from '../screens/OnboardingThird';
import OnboardingSecond from '../screens/OnboardingSecond';
import OwnerHome from '../screens/OwerSide/OwnerHome';
import TeamMemberHome from '../screens/TeamMemberHome';
import TradeHome from '../screens/TradeHome';
import ForgetPsw from '../screens/ForgetPsw';
import CreateAccount from '../screens/CreateAccount';
import TabMsg from '../screens/OwerSide/TabMsg';
import TabProjects from '../screens/OwerSide/TabProjects';
import TabShareGroup from '../screens/OwerSide/TabShareGroup';
import TabProfile from '../screens/OwerSide/TabProfile';
import MsgDetail from '../screens/OwerSide/MsgDetail';
import CreateGroup from '../screens/OwerSide/CreateGroup';
import GroupDetail from '../screens/OwerSide/GroupDetail';
import ViewPhoto from '../screens/OwerSide/ViewPhoto';
import InviteMember from '../screens/OwerSide/InviteMember';
import EditGroup from '../screens/OwerSide/EditGroup';
import EditProfile from '../screens/OwerSide/EditProfile';
import ChangePsw from '../screens/OwerSide/ChangePsw';
import ReferProject from '../screens/OwerSide/ReferProject';
import TabAppointments from '../screens/MemberSide/TabAppointments';
import TabBidBoards from '../screens/MemberSide/TabBidBoards';
import TabBidMsg from '../screens/MemberSide/TabBidMsg';
import ScheduleAppointment from '../screens/MemberSide/ScheduleAppointment';
import AppointmentDetail from '../screens/MemberSide/AppointmentDetail';
import EditAppointment from '../screens/MemberSide/EditAppointment';
import BidDetails from '../screens/MemberSide/BidDetails';
import BidMsgDetail from '../screens/MemberSide/BidMsgDetail';
import TabMemberProfile from '../screens/MemberSide/TabMemberProfile';
import ChangeMemberPsw from '../screens/MemberSide/ChangeMemberPsw';
import EditMemberProfile from '../screens/MemberSide/EditMemberProfile';
import TabPartnerBids from '../screens/PartnerSide/TabPartnerBids';
import PartnerBidDetails from '../screens/PartnerSide/PartnerBidDetails';
import NewBid from '../screens/PartnerSide/NewBid';
import TabOffers from '../screens/PartnerSide/TabOffers';
import OfferDetail from '../screens/PartnerSide/OfferDetail';
import AcceptOffer from '../screens/PartnerSide/AcceptOffer';

const Stack = createStackNavigator();

const OwnerTab = createBottomTabNavigator();
const MemberTab = createBottomTabNavigator();
const TradeTab = createBottomTabNavigator();

const OwnerTabNavigator = () => {
  return (
    <OwnerTab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <OwnerTab.Screen
        name = "owner_projects"
        component={TabProjects}
        options = {({route}) => ({
          tabBarLabel: 'Projects',
          tabBarActiveTintColor: '#C87D12',
          tabBarIcon: ({color, size, style}) => (
            <MaterialCommunityIcons
              name='check-circle-outline'
              color={color}
              size = {18}
            />
          ),
        })}
      />
      <OwnerTab.Screen
        name = "owner_msg"
        component={TabMsg}
        options = {({route}) => ({
          tabBarLabel: 'Message',
          tabBarActiveTintColor: '#C87D12',
          tabBarIcon: ({color, size, style}) => (
            <MaterialCommunityIcons
              name='message-text-outline'
              color={color}
              size = {18}
            />
          ),
        })}
      />
      <OwnerTab.Screen
        name = "share_group"
        component={TabShareGroup}
        options = {({route}) => ({
          tabBarLabel: 'Share',
          tabBarActiveTintColor: '#C87D12',
          tabBarIcon: ({color, size, style}) => (
            <MaterialCommunityIcons
              name='tooltip-image-outline'
              color={color}
              size = {18}
            />
          ),
        })}
      />
      <OwnerTab.Screen
        name = "owner_profile"
        component={TabProfile}
        options = {({route}) => ({
          tabBarLabel: 'Profile',
          tabBarActiveTintColor: '#C87D12',
          tabBarIcon: ({color, size, style}) => (
            <MaterialCommunityIcons
              name='account-circle-outline'
              color={color}
              size = {18}
            />
          ),
        })}
      />
    </OwnerTab.Navigator>
  )
}

const MemberTabNavigator = () => {
  return (
    <MemberTab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MemberTab.Screen
        name = "appointments"
        component={TabAppointments}
        options = {({route}) => ({
          tabBarLabel: 'Appointments',
          tabBarActiveTintColor: '#C87D12',
          tabBarIcon: ({color, size, style}) => (
            <MaterialCommunityIcons
              name='calendar-month-outline'
              color={color}
              size = {18}
            />
          ),
        })}
      />
      <MemberTab.Screen
        name = "bid_boards"
        component={TabBidBoards}
        options = {({route}) => ({
          tabBarLabel: 'Bid Boards',
          tabBarActiveTintColor: '#C87D12',
          tabBarIcon: ({color, size, style}) => (
            <MaterialCommunityIcons
              name='clipboard-list-outline'
              color={color}
              size = {18}
            />
          ),
        })}
      />
      <MemberTab.Screen
        name = "bid_msg"
        component={TabBidMsg}
        options = {({route}) => ({
          tabBarLabel: 'Message',
          tabBarActiveTintColor: '#C87D12',
          tabBarIcon: ({color, size, style}) => (
            <MaterialCommunityIcons
              name='message-text-outline'
              color={color}
              size = {18}
            />
          ),
        })}
      />
      <MemberTab.Screen
        name = "member_profile"
        component={TabMemberProfile}
        options = {({route}) => ({
          tabBarLabel: 'Profile',
          tabBarActiveTintColor: '#C87D12',
          tabBarIcon: ({color, size, style}) => (
            <MaterialCommunityIcons
              name='account-circle-outline'
              color={color}
              size = {18}
            />
          ),
        })}
      />
    </MemberTab.Navigator>
  )
}

const TradeTabNavigator = () => {
  return (
    <TradeTab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <TradeTab.Screen
        name = "offers"
        component={TabOffers}
        options = {({route}) => ({
          tabBarLabel: 'Offers',
          tabBarActiveTintColor: '#C87D12',
          tabBarIcon: ({color, size, style}) => (
            <MaterialCommunityIcons
              name='calendar-month-outline'
              color={color}
              size = {18}
            />
          ),
        })}
      />
      <TradeTab.Screen
        name = "trade_bid_boards"
        component={TabPartnerBids}
        options = {({route}) => ({
          tabBarLabel: 'Bid Boards',
          tabBarActiveTintColor: '#C87D12',
          tabBarIcon: ({color, size, style}) => (
            <MaterialCommunityIcons
              name='clipboard-list-outline'
              color={color}
              size = {18}
            />
          ),
        })}
      />
      <TradeTab.Screen
        name = "partner_profile"
        component={TabMemberProfile}
        options = {({route}) => ({
          tabBarLabel: 'Profile',
          tabBarActiveTintColor: '#C87D12',
          tabBarIcon: ({color, size, style}) => (
            <MaterialCommunityIcons
              name='account-circle-outline'
              color={color}
              size = {18}
            />
          ),
        })}
      />
    </TradeTab.Navigator>
  )
}

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        {/* <Stack.Screen
          name="user_onboarding"
          component={OnboardingHome}
        /> */}
        <Stack.Screen
          name="onboarding_first"
          component={OnboardingFirst}
        />
        <Stack.Screen
          name="onboarding_second"
          component={OnboardingSecond}
        />
        <Stack.Screen
          name="onboarding_third"
          component={OnboardingThird}
        />
        <Stack.Screen
          name="onboarding_role"
          component={OnboardingSelectRole}
        />
        <Stack.Screen
          name="owner_home"
          component={OwnerHome}
        />
        <Stack.Screen
          name="teammember_home"
          component={TeamMemberHome}
        />
        <Stack.Screen
          name="trade_home"
          component={TradeHome}
        />
        <Stack.Screen
          name="auth_account"
          component={LoginScreen}
        />
        <Stack.Screen
          name="forget_psw"
          component={ForgetPsw}
        />
        <Stack.Screen
          name="create_account"
          component={CreateAccount}
        />
        <Stack.Screen
          name="owner_tabs"
          component={OwnerTabNavigator}
        />
        <Stack.Screen
          name="teammember_tabs"
          component={MemberTabNavigator}
        />
        <Stack.Screen
          name="trade_tabs"
          component={TradeTabNavigator}
        />
        <Stack.Screen
          name="msg_detail"
          component={MsgDetail}
        />
        <Stack.Screen
          name="group_detail"
          component={GroupDetail}
        />
        <Stack.Screen
          name="photo_detail"
          component={ViewPhoto}
        />
        <Stack.Screen
          name="invite_member"
          component={InviteMember}
        />
        <Stack.Screen
          name="create_group"
          component={CreateGroup}
        />
        <Stack.Screen
          name="edit_group"
          component={EditGroup}
        />
        <Stack.Screen
          name="edit_profile"
          component={EditProfile}
        />
        <Stack.Screen
          name="edit_appointment"
          component={EditAppointment}
        />
        <Stack.Screen
          name="change_psw"
          component={ChangePsw}
        />
        <Stack.Screen
          name="refer_project"
          component={ReferProject}
        />
        <Stack.Screen
          name="new_schedule"
          component={ScheduleAppointment}
        />
        <Stack.Screen
          name="appointment_detail"
          component={AppointmentDetail}
        />
        <Stack.Screen
          name="bid_details"
          component={BidDetails}
        />
        <Stack.Screen
          name="partner_bid_details"
          component={PartnerBidDetails}
        />
        <Stack.Screen
          name="offer_details"
          component={OfferDetail}
        />
        <Stack.Screen
          name="bid_msg_details"
          component={BidMsgDetail}
        />
        <Stack.Screen
          name="change_member_psw"
          component={ChangeMemberPsw}
        />
        <Stack.Screen
          name="edit_member_profile"
          component={EditMemberProfile}
        />
        <Stack.Screen
          name="new_bid"
          component={NewBid}
        />
        <Stack.Screen
          name="accept_offer"
          component={AcceptOffer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
