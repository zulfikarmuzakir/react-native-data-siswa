/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Login from './src/components/LoginForm';

const App = () => {
  return (
      <View style={{ flex: 1 }}>
        <View style={ styles.content }>
        </View>
        <View style={ styles. bottomNavigation }>
          <View style={ styles.navIcon }>
            <Image style={{height: 32, width: 32}} source={require('./src/assets/home.png')} />
          </View>
          <View style={ styles.navIcon }>
            <Image style={{height: 32, width: 32}} source={require('./src/assets/search.png')} />
          </View>
          <View style={ styles.navIcon }>
            <Image style={{height: 32, width: 32}} source={require('./src/assets/user.png')} />
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'white'
  },
  bottomNavigation: {
    height: 55,
    backgroundColor: '#95A5C4',
    flexDirection: 'row'
  },
  navIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default App;
