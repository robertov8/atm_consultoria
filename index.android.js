/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View, Navigator } from 'react-native';

import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';

export default class atm_consultoria extends Component {
  render() {
    return (
        <Navigator
            initialRoute={}
            renderScene={(route, navigator) => {}}
        />
    );
  }
}

AppRegistry.registerComponent('atm_consultoria', () => atm_consultoria);
