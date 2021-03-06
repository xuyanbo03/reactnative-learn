import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TWebView from './twebview';

export default class weatherPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TWebView url="http://localhost:8081/ios_views/html/weather.html"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});