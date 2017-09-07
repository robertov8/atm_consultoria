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
  View
} from 'react-native';

import BarraNavecao from './src/components/BarraNavegacao';

export default class atm_consultoria extends Component {
  render() {
    return (
        <View>
            <BarraNavecao />
        </View>
    );
  }
}

AppRegistry.registerComponent('atm_consultoria', () => atm_consultoria);
