import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator, createMaterialTopTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Image, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { connect } from 'react-redux';

import defaultStyles from './styles/defaultStyles';

import HomeTabContainer from './components/Home/homeContainer';
import ClanTabContainer from './components/Clan/clanContainer';

import {
  setCustomView,
  setCustomTextInput,
  setCustomText,
  setCustomImage,
  setCustomTouchableOpacity
} from 'react-native-global-props';

const customTextProps = {
  style: {
    fontFamily: 'futur2',
  }
};

const customTextInput = {
  underlineColorAndroid: 'rgba(0,0,0,1)',
  style: {
    fontFamily: 'futur2',
  }
};

setCustomText(customTextProps);
setCustomTextInput(customTextInput);

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = MaterialCommunityIcons;
  let iconName;
  if (routeName === 'HomeTab') {
    iconName = focused ? 'home' : 'home-outline';
  } else if (routeName === 'ClanTab') {
    iconName = focused ? 'credit-card' : 'credit-card-plus';
  } 
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const HomeStack = createStackNavigator({
  HomeTabContainer: {
    screen: HomeTabContainer,
    navigationOptions: {
      headerTitle: () => (<Image
        style={defaultStyles.navLogo}
        resizeMode='contain'
        source={require('../assets/img/destiny-logo-destiny-review-morbid-play-12.png')} />),
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#303030'
      }
    },
  },
},
)

const ClanStack = createStackNavigator({
  ClanStackContainer: {
    screen: ClanTabContainer,
    navigationOptions: {
      headerTitle: () => (<Image
        style={defaultStyles.navLogo}
        resizeMode='contain'
        source={require('../assets/img/destiny-logo-destiny-review-morbid-play-12.png')} />),
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#303030'
      }
    },
  },
},
)

const TabsNavigator = createBottomTabNavigator({
  HomeTab: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'HOME',
    },
  },
  ClanTab: {
    screen: ClanStack,
    navigationOptions: {
      tabBarLabel: 'CLAN',
    }
  },
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: '#fafafa',
      inactiveTintColor: 'grey',
      // activeBackgroundColor: '#000000',
      style: {
        backgroundColor: '#303030'
      },
    },
  }
);

const AppNavigator = createSwitchNavigator({
  app: TabsNavigator
}, {
  initialRouteName: 'app'
})

const App = createAppContainer(AppNavigator);

const mapStateToProps = (state, ownProps) => {
  return {
    // user: state.user,
    // appLaunch: state.appLaunch
  };
};

export default connect(mapStateToProps, null)(App)