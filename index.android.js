/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

import CenaPrincipal from './src/components/CenaPrincipal';

export default class atm_consultoria extends Component {
  render() {
    return (
        <CenaPrincipal />
    );
  }
}

AppRegistry.registerComponent('atm_consultoria', () => atm_consultoria);
