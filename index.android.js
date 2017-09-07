/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import BarraNavecao from './src/components/BarraNavegacao';

export default class atm_consultoria extends Component {
  render() {
    return (
        <View>
            <StatusBar
                backgroundColor='#CCC'
            />
            <BarraNavecao />
        </View>
    );
  }
}

AppRegistry.registerComponent('atm_consultoria', () => atm_consultoria);
