// Import dependencies
import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';

// Import components
import AppNavigator from './app/navigation/AppNavigator';


export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
  }

  /*
    Asynchronosly load resources
  */
  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        /*
          Here you can preload and cache all of the important images during the initial loading screen
        */
        // require('./app/assets/images/robot-dev.png'),
        // require('./app/assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        /*
          Here you can preload and cache all of the icons and fonts during the initial loading screen
        */
        // Load font-icon library
        ...Icon.AntDesign.font,
        // Load fonts
        'space-mono': require('./app/assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  /*
    Error while loading resources
  */
  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  /*
    Update state of the app to loaded
  */
  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

// Define styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
