// Import dependencies
import React from 'react';
import { StyleSheet, View } from 'react-native'
import { MediaQuery } from 'react-native-responsive-ui'

// Import components
import Colors from '../../constants/Colors'
import { Title, Paragraph } from '../../components/styleguide/StyleGuide'


export default class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          {/* Media Query library for responsive design */}
          <MediaQuery minHeight={450} orientation="portrait">
            <Title center>
              Settings Screen
            </Title>
          </MediaQuery>
          <Paragraph center>
            Edit app/screens/home/SettingsScreen.js
          </Paragraph>
        </View>
      </View>
    );
  }
}

// Define styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textContainer: {
    width: '90%'
  }
});
