/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

import CenaClientes from './src/components/CenaClientes';

export default class atm_consultoria extends Component {
  render() {
    return (
        <CenaClientes />
    );
  }
}

AppRegistry.registerComponent('atm_consultoria', () => atm_consultoria);
