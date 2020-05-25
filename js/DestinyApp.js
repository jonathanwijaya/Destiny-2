import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Image, View } from 'react-native';

import { connect } from 'react-redux';

import defaultStyles from './styles/defaultStyles';

import HomeTabContainer from './components/Home/homeContainer';

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
        backgroundColor: '#000000'
      }
    },
  },
},
)

const AppNavigator = createSwitchNavigator({
  app: HomeStack
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