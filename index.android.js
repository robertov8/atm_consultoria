/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';

export default class atm_consultoria extends Component {
  render() {
    return (
        <Navigator
            initialRoute={{id: 'a'}}
            renderScene={(route, navigator) => {
                if (route.id === 'a') {
                    return (<CenaPrincipal navigator={navigator} />);
                }
                if (route.id === 'b') {
                    return (<CenaClientes navigator={navigator} />);
                }
            }}
        />
    );
  }
}

AppRegistry.registerComponent('atm_consultoria', () => atm_consultoria);
