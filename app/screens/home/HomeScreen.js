// Import dependencies
import React from 'react';
import { StyleSheet, View } from 'react-native';

// Import components
import Colors from '../../constants/Colors'
import { Title, Paragraph } from '../../components/styleguide/StyleGuide'


export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Title center>
            Home Screen
          </Title>
          <Paragraph center>
            Edit app/screens/home/HomeScreen.js
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
